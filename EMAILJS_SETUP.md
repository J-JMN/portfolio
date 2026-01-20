# EmailJS Setup Guide

Follow these steps to configure EmailJS for your portfolio contact form.

## 1. Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/) and sign up (free)
2. You get **200 free emails/month**

## 2. Add Email Service

1. Go to **Email Services** → **Add New Service**
2. Select **Gmail**
3. Click **Connect Account** and authorize your Gmail (`j.mburu.pro@gmail.com`)
4. Name it something like `portfolio_gmail`
5. Click **Create Service**
6. Copy the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template (Notification to You)

1. Go to **Email Templates** → **Create New Template**
2. Use these settings:

**Template Name:** `contact_form`

**To Email:** `j.mburu.pro@gmail.com`

**From Name:** `Portfolio Contact`

**Subject:**
```
🔔 New Inquiry: {{subject}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 16px 16px 0 0; padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">📬 New Message Received</h1>
      <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0; font-size: 14px;">Someone reached out through your portfolio</p>
    </div>
    
    <!-- Content -->
    <div style="background-color: #1e293b; padding: 30px; border-radius: 0 0 16px 16px;">
      
      <!-- Sender Info -->
      <div style="background-color: #334155; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 80px;">From</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-size: 15px; font-weight: 600;">{{from_name}}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:{{from_email}}" style="color: #818cf8; text-decoration: none; font-size: 15px;">{{from_email}}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Subject</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-size: 15px;">{{subject}}</td>
          </tr>
        </table>
      </div>
      
      <!-- Message -->
      <div style="background-color: #0f172a; border-left: 4px solid #6366f1; border-radius: 8px; padding: 20px;">
        <h3 style="color: #e2e8f0; margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
        <p style="color: #cbd5e1; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 15px;">{{message}}</p>
      </div>
      
      <!-- Action Button -->
      <div style="text-align: center; margin-top: 25px;">
        <a href="mailto:{{from_email}}?subject=Re: {{subject}}" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">↩️ Reply Now</a>
      </div>
      
    </div>
    
    <!-- Footer -->
    <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 20px;">Sent from your portfolio contact form</p>
    
  </div>
</body>
</html>
```

3. Click **Save** and copy the **Template ID** (e.g., `template_xyz789`)

## 4. Create Auto-Reply Template (Confirmation to Submitter)

1. Go to **Email Templates** → **Create New Template**
2. Use these settings:

**Template Name:** `contact_autoreply`

**⚠️ IMPORTANT - To Email:** `{{to_email}}` ← This MUST be set in the "To Email" field!

**From Name:** `Joseph Mburu`

**Reply To:** `j.mburu.pro@gmail.com`

**Subject:**
```
✅ Got your message! - {{subject}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 16px 16px 0 0; padding: 30px; text-align: center;">
      <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 28px;">✉️</span>
      </div>
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Message Received!</h1>
    </div>
    
    <!-- Content -->
    <div style="background-color: #1e293b; padding: 30px; border-radius: 0 0 16px 16px;">
      
      <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">Hi <strong>{{to_name}}</strong>,</p>
      
      <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">Thank you for reaching out through my portfolio! I've received your message and will get back to you within <strong style="color: #10b981;">24-48 hours</strong>.</p>
      
      <!-- Auto-reply notice -->
      <div style="background-color: #fef3c7; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
        <p style="color: #92400e; font-size: 13px; margin: 0;">🤖 <strong>This is an automated confirmation.</strong> I'll personally respond soon!</p>
      </div>
      
      <!-- Message Copy -->
      <div style="background-color: #334155; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="color: #94a3b8; margin: 0 0 15px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Your Message</h3>
        <p style="color: #e2e8f0; font-size: 14px; margin: 0 0 10px;"><strong>Subject:</strong> {{subject}}</p>
        <div style="background-color: #1e293b; border-radius: 8px; padding: 15px; margin-top: 10px;">
          <p style="color: #cbd5e1; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 14px;">{{message}}</p>
        </div>
      </div>
      
      <!-- Connect Section -->
      <div style="text-align: center; padding: 20px 0; border-top: 1px solid #334155;">
        <p style="color: #94a3b8; font-size: 13px; margin: 0 0 15px;">Let's connect in the meantime:</p>
        <div>
          <a href="https://www.linkedin.com/in/joseph-mburu-n/" style="display: inline-block; background-color: #0077b5; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 13px; margin: 0 5px;">LinkedIn</a>
          <a href="https://github.com/J-JMN" style="display: inline-block; background-color: #333; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 13px; margin: 0 5px;">GitHub</a>
        </div>
      </div>
      
      <!-- Signature -->
      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #334155;">
        <p style="color: #cbd5e1; font-size: 15px; margin: 0;">Best regards,</p>
        <p style="color: #f1f5f9; font-size: 16px; font-weight: 600; margin: 5px 0;">Joseph Mburu</p>
        <p style="color: #6366f1; font-size: 13px; margin: 0;">Fullstack Web Developer</p>
      </div>
      
    </div>
    
    <!-- Footer -->
    <p style="text-align: center; color: #64748b; font-size: 11px; margin-top: 20px;">You're receiving this because you contacted me through my portfolio.<br/>Reply directly to this email if you have questions.</p>
    
  </div>
</body>
</html>
```

3. Click **Save** and copy the **Template ID** (e.g., `template_autoreply123`)

> ⚠️ **FIX FOR "Recipients address is empty" ERROR:**  
> Make sure the **To Email** field in EmailJS template settings is set to `{{to_email}}` (not your email!)

## 5. Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## 6. Update Your `.env.local`

Replace the placeholder values with your actual IDs:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID=template_autoreply123
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 7. Restart Dev Server

```bash
npm run dev
```

## Security Notes

- The public key is safe to expose (it's designed for client-side use)
- Honeypot protection prevents bot spam
- EmailJS has built-in rate limiting
- Your Gmail password is NEVER exposed - only EmailJS has OAuth access

## Testing

1. Fill out the contact form on your site
2. You should receive the notification email
3. The submitter should receive the auto-reply confirmation
