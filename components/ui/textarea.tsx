import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 text-foreground flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "autofill:bg-transparent autofill:text-foreground [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:shadow-[0_0_0_1000px_var(--background)_inset] [&:-webkit-autofill]:text-foreground [&:-webkit-autofill]:[-webkit-text-fill-color:var(--foreground)]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
