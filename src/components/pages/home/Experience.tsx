// src/components/pages/home/Experience.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgCommaOrangeAutumn from "@assets/commaorangeautumn.svg";
import imgMartinBlueSummer from "@assets/martinbluesummer.svg";
import imgJoshCyanSummer from "@assets/joshcyansummer.svg";
import { experiences } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      experienceRefs.current.forEach((card, index) => {
        if (card) {
          gsap.set(card, {
            opacity: index === 0 ? 1 : 0,
            y: index === 0 ? 0 : 50,
          });
        }
      });

      const durationPerExperience = 2;
      const totalExperiences = experiences.length;
      const scrollDistance = totalExperiences * 750;

      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      experienceRefs.current.forEach((card, index) => {
        if (!card) return;

        if (index > 0) {
          masterTimeline.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        }

        if (index < totalExperiences - 1) {
          masterTimeline.to(card, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.in",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <section
        className="relative z-10 w-full max-w-full mx-auto overflow-hidden"
        data-name="Experience Intro Section"
        style={{
          backgroundImage: `url(${imgMartinBlueSummer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative gap-26 px-[10px] sm:px-[30px] py-36 min-h-screen text-[#f7f3f3]">
          <div className="mx-auto w-full max-w-[1440px] justify-center">
            <div className="flex flex-col gap-16 w-full">
              <div className="flex flex-col w-full text-[40px] leading-[1.3]">
                <p className="m-0">But,</p>
                <p className="m-0">we also care about your experiences</p>
              </div>
              <div className="flex w-full text-[40px] leading-[1.3] items-right justify-end">
                <p className="text-[40px] leading-[1.3] m-0 max-w-3xl">
                  We want to bring seemless interaction between BeeBlast and your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative z-10 w-full max-w-full mx-auto overflow-hidden"
        data-name="Experience Section"
        data-node-id="17:61"
        style={{
          backgroundImage: `url(${imgJoshCyanSummer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto w-full px-[10px] sm:px-[30px] text-[#f7f3f3]">
          <div className="mx-auto flex flex-row gap-8 py-30 min-h-screen max-w-[1440px] items-center">
            <div className="relative flex-1 w-full overflow-hidden">
              <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.title}
                    ref={(el) => {
                      experienceRefs.current[index] = el;
                    }}
                    className="absolute inset-0 flex flex-col gap-6 pr-6 py-8 sm:pr-10 sm:py-12 bg-transparent"
                  >
                    <p className="text-[2.25rem] sm:text-[2.5rem] leading-[1.25] m-0 text-[#f7f3f3]">
                      {experience.title}
                    </p>
                    <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.5] m-0 text-[#f7f3f3]/85">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 flex-shrink-0 max-w-3xl">
              <img
                src={imgCommaOrangeAutumn}
                alt="BeeBlast Preview"
                className="w-full h-[592px] rounded-[20px] object-cover"
                data-name="Background Preview"
                data-node-id="17:155"
              />
              <div className="flex flex-col w-full items-start text-left">
                <div className="text-[#f7f3f3] text-[40px] leading-[1.3] m-0">
                  BeeBlast is your employee,
                </div>
                <div className="text-[#f7f3f3] text-[40px] leading-[1.3] m-0">
                  you are fully in control
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
