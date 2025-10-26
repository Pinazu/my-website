// src/components/pages/home/MainTitle.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import imgVector1 from "@assets/vector1.svg";
import { Button } from "@/components/ui/button";
import { words } from "@/lib/utils"; // Import the word data

export function MainTitle() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const decoratorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      timeline
        .to([wordRef.current, decoratorRef.current], {
          duration: 0.5,
          opacity: 0,
          y: -50,
          ease: "power2.in",
        })
        .call(() => {
          if (wordRef.current && decoratorRef.current) {
            wordRef.current.textContent = word;
            gsap.set([wordRef.current, decoratorRef.current], { y: 50, opacity: 0 });
          }
        })
        .to([wordRef.current, decoratorRef.current], {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        })
        .to({}, {
          duration: 2.5,
        });
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] flex items-center justify-center overflow-hidden z-5" data-name="Main Title" data-node-id="15:108">
      <div className="relative z-10 w-full max-w-full px-[120px] py-8">
        <div className="max-w-[1074px]">
          <h1 className="text-[clamp(3rem,8vw,6.25rem)] leading-[1.3] text-[#f7f3f3] mb-8" data-node-id="1:25">
            <span className="block relative">
              Your <span className="relative inline-block overflow-visible">
                <span ref={wordRef} className="inline-block">taxes,</span>
                <span ref={decoratorRef} className="absolute left-0 -bottom-5 w-full h-[0.4em]" data-node-id="1:104">
                  <img alt="" className="block w-full h-full object-contain" src={imgVector1} />
                </span>
              </span>
            </span>
            <span className="block">automated with AI</span>
          </h1>

          <Button
            className="bg-[#f4d06f] h-[50px] rounded-[30px] w-[172px] font-['Inter',sans-serif] font-semibold text-[20px] text-[#0a0903] hover:bg-[#f4d06f]/90"
            data-node-id="17:151"
          >
            Book demo
          </Button>
        </div>
      </div>
    </section>
  );
}
