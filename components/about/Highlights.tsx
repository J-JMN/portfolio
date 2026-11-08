import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <dl className="grid w-full max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-background/60 py-4 backdrop-blur-md">
      {highlights.map((item) => (
        <div key={item.label} className="flex flex-col px-4 sm:px-5">
          <dt className="order-2 mt-1 text-xs leading-snug text-white/70 sm:text-sm">
            {item.label}
          </dt>
          <dd className="text-2xl font-heading font-bold text-[#c8c1ff] md:text-3xl">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
