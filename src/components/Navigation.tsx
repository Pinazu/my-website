// src/components/Navigation.tsx
import * as React from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const hideTimer = React.useRef<number | undefined>(undefined);
  const navRef = React.useRef<HTMLElement>(null);

  // GSAP animation effect when visibility changes
  React.useEffect(() => {
    if (!navRef.current) return;

    if (isNavVisible) {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(navRef.current, {
        y: -91,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isNavVisible]);

  // Scroll and mouse interaction effects
  React.useEffect(() => {
    const showAndAutoHide = () => {
      setIsNavVisible(true);
      clearTimeout(hideTimer.current);
      if (window.scrollY > 10) {
        hideTimer.current = window.setTimeout(() => setIsNavVisible(false), 2000);
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setIsNavVisible(true);
        clearTimeout(hideTimer.current);
      } else if (y > lastScrollY.current) {
        setIsNavVisible(false);
        clearTimeout(hideTimer.current);
      } else {
        showAndAutoHide();
      }
      lastScrollY.current = y;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100 && window.scrollY > 10) showAndAutoHide();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <section
      ref={navRef}
      className="fixed bg-transparent h-[91px] left-0 right-0 top-0 z-50 backdrop-blur-sm"
      data-name="Navigation"
      data-node-id="1:15"
    >
      <NavigationMenu className="absolute left-[545px] top-[28px]" viewport={false}>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#home"
              className="h-[35px] min-w-[88px] px-4 rounded-[20px] transition-colors text-[20px] text-[#0a0903] items-center justify-center bg-transparent hover:bg-[#d9d9d9]/70"
              data-name="Home Button"
              data-node-id="15:105"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#resources"
              className="h-[35px] min-w-[125px] px-4 rounded-[20px] transition-colors text-[20px] text-[#0a0903] items-center justify-center bg-transparent hover:bg-[#d9d9d9]/70"
              data-name="Resources Button"
              data-node-id="15:106"
            >
              Resources
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className="h-[35px] min-w-[90px] px-4 rounded-[20px] transition-colors text-[20px] text-[#0a0903] items-center justify-center bg-transparent hover:bg-[#d9d9d9]/70"
              data-name="About Button"
              data-node-id="15:107"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        className="absolute bg-[#0a0903] h-[50px] left-[calc(50%+553px)] rounded-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[112px] hover:bg-[#1a1903] text-[20px] text-white p-0 border-0"
        data-name="Sign In button"
        data-node-id="1:21"
      >
        <div className="absolute flex flex-col justify-center leading-[0] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[1.3] whitespace-pre m-0">Sign In</p>
        </div>
      </Button>
      <div className="absolute h-[52px] left-[96px] top-[20px] w-[197px]" data-name="Icon Logo" data-node-id="15:101">
        <div className="absolute bg-[#f4d06f] h-[50px] left-0 rounded-[30px] top-px w-[94px]" data-node-id="15:102" />
        <p className="absolute leading-[1.3] left-[10px] text-[#0a0903] text-[40px] text-nowrap top-0 whitespace-pre m-0" data-node-id="15:103">
          <span>Bee </span>
          <span className="text-[#f7f3f3]">Blast</span>
        </p>
      </div>
    </section>
  );
}
