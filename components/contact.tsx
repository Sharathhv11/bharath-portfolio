import { Mail, MapPin } from "lucide-react";
import { engineer } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <SectionShell id="contact" className="pb-16">
      <Reveal>
        <div className="panel relative overflow-hidden p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionHeading
                eyebrow="Landing"
                title="Ready for the next mission"
                copy={engineer.contactMessage}
              />
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-black/5 px-4 py-2">
                  <MapPin size={16} className="text-accent" />
                  {engineer.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-black/5 px-4 py-2">
                  <Mail size={16} className="text-accent" />
                  bharath51604@gmail.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:bharath51604@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Email Bharath
              </a>
              <a
                href="#top"
                className="inline-flex items-center justify-center rounded-full border border-stroke bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                Return to Top
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

