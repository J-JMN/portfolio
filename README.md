# INTAVOR Operations Guide

This repository contains the INTAVOR website, active social-media launch
campaign, social profile graphics, and reusable company and staff business
cards.

Use this document as the working manual for:

- running and maintaining the website;
- setting up Instagram, TikTok, and Facebook;
- publishing the first four weeks of social content;
- generating social images and personalized business cards;
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
public/brand/                Website logos and active marketing assets
public/brand/social/         Profile image and Facebook cover
public/brand/social/brand-first/
                             Twelve active social posts
public/brand/business-card/  Company and staff card files
public/images/               Project images used by the website
scripts/generate-marketing-assets.mjs
                             Social and card asset generator
```

Each generated marketing asset has:

- an editable `.svg` master; and
- a ready-to-use `.png` export.

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
| `npm run assets:generate` | Regenerate all active social and card SVG/PNG files |

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

## Social strategy

### Operating model

The campaign is deliberately static and brand-first:

- create no videos;
- post three times per week;
- use the same 4:5 PNG on Instagram, TikTok Photo Mode, and Facebook;
- use one caption on all three platforms;
- make INTAVOR’s thinking and value the subject;
- keep client websites on the website as supporting proof; and
- mention a client project only occasionally and only to explain an INTAVOR
  capability.

The active social images are only those in:

```text
public/brand/social/brand-first/
```

### Content mix after the launch month

- **40% education** — clarity, usability, performance, and website decisions.
- **30% brand and process** — Intent + Endeavor and how INTAVOR works.
- **20% service** — Build, Manage, and Improve.
- **10% proof** — an occasional result or capability demonstrated through
  selected work.

### Standard weekly schedule

Use East Africa Time:

| Day | Time | Content |
|---|---:|---|
| Monday | 6:30 PM | Brand perspective or service |
| Wednesday | 12:30 PM | Educational/saveable post |
| Friday | 6:30 PM | Practical advice, process, or call to action |

Publish each post on all three platforms at the same scheduled time.

After four weeks, compare platform analytics. Keep the times that generate the
most profile visits, saves, website clicks, messages, and qualified enquiries.
Follower count alone is not the main business metric.

### Publishing workflow

For each scheduled post:

1. Open the matching PNG in `public/brand/social/brand-first/`.
2. Copy the caption from the launch calendar below.
3. Schedule Instagram and Facebook together in Meta Business Suite.
4. In TikTok, tap **+**, choose **Photo**, upload the same PNG, and paste the
   caption.
5. Add low-volume music in TikTok only if desired; the post must still make
   sense without sound.
6. Check the crop before publishing. Do not add another text layer over the
   artwork.
7. Reply to comments and messages on the same day.
8. Record reach, profile visits, saves, link clicks, messages, and enquiries.

Meta Business Suite manages the Instagram and Facebook posts only. It does not
publish the TikTok Photo Mode version, so post that separately in TikTok.

### Hashtags

Append this small set to each launch caption:

```text
#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

Do not add unrelated trending hashtags.

Do not include website URLs, email addresses, or other contact links in post
captions. Direct people to the profile link, platform action button, or direct
messages instead so the same caption works cleanly on Instagram and Facebook.

## Four-week launch calendar

The initial calendar begins Monday, 16 November 2026. If the accounts are not
ready, shift the dates forward while retaining the Monday–Wednesday–Friday
order and times.

| Post | Date | Time (EAT) | File |
|---:|---|---:|---|
| 1 | Mon, 16 Nov 2026 | 6:30 PM | `01-tech-built-with-intention.png` |
| 2 | Wed, 18 Nov 2026 | 12:30 PM | `02-intent-meets-endeavor.png` |
| 3 | Fri, 20 Nov 2026 | 6:30 PM | `03-build-manage-improve.png` |
| 4 | Mon, 23 Nov 2026 | 6:30 PM | `04-digital-first-impression.png` |
| 5 | Wed, 25 Nov 2026 | 12:30 PM | `05-three-things-clear.png` |
| 6 | Fri, 27 Nov 2026 | 6:30 PM | `06-rebuild-or-improve.png` |
| 7 | Mon, 30 Nov 2026 | 6:30 PM | `07-after-launch.png` |
| 8 | Wed, 2 Dec 2026 | 12:30 PM | `08-underperforming-signs.png` |
| 9 | Fri, 4 Dec 2026 | 6:30 PM | `09-built-around-business.png` |
| 10 | Mon, 7 Dec 2026 | 6:30 PM | `10-support-matters.png` |
| 11 | Wed, 9 Dec 2026 | 12:30 PM | `11-how-we-work.png` |
| 12 | Fri, 11 Dec 2026 | 6:30 PM | `12-discuss-your-website.png` |

All files are inside `public/brand/social/brand-first/`.

### Post 1 — Meet INTAVOR

```text
Meet INTAVOR.

We build, manage and improve websites and web applications for businesses and organisations.

Clear thinking. Dependable execution. Support beyond launch.

Tech built with intention.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 2 — Behind the name

```text
INTAVOR comes from two ideas: Intent + Endeavor.

Intent gives the work direction.
Endeavor carries it through.

That means thoughtful decisions followed by focused execution—not technology for its own sake.

That is the standard behind everything we build.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 3 — Build, Manage, Improve

```text
Your organisation may need its first website or a new one that better fits where it is today.

INTAVOR helps at every stage:

Build.
Manage.
Improve.

From first delivery to everything that comes next.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 4 — First impressions

```text
Before someone calls, emails or visits your business, your website has probably already introduced you.

It communicates your standards, clarity and credibility before you ever speak to the visitor.

Make that first impression intentional.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 5 — Website clarity

```text
A useful business website should make three things immediately clear:

1. What you do.
2. Who it is for.
3. What the visitor should do next.

If visitors have to search for these answers, the website is making their decision harder.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 6 — A website that fits today

```text
Sometimes a website no longer reflects the business behind it.

When repeated patches cannot solve the larger problem, the better step may be a new website built around what the business needs today.

• clearer content
• a better mobile experience
• improved usability and speed
• a simpler enquiry journey

Start with what the next website needs to accomplish.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 7 — Beyond launch

```text
Launching a website is an important milestone—but it is not the finish line.

Your services change. Your audience changes. Your organisation grows.

A dependable website should be updated, supported and improved alongside the organisation behind it.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 8 — Website check

```text
Your website may be underperforming if:

1. Visitors cannot quickly understand what you offer.
2. The mobile experience is difficult to use.
3. Completing an enquiry involves unnecessary effort.

A website can look attractive and still create friction for the people it should be helping.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 9 — Technology should fit the business

```text
Your business should not have to reshape itself around the technology.

The technology should be shaped around your audience, workflows and goals.

That starts with understanding what the website genuinely needs to achieve.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 10 — Ongoing support

```text
A dependable website needs dependable support.

After delivery, ongoing website support helps you:

• keep information current
• fix friction before it becomes a bigger problem
• maintain the platform and its dependencies
• add improvements as new needs emerge

A website should remain useful long after launch day.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 11 — How INTAVOR works

```text
Our approach is clear at every stage:

1. Understand the organisation, audience and goals.
2. Build with purpose.
3. Keep the website working after delivery.

No unnecessary complexity. No disappearing after launch.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

### Post 12 — Start a conversation

```text
What should your website be doing better?

Whether you need your first website, a new one that better fits or dependable support after delivery, let’s start with a conversation.

#INTAVOR #WebDevelopmentKenya #WebsiteSupport #NairobiBusiness
```

## Continuing after the launch month

Repeat the Monday–Wednesday–Friday rhythm, but do not repost the same artwork
immediately.

Use these recurring themes:

1. one common website mistake;
2. one question a business should ask before commissioning a website;
3. one practical explanation of ongoing support;
4. one Build, Manage, or Improve service;
5. one short INTAVOR principle;
6. one myth versus reality;
7. one website self-check;
8. one frequently asked client question; and
9. occasionally, one capability demonstrated by selected work.

Every post should do one primary job:

- build recognition;
- teach something useful;
- demonstrate competence; or
- invite an enquiry.

## Generating social and card assets

The generator creates exactly 18 active asset pairs:

- 12 social launch posts;
- 1 social profile image;
- 1 Facebook cover;
- 2 company-card sides; and
- 2 staff-card sides.

Run:

```bash
npm run assets:generate
```

The generator always uses the same filenames, so it replaces an existing asset
rather than adding duplicates. It compares the generated SVG content with the
existing master:

- changed or missing SVG files are written;
- PNG files are re-exported only when their SVG changed or the PNG is missing;
- unaffected SVG and PNG files are left untouched; and
- deleted active assets are restored the next time the command runs.

PNG conversion is handled automatically by Sharp.

To intentionally rebuild all 18 SVG/PNG pairs:

```bash
npm run assets:generate -- --force
```

### Editing the design system

Edit `scripts/generate-marketing-assets.mjs` to change:

- colours in `palette`;
- wording and layouts;
- social-post content;
- company-card content; or
- default staff-card placeholders.

After any edit:

```bash
npm run assets:generate
npm run lint
npm run build
```

Open and inspect the affected PNGs before using or printing them.

## Business cards

### Company card

Use this when the card represents INTAVOR rather than one employee:

```text
public/brand/business-card/intavor-card-front.png
public/brand/business-card/intavor-card-back.png
```

Editable masters:

```text
public/brand/business-card/intavor-card-front.svg
public/brand/business-card/intavor-card-back.svg
```

### Staff card

Use this for a founder, developer, salesperson, or any other team member:

```text
public/brand/business-card/intavor-staff-card-front.png
public/brand/business-card/intavor-staff-card-back.png
```

Generate a named staff card without editing source code:

```bash
INTAVOR_STAFF_NAME="Full Name" \
INTAVOR_STAFF_ROLE="Role / Department" \
INTAVOR_STAFF_PHONE="+254 700 000 000" \
INTAVOR_STAFF_EMAIL="name@intavor.co.ke" \
npm run assets:generate
```

This updates the staff-card front with the supplied details. The other assets
are checked but remain untouched when their generated content has not changed.
If an environment variable is omitted, its editable placeholder is used.

Do not commit private personal contact details unless the card is intended to
be public in the repository.

### Printing

The card canvas is prepared for a 90 × 50 mm finished card with 3 mm bleed:

- artwork canvas: 96 × 56 mm;
- raster export: 1134 × 661 pixels;
- intended print resolution: 300 DPI;
- orientation: landscape;
- print both sides;
- use a matte or soft-touch finish; and
- request a physical proof before ordering a large quantity.

Give the printer the SVG masters for the cleanest result. Confirm that:

- no text is cropped;
- the finished trim is 90 × 50 mm;
- the background extends through the bleed;
- front and back orientation match; and
- the phone number and email are correct.

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

### Before publishing a social post

- Correct PNG selected
- Correct date and EAT time
- Caption proofread
- Link and email correct
- Crop preview checked on all three platforms
- No unnecessary overlays or filters
- Comments and messages monitored

### Before printing cards

- Staff details finalized
- Staff assets regenerated
- SVG and PNG visually checked
- Front and back supplied
- 90 × 50 mm trim and 3 mm bleed confirmed
- One physical proof approved

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
