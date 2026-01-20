"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import FadeIn from "@/components/animations/FadeIn";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setError(null);

    // Honeypot check - if filled, it's a bot
    // Show fake success but don't send anything
    if (values.honeypot) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      form.reset();
      setIsSubmitting(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send main email to you (portfolio owner)
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        publicKey,
      );

      // Send auto-reply confirmation to the submitter
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            to_name: values.name,
            to_email: values.email,
            subject: values.subject,
            message: values.message,
          },
          publicKey,
        );
      }

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <FadeIn delay={0.2} className="w-full">
      <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-heading">
            Send a Message
          </CardTitle>
          <CardDescription>
            Have a project in mind or just want to say hi? Fill out the form
            below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you as soon as
                possible.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                variant="outline"
                className="mt-4"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Honeypot field - hidden from users, bots will fill this */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Leave this field empty</FormLabel>
                        <FormControl>
                          <Input tabIndex={-1} autoComplete="off" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </FadeIn>
  );
}
