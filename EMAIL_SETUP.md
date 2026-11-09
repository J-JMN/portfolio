# Contact Email Setup

The contact form sends mail from the Next.js server through authenticated SMTP. The browser never receives the SMTP password.

## Message addresses

| Message | From | To | Reply-To |
|---|---|---|---|
| Website notification | `INTAVOR Website <contact@intavor.co.ke>` | `contact@intavor.co.ke` | The visitor |
| Visitor confirmation | `INTAVOR <contact@intavor.co.ke>` | The visitor | `contact@intavor.co.ke` |

The `contact@intavor.co.ke` alias delivers to the `business@intavor.co.ke` Zoho mailbox.

## Zoho Mail

The domain already has Zoho MX, SPF, DKIM, and DMARC records, and `contact@intavor.co.ke` is already an alias of `business@intavor.co.ke`.

One private credential is required:

1. Open the Zoho account for `business@intavor.co.ke`.
2. Go to **Security** → **Application-Specific Passwords**.
3. Generate a password named `INTAVOR Vercel`.
4. Copy it once. Do not put it in this repository.

An application-specific password is recommended and is required when multi-factor authentication is enabled.

## Vercel

In the Vercel project, open **Settings** → **Environment Variables** and add:

```text
SMTP_PASSWORD=<the Zoho application-specific password>
```

Apply it to Production, Preview, and Development if all environments should be able to send mail, then redeploy.

The application already defaults to the free Zoho organization settings:

```text
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
SMTP_USER=contact@intavor.co.ke
CONTACT_FROM_EMAIL=contact@intavor.co.ke
CONTACT_TO_EMAIL=contact@intavor.co.ke
```

Add those variables in Vercel only when overriding a default. Paid Zoho organization accounts may need `SMTP_HOST=smtppro.zoho.com`; use the exact outgoing server shown under Zoho Mail **Server Configuration Details**.

## Local development

Copy `.env.example` to `.env.local`, set `SMTP_PASSWORD`, then run:

```bash
npm run dev
```

The old `NEXT_PUBLIC_EMAILJS_*` variables are no longer read and can be removed from local and Vercel settings.

## Sending regular mail from the domain

In Zoho Mail, compose a message and select `contact@intavor.co.ke` or `business@intavor.co.ke` from the **From** dropdown. Under **Settings** → **Send Mail As**, set the display name and preferred default address. This controls what recipients see for messages sent manually from Zoho; application code cannot change the default in the Zoho webmail account.

## Verification

```bash
npm test
npm run lint
npm run build
```

Submit the deployed contact form using an address you can inspect, then confirm:

1. The notification appears in the Zoho mailbox and its **To** address is `contact@intavor.co.ke`.
2. Replying to the notification targets the visitor.
3. The visitor receives the confirmation from `contact@intavor.co.ke`.
4. Replying to the confirmation targets `contact@intavor.co.ke`.
