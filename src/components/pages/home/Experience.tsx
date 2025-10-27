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
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1920px] z-10 bg-[#0a0903] overflow-hidden"
      data-name="Experience Section"
      data-node-id="17:61"
    >
      <div className="absolute inset-0 pointer-events-none select-none -z-10">
        <img alt="" className="absolute left-0 top-0 w-full max-w-[1920px] opacity-70" src={imgMartinBlueSummer} />
        <img alt="" className="absolute left-0 top-1/2 w-full max-w-[1920px] opacity-70" src={imgJoshCyanSummer} />
      </div>

      <div className="relative flex flex-col gap-16 px-30 py-30 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 text-[#f7f3f3]">
          <div className="flex flex-col w-full text-[40px] leading-[1.3]">
            <p className="m-0">But,</p>
            <p className="m-0">we also care about your experiences</p>
          </div>
          <div className=""/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 text-[#f7f3f3]">
          <div className=""/>
          <div>
            <p className="text-[36px] leading-[1.3] m-0 max-w-3xl">
              We want to bring seemless interaction between BeeBlast and your business
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-12 items-center">
          <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
                className="absolute inset-0 flex flex-col justify-center gap-6 rounded-[20px] border border-white/5 bg-[#050404]/80 px-6 py-8 sm:px-10 sm:py-12 shadow-2xl backdrop-blur-lg"
              >
                <p className="text-[40px] leading-[1.3] m-0 text-[#f7f3f3]">{experience.title}</p>
                <p className="text-[20px] leading-[1.5] m-0 text-[#f7f3f3]/85">{experience.description}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-start gap-8 text-[#f7f3f3]">
            <img
              src={imgCommaOrangeAutumn}
              alt=""
              className="w-full max-w-xl rounded-[20px] object-cover shadow-2xl"
              data-name="Preview Feature"
              data-node-id="17:155"
            />
            <div className="text-[40px] leading-[1.3]">
              <p className="m-0">BeeBlast is your employee,</p>
              <p className="m-0">you are fully in control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
