# INTAVOR

Production website for INTAVOR, a founder-led website and web application development studio based in Nairobi.

- **Workspace:** `/home/hush/Dev/INTAVOR`
- **Live site:** `https://intavor.co.ke`
- **Founder and developer:** Joseph Mburu
- **Email:** `contact@intavor.co.ke`

## Brand foundation

- **Name:** INTAVOR
- **Tagline:** Tech built with intention.
- **Services:** Website design and development, custom web applications, and after-launch care
- **Location:** Nairobi, Kenya

### Meaning

INTAVOR combines **Intent** and **Endeavor**:

> Intent gives the work direction. Endeavor carries it through.

### Purpose

> To turn clear intent into digital experiences that help organisations
> communicate with confidence, earn trust, and move forward.

### Positioning

INTAVOR designs and builds thoughtful websites and web applications that help
businesses and organisations communicate their value, earn trust, and make the
next step clear.

### Service model

1. **Website design and development** for a clear, credible digital presence.
2. **Custom web application development** for connected services, workflows,
   integrations, and administration.
3. **After-launch care** for INTAVOR-built websites that need updates,
   refinements, and technical support.

### Voice

INTAVOR should sound calm, clear, capable, and practical.

Use:

- specific outcomes;
- short, confident sentences;
- straightforward explanations;
- evidence from real work;
- direct founder accountability; and
- dependable support beyond launch.

Avoid:

- “cutting-edge solutions”;
- “we bring ideas to life”;
- exaggerated promises;
- excessive technical jargon;
- long dashes in public copy;
- invented team language; and
- unsupported claims, results, or testimonials.

## Repository structure

```text
app/                         Website routes, metadata, and global styles
components/                  Website sections and reusable UI
lib/data.ts                  Shared brand, founder, testimonial, service, engagement, and project data
lib/contact*.ts              Contact-form validation and email delivery
lib/site.ts                  Canonical origin and shared metadata
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

Shared website content is in `lib/data.ts`:

- `brandInfo` — brand wording, email, location, and availability;
- `founderInfo` — public founder identity and role;
- `clientTestimonials` — approved client testimonial copy and relationships;
- `services` — website development, web applications, and after-launch care;
- `clientEngagements` — ongoing support relationships;
- `projects` — selected website work; and
- `highlights` — About-page figures.

Service-page content is route-local under `app/services/`. Theme colours are in
`app/globals.css`. Brand and social-preview assets remain under `public/brand/`;
this repository does not define an active social publishing workflow.

## Contact form and email

The contact form sends mail from the Next.js server through authenticated Zoho
SMTP. The browser never receives the SMTP password.

### Addresses

| Message | From | To | Reply-To |
|---|---|---|---|
| Website notification | `INTAVOR <contact@intavor.co.ke>` | `contact@intavor.co.ke` | The visitor |
| Visitor confirmation | `INTAVOR <contact@intavor.co.ke>` | The visitor | `contact@intavor.co.ke` |

`contact@intavor.co.ke` delivers to the INTAVOR Zoho mailbox.

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

### Hosting

In Vercel:

1. Open **Settings → Environment Variables**.
2. Add `SMTP_PASSWORD`.
3. Apply it to the required environments.
4. Redeploy.
5. Submit a real contact-form test.
6. Confirm both the company notification and visitor confirmation arrive.

## Deployment

The `main` branch is the production branch for `https://intavor.co.ke`.

Before deployment:

```bash
npm test
npm run lint
npm run build
```

After a production deployment:

1. verify the changed pages;
2. submit a contact-form test when form or email code changed;
3. check analytics and metadata where relevant; and
4. treat live verification separately from a successful local build.

## SEO and discovery

- Canonical origin: `https://intavor.co.ke`
- Google Search Console is already configured.
- `https://intavor.co.ke/sitemap.xml` is already submitted and does not need
  routine resubmission after deployments.
- `app/robots.ts` and `app/sitemap.ts` generate the canonical crawl files.
- Root structured data describes INTAVOR, Joseph Mburu, the service catalogue,
  Nairobi location, and Kenya/international service area.
- Use Search Console query and page data to decide later SEO content changes.
- Do not add INTAVOR credit links to client websites.

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
