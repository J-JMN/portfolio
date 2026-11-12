# INTAVOR Operations Guide

This repository contains the INTAVOR website and social profile graphics.

Use this document as the working manual for:

- running and maintaining the website;
- setting up Instagram, TikTok, and Facebook;
- configuring the website contact form; and
- verifying and deploying changes.

## Brand foundation

- **Name:** INTAVOR
- **Tagline:** Tech built with intention.
- **Service line:** Web development + ongoing website support
- **Location:** Nairobi, Kenya
- **Website:** `https://intavor.co.ke`
- **Email:** `contact@intavor.co.ke`

### Meaning

INTAVOR combines **Intent** and **Endeavor**:

> Intent gives the work direction. Endeavor carries it through.

### Purpose

> To turn clear intent into dependable digital products—and keep improving
> them as the organisations behind them grow.

### Positioning

INTAVOR builds, manages, and improves intentional websites and web
applications for businesses and organisations that need their digital
presence to keep working beyond launch.

### Service model

1. **Build** — websites and web applications shaped around real goals.
2. **Manage** — updates, technical care, and reliable support after delivery.
3. **Improve** — focused refinements to INTAVOR-delivered websites as an
   organisation evolves.

### Voice

INTAVOR should sound calm, clear, capable, and practical.

Use:

- specific outcomes;
- short, confident sentences;
- straightforward explanations;
- “build, manage, improve” consistently; and
- “support beyond launch” as a differentiator.

Avoid:

- “cutting-edge solutions”;
- “we bring ideas to life”;
- exaggerated promises;
- excessive technical jargon;
- long hashtag blocks; and
- making client companies the focus of INTAVOR’s social pages.

## Repository structure

```text
app/                         Website routes, metadata, and global styles
components/                  Website sections and reusable UI
lib/data.ts                  Brand, services, projects, and website copy
lib/contact*.ts              Contact-form validation and email delivery
public/brand/                Website logos and social profile graphics
public/brand/social/         Profile image and Facebook cover
public/images/               Project images used by the website
```

## Website development

### Requirements

- Node.js 20 or newer
- npm

### Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build the production website |
| `npm run start` | Serve an existing production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the contact-form tests |

### Website content

Most editable website content is in `lib/data.ts`:

- `brandInfo` — brand wording, email, location, and availability;
- `services` — Build, Manage, and Improve;
- `clientEngagements` — ongoing support relationships;
- `projects` — selected website work; and
- `highlights` — About-page figures.

Theme colours are in `app/globals.css`.

## Social accounts

INTAVOR’s active platforms are:

1. Instagram
2. TikTok
3. Facebook

Do not create an X content workflow unless the strategy changes later.

### Names and handles

Use these where available:

| Platform | Username | Display name |
|---|---|---|
| Instagram | `@intavor.co` | `INTAVOR \| Web Development` |
| TikTok | `@intavor.co` | `INTAVOR \| Websites` |
| Facebook | `@intavor.co` | `INTAVOR` |

For Facebook, use **Website Designer** as the primary category and **Software
Company** as a secondary category if Facebook permits both.

### Profile and cover files

- Profile image for all three platforms:
  `public/brand/social/profile-avatar.png`
- Facebook cover:
  `public/brand/social/facebook-cover.png`

Keep the same profile image on every account so people recognize the brand.

### Bios

#### Instagram

```text
Intentional websites that keep working.
Build • Manage • Improve
Nairobi → beyond
Start your project ↓
```

Set the profile link to `https://intavor.co.ke/contact`.

#### TikTok

```text
Intentional websites. Built, managed & improved. Nairobi → beyond.
```

Set the website link to `https://intavor.co.ke` when the account is eligible
for a clickable link.

#### Facebook

Short bio:

```text
Intentional websites built, managed and improved for businesses and organisations.
```

Long About description:

```text
INTAVOR builds and manages websites and web applications for businesses and
organisations—from initial delivery to ongoing updates, improvements and
technical support. Based in Nairobi, working beyond.
```

Add:

- website: `https://intavor.co.ke`;
- email: `contact@intavor.co.ke`;
- location: Nairobi, Kenya; and
- action button: **Contact Us**, linked to
  `https://intavor.co.ke/contact`.

## Contact form and email

The contact form sends mail from the Next.js server through authenticated Zoho
SMTP. The browser never receives the SMTP password.

### Addresses

| Message | From | To | Reply-To |
|---|---|---|---|
| Website notification | `INTAVOR <contact@intavor.co.ke>` | `contact@intavor.co.ke` | The visitor |
| Visitor confirmation | `INTAVOR <contact@intavor.co.ke>` | The visitor | `contact@intavor.co.ke` |

`contact@intavor.co.ke` should deliver to the company’s Zoho mailbox.

### Required secret

Generate a Zoho application-specific password:

1. Sign in to the Zoho account used by INTAVOR.
2. Open **Security**.
3. Open **Application-Specific Passwords**.
4. Create a password for the website.
5. Copy it once and never commit it.

Add this server-side variable locally and in the hosting platform:

```text
SMTP_PASSWORD=<Zoho application-specific password>
```

The application defaults are documented in `.env.example`. Override them only
when the real Zoho configuration differs.

### Local configuration

```bash
cp .env.example .env.local
```

Add the real secret to `.env.local`. This file is ignored by Git.

### Vercel

In the Vercel project:

1. Open **Settings → Environment Variables**.
2. Add `SMTP_PASSWORD`.
3. Apply it to the required environments.
4. Redeploy.
5. Submit a real contact-form test.
6. Confirm both the company notification and visitor confirmation arrive.

## Deployment

The website is configured for a standard Next.js deployment.

Before deployment:

```bash
npm test
npm run lint
npm run build
```

For Vercel:

1. connect the GitHub repository;
2. configure the server-side email secret;
3. deploy the main branch;
4. verify every page;
5. submit a contact-form test; and
6. check analytics and metadata.

## Routine checklist

### Before deploying website changes

- No secrets added to Git
- Tests pass
- Lint passes
- Production build passes
- Changed pages inspected on mobile and desktop
- Contact form retested when email or form code changes

## Ownership

This repository and its brand assets are private INTAVOR property. All rights
are reserved.
