type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
