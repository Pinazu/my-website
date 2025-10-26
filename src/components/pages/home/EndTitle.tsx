// src/components/pages/home/EndTitle.tsx
import imgBackground from "@assets/background.png";
import { Button } from "@/components/ui/button";

export function EndTitle() {
  return (
    <section className="relative h-[813px] w-full max-w-full z-10" data-name="Pre-End Section" data-node-id="15:111">
      <div className="absolute bg-[#0a0903] h-[813px] left-0 top-0 w-full max-w-full" data-node-id="11:127" />
      <div className="absolute h-[485px] left-[97px] rounded-[20px] top-[164px] w-[1247px]" data-name="Get Started Container" data-node-id="11:3360">
        <div className="absolute h-[485px] left-0 rounded-[20px] top-0 w-[1247px]" data-name="Background" data-node-id="33:43">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
              <img alt="" className="absolute h-[186.39%] left-[-0.01%] max-w-none top-[-49.07%] w-[128.4%]" src={imgBackground} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[20px]" />
          </div>
        </div>
        <p className="absolute leading-[1.3] left-[250px] text-[60px] text-nowrap text-white top-[154px] whitespace-pre m-0" data-node-id="11:128">
          Get Started with BeeBlast
        </p>
        <Button
          className="absolute bg-[#f4d06f] h-[50px] left-[534px] top-[266px] w-[180px] rounded-[30px] text-[20px] text-[#0a0903] hover:bg-[#f4d06f]/90"
          data-name="Book Demo Button"
          data-node-id="17:149"
        >
          Book demo
        </Button>
      </div>
    </section>
  );
}
