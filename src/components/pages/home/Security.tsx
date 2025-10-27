// src/components/pages/home/Security.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { securities } from "@/lib/utils"; // Load security sections data

gsap.registerPlugin(ScrollTrigger);

export function Security() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current.querySelectorAll("[data-animate='heading']"), {
          opacity: 0,
          y: 32,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        });
      }

      const sections = sectionRefs.current.filter(
        (row): row is HTMLDivElement => !!row,
      );

      if (sections.length) {
        gsap.from(sections, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
            once: true,
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  sectionRefs.current = sectionRefs.current.slice(0, securities.length);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-[#0a0903] text-[#f7f3f3]"
      data-name="Security Section"
      data-node-id="17:162"
    >
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px] py-30">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16">
          <div ref={headingRef} className="flex flex-col gap-5 max-w-3xl">
            <div
              data-animate="heading"
              className="text-[40px] leading-[1.25] m-0 flex flex-col gap-1"
            >
              <span>Security isn&apos;t optional for us.</span>
              <span>It&apos;s at the core of everything we build.</span>
            </div>
            <p
              data-animate="heading"
              className="m-0 text-[1.125rem] leading-[1.7] text-[#f7f3f3]/82"
            >
              BeeBlast is built with privacy-first principles and enterprise-grade encryption — so you stay fully in control of your data at all times.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {securities.map((section, index) => (
              <div
                key={section.title}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="grid gap-6 py-8 first:pt-0 last:pb-0 md:grid-cols-2 md:gap-12"
              >
                <div className="space-y-2 md:pr-12">
                  <p className="m-0 text-[1.2rem] font-semibold leading-[1.35] text-[#f7f3f3]">
                    {section.title}
                  </p>
                  <p className="m-0 text-[1.125rem] leading-[1.6] text-[#f7f3f3]/65">
                    {section.summary}
                  </p>
                </div>
                <div className="flex flex-col gap-5 md:border-l md:border-white/10 md:pl-12">
                  {section.items.map((item) => (
                    <div key={`${section.title}-${item.heading}`} className="space-y-1">
                      <p className="m-0 text-[1rem] font-medium leading-[1.5] text-[#f7f3f3]/90">
                        {item.heading}
                      </p>
                      <p className="m-0 text-[1rem] leading-[1.65] text-[#f7f3f3]/75">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
