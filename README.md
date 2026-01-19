# Joseph Mburu - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. Features smooth animations, a dark theme, and a clean design to showcase professional work and skills.

## Features

- **Responsive Design** - Fully responsive across all devices
- **Modern UI** - Clean, professional design with a dark theme
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Dynamic Content** - Easily customizable data-driven content
- **Contact Form** - React Hook Form with Zod validation
- **SEO Optimized** - Built with Next.js App Router for optimal performance

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated profile, quick intro, and call-to-action |
| **About** | Detailed background, highlights, and reasons to work together |
| **Skills** | Categorized technical skills (Frontend, Backend, Tools) |
| **Experience** | Professional timeline with work history |
| **Projects** | Portfolio of completed projects with details and links |
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
│   ├── experience/        # Experience/work history page
│   ├── projects/          # Projects listing and detail pages
│   ├── skills/            # Skills showcase page
│   ├── globals.css        # Global styles and Tailwind theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── about/             # About page components
│   ├── animations/        # Reusable animation components (FadeIn, TextReveal)
│   ├── contact/           # Contact form components
│   ├── experience/        # Timeline components
│   ├── home/              # Hero, QuickContact components
│   ├── layout/            # Navbar, Footer
│   ├── projects/          # Project cards and grids
│   ├── skills/            # Skills grid components
│   └── ui/                # Base UI components (Button, Badge, Input, etc.)
├── lib/
│   ├── data.ts            # Portfolio content data (projects, skills, experience)
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

### Personal Information

Edit `lib/data.ts` to update:
- **personalInfo** - Name, role, bio, email, location, social links
- **skills** - Frontend, backend, and tools categories
- **experience** - Work history timeline
- **projects** - Portfolio projects with images and links
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

This project is NOT open source and all rights reserved to Joseph Mburu.

## Contact

**Joseph Mburu** - Fullstack Web Developer

- Email: j.mburu.pro@gmail.com
- LinkedIn: [joseph-mburu-n](https://www.linkedin.com/in/joseph-mburu-n/)
- GitHub: [J-JMN](https://github.com/J-JMN)
