import { engineer } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <SectionShell id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Entering Sky"
            title="Engineering built on structural clarity"
            copy={engineer.summary}
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="panel relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Education</p>
                <p className="mt-4 text-lg leading-8 text-black">{engineer.education}</p>
              </div>
              <div>
                <p className="eyebrow">Certifications</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {engineer.certifications.map((certification) => (
                    <p key={certification}>{certification}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Aircraft structures across fighter and commercial programs",
                "Repair engineering grounded in SRM-guided decision making",
                "Documentation discipline suited for production environments",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-stroke bg-black/[0.03] p-4 text-sm leading-7 text-slate-600"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="panel relative mt-16 overflow-hidden p-8 md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-black/5 blur-3xl" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-xs uppercase text-accent/70">
                Flight Deck
              </span>
              <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs uppercase text-slate-700">
                Active
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Programs",
                  value: "LCA MkII • Airbus A320",
                },
                {
                  label: "Core Focus",
                  value: "Structural design, repair logic, production support",
                },
                {
                  label: "Engineering Output",
                  value: "Repair drawings, concessions, ESDM, ENCA",
                },
                {
                  label: "Systems",
                  value: "CATIA V5 • ENOVIA • SAP",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border border-stroke bg-white/50 p-4 ${
                    index === 1 ? "animate-drift" : ""
                  }`}
                >
                  <p className="text-xs uppercase text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base leading-7 text-black">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

