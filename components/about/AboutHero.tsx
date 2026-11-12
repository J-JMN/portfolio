import PageBanner from "@/components/layout/PageBanner";
import AboutArt from "@/components/illustrations/AboutArt";
import Highlights from "@/components/about/Highlights";

export default function AboutHero() {
  return (
    <PageBanner
      eyebrow="Intent + Endeavor"
      title={
        <>
          Intent gives the work direction.{" "}
          <span className="text-[#a99cff]">Endeavor carries it through.</span>
        </>
      }
      description="INTAVOR brings clear thinking, purposeful design, and dependable development together to create digital experiences that represent organisations at their best."
        visual={<AboutArt />}
      actions={<Highlights />}
    />
  );
}
