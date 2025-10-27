// src/components/pages/home/Discovery.tsx
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import imgMoreButton from "@assets/more-button.svg";
import { Gradient } from "@/components/ui/gradient";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cards } from "@/lib/utils"; // Load fake cards data

export function Discovery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function for checking if content can be scrollable
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Function handle scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -415, behavior: "smooth" });
    }
  };

  // Function handle scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 415, behavior: "smooth" });
    }
  };

  // Initialize checkscroll
  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Initialize buttons with opacity 0
  useEffect(() => {
    if (leftButtonRef.current) {
      gsap.set(leftButtonRef.current, { opacity: 0 });
    }
    if (rightButtonRef.current) {
      gsap.set(rightButtonRef.current, { opacity: 0 });
    }
  }, []); // Only run once on mount

  // Animate buttons when scroll state changes
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const isHovering = wrapper?.matches(':hover');

    // Animate left button
    if (leftButtonRef.current) {
      if (canScrollLeft && isHovering) {
        // Fade in when scrolling becomes available and hovering
        gsap.to(leftButtonRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      } else if (!canScrollLeft) {
        // Fade out when can't scroll left
        gsap.to(leftButtonRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }

    // Animate right button
    if (rightButtonRef.current) {
      if (canScrollRight && isHovering) {
        // Fade in when scrolling becomes available and hovering
        gsap.to(rightButtonRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      } else if (!canScrollRight) {
        // Fade out when can't scroll right
        gsap.to(rightButtonRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [canScrollLeft, canScrollRight]);

  // GSAP hover animations
  useEffect(() => {
    const wrapper = wrapperRef.current;

    const handleMouseEnter = () => {
      if (leftButtonRef.current && canScrollLeft) {
        gsap.to(leftButtonRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      if (rightButtonRef.current && canScrollRight) {
        gsap.to(rightButtonRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      if (leftButtonRef.current) {
        gsap.to(leftButtonRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      if (rightButtonRef.current) {
        gsap.to(rightButtonRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    if (wrapper) {
      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [canScrollLeft, canScrollRight]);

  return (
    <section className="relative z-10 w-full bg-[#0a0903] py-24" data-name="Discovery Section">
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
        <div className="mx-auto w-full max-w-[1440px]">
          {/* Section Title */}
          <div className="mb-12 flex flex-col gap-4 text-[#f7f3f3] sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[20px] leading-[1.3]">
              Discovery more
            </div>
            <Button className="w-fit text-[#f7f3f3]">
              Show more
            </Button>
          </div>

          {/* Wrapper with fade masks */}
          <div ref={wrapperRef} className="relative">

            {/* Navigation Buttons - Left */}
            <Button
              ref={leftButtonRef}
              onClick={scrollLeft}
              className={`absolute left-[35px] top-[35%] z-20 -translate-y-1/2 rotate-180 border-none bg-transparent shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 ${canScrollLeft ? 'pointer-events-auto' : 'pointer-events-none'} flex-shrink-0 size-[50px] rounded-full p-0`}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
            >
              <img alt="" className="block size-full" src={imgMoreButton} />
            </Button>

            {/* Navigation Buttons - Right */}
            <Button
              ref={rightButtonRef}
              onClick={scrollRight}
              className={`absolute right-[35px] top-[35%] z-20 -translate-y-1/2 border-none bg-transparent shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 ${canScrollRight ? 'pointer-events-auto' : 'pointer-events-none'} flex-shrink-0 size-[50px] rounded-full p-0`}
              aria-label="Scroll right"
              disabled={!canScrollRight}
            >
              <img alt="" className="block size-full" src={imgMoreButton} />
            </Button>

            {/* Horizontal Scroll Container - Hidden Scrollbar */}
            <div ref={scrollContainerRef} className="overflow-x-auto overflow-y-hidden scrollbar-hide">
              {/* Cards Container */}
              <div className="flex items-center gap-5 pb-4">
                {/* Discovery Cards */}
                {cards.map((card) => (
                  <Card
                    key={card.id}
                    className="group flex-shrink-0 w-[395px] bg-transparent border-none shadow-none gap-4 p-0 cursor-pointer"
                  >
                    {/* Gradient Background */}
                    <div className="relative h-[300px] w-full overflow-hidden rounded-[20px]">
                      <div className={card.flipped ? "scale-y-[-100%] h-full w-full" : "h-full w-full"}>
                        <Gradient
                          gradient={card.gradient}
                          className="h-full w-full rounded-[20px]"
                        />
                      </div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="px-0 space-y-3">
                      <p className="text-white text-[20px] leading-[1.3]">
                        {card.title}
                      </p>
                    </CardContent>

                    {/* Card Footer with Category */}
                    <CardFooter className="px-0 text-white/90 text-[16px] leading-[1.3]">
                      {card.category}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
