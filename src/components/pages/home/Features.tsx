// src/components/pages/home/Features.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgLilyBlueSummer from "@assets/lilybluesummer.svg";
import { features } from "@/lib/utils"; // Load fake features data

// Register ScrollTrigger plugin - required for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

export function Features() {
  // Refs for DOM elements we'll animate
  const sectionRef = useRef<HTMLElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial state for all feature items except the first
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.set(feature, {
          opacity: index === 0 ? 1 : 0, // First feature starts visible
          y: index === 0 ? 0 : 50,
        });
      }
    });

    const durationPerFeature = 2;
    const totalFeatures = features.length;
    const totalDuration = totalFeatures * durationPerFeature;
    const scrollDistance = totalDuration * 750;

    // Create master timeline that sequences all features
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`, // Dynamic scroll distance based on feature count
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Sequentially animate each feature through 2 stages
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        // Skip fade-in animation for the first feature
        if (index > 0) {
          masterTl.to(feature, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        }
        // Fade out animation for all but the last feature
        if (index < totalFeatures - 1) {
          masterTl.to(feature, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.in",
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-full z-10 bg-[#0a0903] overflow-hidden"
      data-name="Features Section"
    >
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
        <div className="mx-auto flex flex-row gap-8 py-30 min-h-screen max-w-[1440px] items-center">
          <div className="flex flex-col gap-8 flex-shrink-0 max-w-3xl">
            <img
              src={imgLilyBlueSummer}
              alt="BeeBlast Preview"
              className="w-full h-[592px] rounded-[20px] object-cover"
              data-name="Background Preview"
            />
            <div className="flex flex-col w-full items-start text-left">
              <div className="text-[#f7f3f3] text-[40px] leading-[1.3] m-0">
                Introducing BeeBlast
              </div>
              <div className="text-[#f7f3f3] text-[40px] leading-[1.3] m-0">
                your effortless tax assistant.
              </div>
            </div>
          </div>

          <div className="relative flex-1 w-full overflow-hidden">
            {/* Stack cards in one visual position while the wrapper scales responsively */}
            <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex flex-col gap-6 px-6 py-8 sm:px-10 sm:py-12 bg-transparent"
                >
                  <p className="text-[2.25rem] sm:text-[2.5rem] leading-[1.25] m-0 text-[#f7f3f3]">
                    {feature.title}
                  </p>
                  <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.5] text-[#f7f3f3]/90">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
