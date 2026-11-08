import PageBanner from "@/components/layout/PageBanner";
import AboutArt from "@/components/illustrations/AboutArt";
import Highlights from "@/components/about/Highlights";

export default function AboutHero() {
  return (
    <PageBanner
      eyebrow="Intent + Endeavor"
      title={
        <>
          Intentional technology,{" "}
          <span className="text-[#a99cff]">built to keep working.</span>
        </>
      }
      description="INTAVOR combines clear thinking with practical delivery, creating websites and applications that remain useful well beyond launch."
        visual={<AboutArt />}
      actions={<Highlights />}
    />
  );
}
