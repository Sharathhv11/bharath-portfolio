import { skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Aircraft Systems"
          title="Skills organized like flight-critical modules"
          copy="The skill architecture combines structural design capability, repair logic, enterprise documentation, and production-facing execution. Each module reflects the systems thinking required in aerospace environments."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="panel group relative overflow-hidden p-7 transition duration-500 hover:-translate-y-1 hover:border-black/5 hover:bg-black/[0.02]">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-black/5 blur-3xl transition duration-500 group-hover:bg-black/10" />
              <p className="eyebrow">{group.title}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                {group.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stroke bg-white/60 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

