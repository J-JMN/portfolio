interface PageBannerProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  visual: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  visual,
  actions,
  aside,
}: PageBannerProps) {
  return (
    <section className="relative isolate flex min-h-[32rem] items-end overflow-hidden pb-14 pt-32 md:min-h-[36rem] md:pb-20">
      <div className="absolute inset-0 -z-20">{visual}</div>
      <div className="absolute inset-0 -z-10 bg-background/75 lg:bg-transparent lg:bg-linear-to-r lg:from-background lg:via-background/80 lg:via-40% lg:to-transparent lg:to-70%" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-background to-transparent" />

      <div className="container mx-auto grid min-w-0 items-end gap-10 px-4 md:px-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="min-w-0 max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/60 px-4 py-1.5 text-sm font-medium text-[#c8c1ff] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a99cff]" />
            {eyebrow}
          </span>
          <h1 className="text-4xl font-heading font-bold leading-[1.1] tracking-tight text-white text-balance md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside && <div className="min-w-0 lg:justify-self-end">{aside}</div>}
      </div>
    </section>
  );
}
