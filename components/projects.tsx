import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  return (
    <SectionShell id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Flight Path"
          title="Case studies from repair, design, and concession workflows"
          copy="These projects translate real aerospace experience into recruiter-friendly case studies. The structure stays factual: what the challenge was, how the work was approached, which systems were used, and what outcome was achieved."
        />
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-black/10 via-black/5 to-transparent md:block" />
        <div className="space-y-10">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <article className="relative md:pl-16">
                <div className="absolute left-[0.2rem] top-10 hidden h-8 w-8 rounded-full border border-black/10 bg-white shadow-glow md:block" />
                <div className="panel overflow-hidden p-7 md:p-9">
                  <div className="flex flex-col gap-4 border-b border-stroke pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="eyebrow">{project.phase}</p>
                      <h3 className="mt-3 font-display text-2xl uppercase text-black">
                        {project.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-slate-600">
                      Structured as a concise engineering case study for quick recruiter review.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs uppercase text-accent/80">
                          Problem
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-accent/80">
                          Approach
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {project.approach}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs uppercase text-accent/80">
                          Tools Used
                        </p>
                        <div className="mt-3 flex flex-wrap gap-3">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-stroke bg-black/[0.04] px-4 py-2 text-sm text-slate-700"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-accent/80">
                          Outcome
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

