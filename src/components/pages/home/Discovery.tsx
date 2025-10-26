// src/components/pages/home/Discovery.tsx
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import imgMoreButton from "@assets/more-button.svg";
import { Gradient } from "@/components/ui/gradient";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {cards} from "@/lib/utils"; // Load fake cards data

export function Discovery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function for checking scroll
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

  // Check for scrollable area
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
    <section className="relative w-full bg-[#0a0903] py-24 z-10" data-name="Discovery Section">
      <div className="w-full">
        {/* Section Title */}
        <div className="flex justify-between px-30">
          <div className="text-[#f7f3f3] text-[20px] leading-[1.3] mb-12">
            Discovery more
          </div>
          <Button
            className="text-[#f7f3f3]"
          >
            Show more
          </Button>
        </div>

        {/* Wrapper with fade masks */}
        <div ref={wrapperRef} className="relative px-30">
          {/* Left and Right Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-30 bg-gradient-to-r from-[#0a0903] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-30 bg-gradient-to-l from-[#0a0903] to-transparent z-10 pointer-events-none" />

          {/* Navigation Buttons - Left */}
          {canScrollLeft && (
            <Button
              ref={leftButtonRef}
              onClick={scrollLeft}
              className="absolute left-35 top-[35%] -translate-y-1/2 z-20 flex-shrink-0 size-[50px] rounded-full p-0 hover:scale-110 active:scale-95 transition-transform duration-200 rotate-180 bg-transparent border-none shadow-lg pointer-events-auto"
              aria-label="Scroll left"
            >
              <img alt="" className="block size-full" src={imgMoreButton} />
            </Button>
          )}

          {/* Navigation Buttons - Right */}
          {canScrollRight && (
            <Button
              ref={rightButtonRef}
              onClick={scrollRight}
              className="absolute right-35 top-[35%] -translate-y-1/2 z-20 flex-shrink-0 size-[50px] rounded-full p-0 hover:scale-110 active:scale-95 transition-transform duration-200 bg-transparent border-none shadow-lg pointer-events-auto"
              aria-label="Scroll right"
            >
              <img alt="" className="block size-full" src={imgMoreButton} />
            </Button>
          )}

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
    </section>
  );
}
