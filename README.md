# INTAVOR Website

The public website for INTAVOR — Tech built with intention. It presents client platforms, ongoing website-management work, technical capabilities, and project enquiries.

## Features

- **Responsive Design** - Fully responsive across all devices
- **INTAVOR Brand System** - Branded assets, typography, and dark visual system
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Dynamic Content** - Easily customizable data-driven content
- **Contact Form** - React Hook Form with Zod validation
- **SEO Optimized** - Built with Next.js App Router for optimal performance

## Pages

| Page | Description |
|------|-------------|
| **Home** | Brand positioning, featured client work, and project call-to-action |
| **About** | INTAVOR's approach, meaning, and delivery highlights |
| **Skills** | Categorized technical skills (Frontend, Backend, Tools) |
| **Experience** | Client website management and ongoing support relationships |
| **Projects** | Selected client platforms and technical work with details and links |
| **Contact** | Contact form and social links |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Client website management page
│   ├── projects/          # Projects listing and detail pages
│   ├── skills/            # Skills showcase page
│   ├── globals.css        # Global styles and Tailwind theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── about/             # About page components
│   ├── animations/        # Reusable animation components (FadeIn, TextReveal)
│   ├── contact/           # Contact form components
│   ├── experience/        # Client engagement components
│   ├── home/              # Hero, QuickContact components
│   ├── layout/            # Navbar, Footer
│   ├── projects/          # Project cards and grids
│   ├── skills/            # Skills grid components
│   └── ui/                # Base UI components (Button, Badge, Input, etc.)
├── lib/
│   ├── data.ts            # Brand, projects, skills, and engagement data
│   └── utils.ts           # Utility functions
└── public/
    └── images/            # Project screenshots and profile picture
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/J-JMN/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Brand and Content

Edit `lib/data.ts` to update:
- **brandInfo** - Brand positioning, email, location, and social links
- **skills** - Frontend, backend, and tools categories
- **clientEngagements** - Ongoing website management and support
- **projects** - Selected projects with images and links
- **highlights** - Stats displayed on the about page

### Styling

- Theme colors and CSS variables are defined in `app/globals.css`
- Tailwind configuration uses CSS-first approach with `@theme` directive
- Components use `cn()` utility for conditional class merging

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy automatically

Alternatively, build and deploy to any Node.js hosting platform:
```bash
npm run build
npm run start
```

## License

This project is not open source. All rights are reserved to INTAVOR.

## Contact

**INTAVOR** — Tech built with intention.

- Email: intavortech@gmail.com
