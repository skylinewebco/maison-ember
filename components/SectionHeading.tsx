import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  heading: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, heading, subtitle, align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <Reveal as="div" className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      <div className={`flex items-center gap-4 mb-5 ${isCenter ? "" : ""}`}>
        {isCenter && <span className="h-px w-10 bg-line" aria-hidden />}
        <span className="eyebrow">{eyebrow}</span>
        {isCenter && <span className="h-px w-10 bg-line" aria-hidden />}
      </div>
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl text-cream ${isCenter ? "max-w-2xl" : "max-w-xl"}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-mute text-base md:text-lg ${isCenter ? "max-w-md" : "max-w-md"}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
