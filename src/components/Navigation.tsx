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
import textLogo from "@assets/textlogo.svg";

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
      className="fixed left-0 right-0 top-0 z-50 h-[91px] bg-transparent backdrop-blur-sm"
      data-name="Navigation"
      data-node-id="1:15"
    >
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
        <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 py-4">
          <div className="flex items-center" data-name="Icon Logo" data-node-id="15:101">
            <img
              src={textLogo}
              alt="BeeBlast logo"
              className="h-[52px] w-auto select-none"
              draggable={false}
            />
          </div>

          <NavigationMenu
            viewport={false}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            data-node-id="15:104"
          >
            <NavigationMenuList className="flex items-center justify-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="inline-flex h-[35px] min-w-[88px] items-center justify-center rounded-[20px] px-4 text-[20px] text-[#0a0903] transition-colors hover:bg-[#d9d9d9]/70"
                  data-name="Home Button"
                  data-node-id="15:105"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/resources"
                  className="inline-flex h-[35px] min-w-[125px] items-center justify-center rounded-[20px] px-4 text-[20px] text-[#0a0903] transition-colors hover:bg-[#d9d9d9]/70"
                  data-name="Resources Button"
                  data-node-id="15:106"
                >
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="inline-flex h-[35px] min-w-[90px] items-center justify-center rounded-[20px] px-4 text-[20px] text-[#0a0903] transition-colors hover:bg-[#d9d9d9]/70"
                  data-name="About Button"
                  data-node-id="15:107"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            className="h-[50px] w-[112px] rounded-[30px] border-0 bg-[#0a0903] text-[20px] text-white hover:bg-[#1a1903]"
            data-name="Sign In button"
            data-node-id="1:21"
          >
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
}
