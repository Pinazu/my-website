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
    // Set initial state for feature items (right column only)
    gsap.set(featureRefs.current, {
      opacity: 0,
      y: 50,
    });

    // Create individual ScrollTrigger for each feature using array approach
    featureRefs.current.forEach((feature) => {
      if (feature) {
        gsap.to(feature, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: feature,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: true,
            snap: {
              snapTo: 1, // Snap to start/end of each feature
              duration: { min: 0.2, max: 0.5 },
              delay: 0.1,
              ease: "power1.inOut",
            },
          },
        });
      }
    });

    // Pin the entire section while features animate
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      anticipatePin: 1,
      markers: true,
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
      <div className="flex flex-row gap-8 px-30 py-30 min-h-screen">
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

        <div className="flex flex-col w-full max-w-full h-full max-h-full border-1 border-white gap-8">
          {/* Feature Titles */}
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="w-full h-full border-1 border-cyan-200"
            >
              <div className="px-3">
                <p className="text-[40px] leading-[1.3] m-0 text-[#f7f3f3]">
                  {feature.title}
                </p>
              </div>
              <div className="px-3 py-6">
                <p className="text-[20px] leading-[1.5] mt-4 text-[#f7f3f3]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
