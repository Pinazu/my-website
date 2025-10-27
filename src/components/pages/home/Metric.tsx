// src/components/pages/home/Metric.tsx
import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { metrics } from "@/lib/utils"; // Load metrics data

gsap.registerPlugin(ScrollTrigger);

export function Metric() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const highlightRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const highlightLineRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (copyRef.current) {
        gsap.from(copyRef.current, {
          opacity: 0,
          y: 32,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      }

      const highlightEls = highlightRefs.current.filter(
        (highlight): highlight is HTMLSpanElement => !!highlight,
      );

      if (highlightEls.length && highlightLineRef.current) {
        gsap.set(highlightEls, {
          backgroundSize: "0% 100%",
          backgroundPosition: "0 100%",
        });

        const highlightTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: highlightLineRef.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
          },
        });

        highlightEls.forEach((highlight, index) => {
          highlightTimeline.to(
            highlight,
            {
              backgroundSize: "100% 100%",
              color: "#0a0903",
              duration: 0.6,
              ease: "power2.out",
            },
            index * 0.35,
          );
        });
      }

      const cards = metricRefs.current.filter(
        (metric): metric is HTMLDivElement => !!metric,
      );

      if (cards.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            once: true,
          },
        });
      }

      // Animate the numbers counting up
      const numbers = numberRefs.current.filter(
        (num): num is HTMLSpanElement => !!num,
      );

      if (numbers.length) {
        numbers.forEach((numberEl, index) => {
          const metric = metrics[index];
          if (!metric) return;

          const targetValue = parseInt(metric.value);
          const suffix = metric.value.replace(/[0-9]/g, ""); // Extract %, $, etc.

          const counter = { value: 0 };

          gsap.to(counter, {
            value: targetValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "restart none none reset",
            },
            onUpdate: () => {
              numberEl.textContent = Math.round(counter.value) + suffix;
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  metricRefs.current = metricRefs.current.slice(0, metrics.length);
  numberRefs.current = numberRefs.current.slice(0, metrics.length);
  highlightRefs.current = highlightRefs.current.slice(0, 5);

  const highlightStyle: CSSProperties = {
    backgroundImage: "linear-gradient(90deg, #f4d06f, #f4d06f)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 100%",
    backgroundSize: "0% 100%",
    display: "inline-block",
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-[#0a0903] py-24 text-[#f7f3f3]"
      data-name="Success Metric Section"
      data-node-id="17:33"
    >
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-32">
          <div ref={copyRef} className="flex flex-col gap-6">
            <div className="max-w-4xl text-[clamp(2rem,4vw,3rem)] leading-[1.3] font-semibold">
              <p ref={highlightLineRef} className="m-0">
                We design BeeBlast so that you do {" "}
                <span
                  ref={(el) => {
                    highlightRefs.current[0] = el;
                  }}
                  className="relative inline-block rounded-[12px] px-1"
                  style={highlightStyle}
                >
                  not
                </span>{" "}
                need to{" "}
                <span
                  ref={(el) => {
                    highlightRefs.current[1] = el;
                  }}
                  className="relative inline-block rounded-[12px] px-1"
                  style={highlightStyle}
                >
                  worry
                </span>{" "}
                about {" "}
                <span
                  ref={(el) => {
                    highlightRefs.current[2] = el;
                  }}
                  className="relative inline-block rounded-[12px] px-1"
                  style={highlightStyle}
                >
                  taxes, bookkeeping, accounting
                </span>{" "}
                and can just {" "}
                <span
                  ref={(el) => {
                    highlightRefs.current[3] = el;
                  }}
                  className="relative inline-block rounded-[12px] px-1"
                  style={highlightStyle}
                >
                  focus
                </span>{" "}
                on your {" "}
                <span
                  ref={(el) => {
                    highlightRefs.current[4] = el;
                  }}
                  className="relative inline-block rounded-[12px] px-1"
                  style={highlightStyle}
                >
                  business
                </span>
                .
              </p>
            </div>
            <p className="m-0 max-w-2xl text-[1rem] leading-[1.7] text-[#f7f3f3]/75">
              The more work BeeBlast shoulders, the more room you have to double down on the parts of your company that only you can build.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px]">
            <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-y-0 md:divide-x">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  ref={(el) => {
                    metricRefs.current[index] = el;
                  }}
                  className={`flex flex-1 flex-col gap-4 py-10 ${index === 1 ? ' px-8 md:px-10' : ' pr-25 md:pr-29'}`}
                >
                  <span
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    className="text-[clamp(3rem,5vw,3.75rem)] font-semibold leading-none text-[#f7f3f3]"
                  >
                    {metric.value}
                  </span>
                  <span className="text-sm tracking-[0.18em] text-[#f7f3f3]/70">
                    {metric.label}
                  </span>
                  <p className="m-0 text-sm leading-[1.6] text-[#f7f3f3]/65">
                    {metric.description}
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
