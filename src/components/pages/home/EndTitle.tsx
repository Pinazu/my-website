// src/components/pages/home/EndTitle.tsx
import imgBackground from "@assets/background.png";
import { Button } from "@/components/ui/button";

export function EndTitle() {
  return (
    <section className="relative z-10 h-[813px] w-full" data-name="Pre-End Section" data-node-id="15:111">
      <div className="absolute inset-0 h-full w-full bg-[#0a0903]" data-node-id="11:127" />
      <div className="absolute inset-x-0 top-[164px] flex w-full justify-center px-[30px]" data-node-id="11:3360">
        <div
          className="relative flex h-[485px] w-full max-w-[1440px] flex-col items-center justify-center gap-8 rounded-[20px] px-10 text-center"
          data-name="Get Started Container"
        >
          <div className="absolute inset-0 rounded-[20px]" data-name="Background" data-node-id="33:43">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="h-full w-full object-cover" src={imgBackground} />
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[20px]" />
            </div>
          </div>
          <p className="relative z-10 m-0 text-[60px] leading-[1.3] text-white" data-node-id="11:128">
            Get Started with BeeBlast
          </p>
          <Button
            className="relative z-10 h-[56px] rounded-[30px] px-10 text-[20px] font-semibold text-[#0a0903] bg-[#f4d06f] hover:bg-[#f4d06f]/90"
            data-name="Book Demo Button"
            data-node-id="17:149"
          >
            Book demo
          </Button>
        </div>
      </div>
    </section>
  );
}
