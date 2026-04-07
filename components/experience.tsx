import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <SectionShell id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Altitude Growth"
          title="A progression from structural design to repair ownership"
          copy="The timeline traces a clear career climb: foundation in airframe design at HAL, then deeper ownership in repair engineering and production support at AXISCADES."
        />
      </Reveal>

      <div className="mt-14 grid gap-6">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.08}>
            <article className="panel p-7 md:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                <div>
                  <p className="eyebrow">{item.period}</p>
                  <h3 className="mt-3 font-display text-2xl uppercase text-black">
                    {item.role}
                  </h3>
                  <p className="mt-3 text-base text-slate-600">{item.company}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-slate-600">{item.summary}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-stroke bg-black/[0.03] p-4 text-sm leading-7 text-slate-600"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
