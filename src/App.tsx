// src/App.tsx
import * as React from "react";
import imgBackground from "../public/assets/background.png";
import imgVector1 from "../public/assets/vector1.svg";
import imgMoreButton from "../public/assets/more-button.svg";
import imgEllipse1 from "../public/assets/ellipse1.svg";
import { Gradient } from "@/components/ui/gradient";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function App() {
  const [activeNav, setActiveNav] = React.useState("home");
  const [hoveredNav, setHoveredNav] = React.useState<string | null>(null);

  return (
    <div className="bg-[#f7f3f3] relative w-full min-h-screen overflow-x-hidden" data-name="Main page" data-node-id="1:13">

      {/* Main Title */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] flex items-center justify-center overflow-hidden" data-name="Main Title" data-node-id="15:108">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full" data-name="Background" data-node-id="33:28">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBackground} />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] px-[120px] py-8">
          <div className="max-w-[1074px]">
            {/* Main Heading */}
            <h1 className="font-['Capriola',sans-serif] text-[clamp(3rem,8vw,6.25rem)] leading-[1.3] text-black mb-8" data-node-id="1:25">
              <span className="block relative">
                Your <span className="relative inline-block">
                  taxes,
                  {/* Underline decoration */}
                  <span className="absolute left-0 -bottom-5 w-full h-[0.4em]" data-node-id="1:104">
                    <img alt="" className="block w-full h-full object-contain" src={imgVector1} />
                  </span>
                </span>
              </span>
              <span className="block">automated with AI</span>
            </h1>

            {/* Button */}
            <Button
              className="bg-[#f4d06f] h-[50px] rounded-[30px] w-[172px] font-['Inter',sans-serif] font-semibold text-[20px] text-black hover:bg-[#f4d06f]/90"
              data-node-id="17:151"
            >
              Book demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative h-[1176px] w-full max-w-[1440px]" data-name="Features Section" data-node-id="15:138">
        <div className="absolute bg-[#0a0903] h-[1176px] left-0 top-0 w-full" data-name="Background" data-node-id="15:134" />
        <div className="absolute bg-[#f7f7f3] h-[592px] left-[97px] rounded-[20px] top-[162px] w-[826px]" data-node-id="33:45" />
        <Gradient
          gradient="url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 826 592&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(32.145 50.198 -73.057 51.835 413.5 296.53)&quot; opacity=&quot;0.4000000059604645&quot;><rect height=&quot;75.637&quot; width=&quot;153.29&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(0,145,173,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(16,151,176,1)&quot; offset=&quot;0.0625&quot;/><stop stop-color=&quot;rgba(32,157,180,1)&quot; offset=&quot;0.125&quot;/><stop stop-color=&quot;rgba(64,170,187,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(96,182,194,1)&quot; offset=&quot;0.375&quot;/><stop stop-color=&quot;rgba(128,195,201,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(191,219,214,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(255,244,228,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>')"
          className="absolute h-[592px] left-[67px] rounded-[20px] top-[133px] w-[826px]"
          data-name="Background Preview"
          data-node-id="33:30"
        />
        <p className="absolute font-['Capriola',sans-serif] h-[106px] leading-[1.3] left-[97px] text-[#f7f3f3] text-[40px] top-[783px] w-[821px] m-0" data-node-id="15:120">
          Introducing BeeBlast — your effortless tax assistant.
        </p>
        <p className="absolute font-['Capriola',sans-serif] h-[115px] leading-[1.3] left-[948px] text-[#70757a] text-[40px] top-[610px] w-[395px] m-0" data-node-id="15:149">
          Built for freelancers and small business
        </p>
        <p className="absolute font-['Capriola',sans-serif] h-[115px] leading-[1.3] left-[948px] text-[#414447] text-[40px] top-[797px] w-[395px] m-0" data-node-id="15:151">
          Quisque tincidunt elit ultricies quam
        </p>
        <div className="absolute h-[304px] left-[948px] top-[323px] w-[395px]" data-name="Feature Description" data-node-id="16:32">
          <div className="absolute bg-[#0a0903] border border-black border-solid h-[279px] left-0 rounded-[20px] top-0 w-[395px]" data-node-id="15:142" />
          <p className="absolute font-['Capriola',sans-serif] leading-[1.3] left-0 text-[#f7f3f3] text-[40px] top-0 w-[395px] m-0" data-node-id="15:114">
            Auto-classified. Verified. Filed.
          </p>
          <p className="absolute font-['Capriola',sans-serif] h-[130px] leading-[1.3] left-0 text-[#f7f3f3] text-[20px] top-[152px] w-[395px] m-0" data-node-id="15:148">BeeBlast automatically scans your receipts, invoices, and bank transactions, then prepares compliant tax reports — all within minutes. </p>
        </div>
        <p className="absolute font-['Capriola',sans-serif] h-[116px] leading-[1.3] left-[948px] text-[#1e1f21] text-[40px] top-[927px] w-[395px] m-0" data-node-id="15:153">
          Mauris dolor odio, rutrum
        </p>
      </section>

      {/* Success Metric Section */}
      <section className="relative h-[879px] w-full max-w-[1440px]" data-name="Success Metric Section" data-node-id="17:33">
        <div className="absolute bg-[#0a0903] h-[879px] left-0 top-0 w-full" data-name="Background" data-node-id="17:32" />
        <div className="absolute h-[121px] left-[96px] rounded-[20px] top-[502px] w-[394px]" data-name="First Feature" data-node-id="17:53">
          <div className="absolute bg-[#211e0a] h-[121px] left-0 rounded-[20px] top-0 w-[394px]" data-name="Background" data-node-id="17:38" />
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[121px] justify-center leading-[0] left-[197px] text-[#f7f3f3] text-[20px] text-center top-[60.5px] translate-x-[-50%] translate-y-[-50%] w-[394px]" data-node-id="17:35">
            <p className="leading-[1.3] m-0">100% Accuracy</p>
          </div>
        </div>
        <div className="absolute h-[121px] left-[523px] top-[502px] w-[394px]" data-name="Second Feature" data-node-id="17:54">
          <div className="absolute bg-[#211e0a] h-[121px] left-0 rounded-[20px] top-0 w-[394px]" data-name="Background" data-node-id="17:39" />
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[121px] justify-center leading-[0] left-[197px] text-[#f7f3f3] text-[20px] text-center top-[60.5px] translate-x-[-50%] translate-y-[-50%] w-[394px]" data-node-id="17:45">
            <p className="leading-[1.3] m-0">90% less time spent on bookkeeping</p>
          </div>
        </div>
        <div className="absolute h-[121px] left-[950px] top-[502px] w-[394px]" data-name="Third Feature" data-node-id="17:55">
          <div className="absolute bg-[#211e0a] h-[121px] left-0 rounded-[20px] top-0 w-[394px]" data-name="Background" data-node-id="17:41" />
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[121px] justify-center leading-[0] left-[197px] text-[#f7f3f3] text-[20px] text-center top-[60.5px] translate-x-[-50%] translate-y-[-50%] w-[394px]" data-node-id="17:49">
            <p className="leading-[1.3] m-0">50% Less expense</p>
          </div>
        </div>
        <div className="absolute bg-[#f4d06f] h-[51px] left-[690px] rounded-[30px] top-[174px] w-[123px]" data-node-id="17:130" />
        <div className="absolute bg-[#f4d06f] h-[51px] left-[899px] rounded-[30px] top-[71px] w-[86px]" data-node-id="33:73" />
        <div className="absolute bg-[#f4d06f] h-[53px] left-[198px] rounded-[30px] top-[228px] w-[203px]" data-node-id="33:69" />
        <div className="absolute bg-[#f4d06f] h-[53px] left-[353px] rounded-[30px] top-[122px] w-[383px]" data-node-id="33:71" />
        <div className="absolute font-['Inter',sans-serif] font-semibold h-[207px] leading-[0] left-[198px] text-[#f7f3f3] text-[0px] top-[71px] w-[831px]" data-node-id="17:57">
          <p className="font-['Capriola',sans-serif] leading-[1.3] mb-0 text-[40px]">
            <span>We design BeeBlast so that you do </span>
            <span className="text-[#0a0903]">not</span>
            <span> need to </span>
            <span className="text-[#0a0903]">worry about taxes</span>
            <span>, bookkepping accounting and can just </span>
            <span className="text-[#0a0903]">focus</span>
            <span> on your</span>
          </p>
          <p className="font-['Capriola',sans-serif] leading-[1.3] text-[40px] m-0">
            <span className="text-[#0a0903]"> business.</span>
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative h-[879px] w-full max-w-[1440px]" data-name="Security Section" data-node-id="17:162">
        <div className="absolute bg-[#0a0903] h-[879px] left-0 top-0 w-full" data-node-id="17:157" />
        <p className="absolute font-['Capriola',sans-serif] h-[107px] leading-[1.3] left-[203px] text-[40px] text-white top-[75px] w-[394px] m-0" data-node-id="17:158">
          We priority your security and data.
        </p>
        <p className="absolute font-['Capriola',sans-serif] h-[124px] leading-[1.3] left-[629px] text-[20px] text-white top-[84px] w-[715px] m-0" data-node-id="17:159">
          BeeBlast is built with privacy-first principles and enterprise-grade encryption — so you stay fully in control of your data at all times.
        </p>
        <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[74px] justify-center leading-[1.3] left-[96px] text-[#f7f3f3] text-[40px] top-[767px] translate-y-[-50%] w-[1248px]" data-node-id="17:161">
          <p className="mb-0">Security isn't optional for us</p>
          <p className="m-0">It's at the core of everything we build.</p>
        </div>
        <div className="absolute font-['Capriola',sans-serif] h-[445px] leading-[1.3] left-[629px] text-[20px] text-white top-[162px] w-[713px]" data-node-id="17:164">
          <p className="mb-0">BeeBlast protects your data with end-to-end encryption (AES-256, TLS 1.3) and strict access control.</p>
          <p className="mb-0">
            <br aria-hidden="true" />
             You always own and control your data — choose to keep or permanently delete it anytime.
          </p>
          <p className="mb-0">
            <br aria-hidden="true" />
             BeeBlast meets major security standards including GDPR, ISO 27001, and SOC 2 Type II compliance. You can follow this link for verified it yourself.
          </p>
          <p className="mb-0">
            <br aria-hidden="true" />
             Our Attribute-Based Access Control (ABAC) ensures precise permissions for every user and workspace.
          </p>
          <p className="mb-0">
            <br aria-hidden="true" />
             Comprehensive logging and tracing let you monitor your agent's actions and your own activity in real time.
          </p>
          <p className="m-0">
            <br aria-hidden="true" />
             We never sell, store, or use your data for AI model training — your information stays yours, always.
          </p>
        </div>
        <div className="absolute contents left-[265px] top-[298px]" data-name="Decorator" data-node-id="33:68">
          <div className="absolute bg-[#f7f3f3] h-[74.161px] left-[332.5px] top-[372.16px] w-[67.5px]" data-node-id="33:60" />
          <div className="absolute bg-[#f4d06f] h-[74.161px] left-[400px] top-[372.16px] w-[67.5px]" data-node-id="33:61" />
          <div className="absolute bg-[#90959a] h-[74.161px] left-[265px] top-[372.16px] w-[67.5px]" data-node-id="33:62" />
          <div className="absolute bg-[#1098f7] h-[74.161px] left-[400px] top-[298px] w-[67.5px]" data-node-id="33:63" />
          <div className="absolute bg-[#ff9f1c] h-[74.161px] left-[467.5px] top-[372.16px] w-[67.5px]" data-node-id="33:64" />
          <div className="absolute bg-[#211e0a] h-[74.161px] left-[265px] top-[298px] w-[67.5px]" data-node-id="33:65" />
          <div className="absolute bg-[#d6efff] h-[74.161px] left-[400px] top-[446.32px] w-[67.5px]" data-node-id="33:66" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative h-[1800px] w-full max-w-[1440px]" data-name="Experience Section" data-node-id="17:61">
        <Gradient
          gradient="linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 1440 900&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(40.6 57.35 -91.76 64.96 720 450)&quot; opacity=&quot;0.30000001192092896&quot;><rect height=&quot;101.62&quot; width=&quot;211.8&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(0,145,173,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(16,151,176,1)&quot; offset=&quot;0.0625&quot;/><stop stop-color=&quot;rgba(32,157,180,1)&quot; offset=&quot;0.125&quot;/><stop stop-color=&quot;rgba(64,170,187,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(96,182,194,1)&quot; offset=&quot;0.375&quot;/><stop stop-color=&quot;rgba(128,195,201,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(191,219,214,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(255,244,228,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>'), linear-gradient(121.991deg, rgb(5, 115, 241) 0%, rgb(251, 207, 112) 99.992%)"
          className="absolute h-[900px] left-0 top-0 w-full"
          data-name="Up Background"
          data-node-id="17:60"
        />
        <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[98px] justify-center leading-[1.3] left-[202px] text-[#f7f3f3] text-[40px] top-[135px] translate-y-[-50%] w-[821px]" data-node-id="17:59">
          <p className="mb-0">But, </p>
          <p className="m-0">we also care about your experiences</p>
        </div>
        <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[139px] justify-center leading-[0] left-[737px] text-[#f7f3f3] text-[40px] top-[380.5px] translate-y-[-50%] w-[607px]" data-node-id="17:68">
          <p className="leading-[1.3] m-0">We want to bring seemless interaction between BeeBlast and your business</p>
        </div>
        <Gradient
          gradient="linear-gradient(229.418deg, rgba(251, 207, 112, 0.2) 4.1696%, rgba(0, 0, 0, 0) 23.028%), linear-gradient(194.896deg, rgba(0, 145, 173, 0.2) 73.4%, rgba(234, 255, 0, 0.2) 81.87%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 1440 900&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(-31.15 52.85 -84.56 -49.84 720 450)&quot; opacity=&quot;0.30000001192092896&quot;><rect height=&quot;164.3&quot; width=&quot;126.03&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(0,145,173,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(16,151,176,1)&quot; offset=&quot;0.0625&quot;/><stop stop-color=&quot;rgba(32,157,180,1)&quot; offset=&quot;0.125&quot;/><stop stop-color=&quot;rgba(64,170,187,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(96,182,194,1)&quot; offset=&quot;0.375&quot;/><stop stop-color=&quot;rgba(128,195,201,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(191,219,214,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(255,244,228,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>'), linear-gradient(57.9946deg, rgb(5, 115, 241) 0%, rgb(251, 207, 112) 100%)"
          className="absolute h-[900px] left-0 top-[900px] w-full"
          data-name="Down Background"
          data-node-id="17:71"
        />
        <div className="absolute bg-[#f7f7f3] h-[592px] left-[518px] rounded-[20px] top-[604px] w-[826px]" data-node-id="17:75" />
        <Gradient
          gradient="url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 828 585&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.30000001192092896&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(2.535e-15 29.25 -41.4 1.791e-15 414 292.5)&quot;><stop stop-color=&quot;rgba(88,208,243,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(127,208,210,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(166,208,177,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(205,208,144,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(244,208,111,1)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>')"
          className="absolute h-[585px] left-[551px] rounded-[20px] top-[577px] w-[828px]"
          data-name="Preview Feature"
          data-node-id="17:155"
        />
        <div className="absolute h-[714px] left-[97px] top-[728px] w-[395px]" data-name="Features" data-node-id="17:84">
          <p className="absolute font-['Capriola',sans-serif] h-[121px] leading-[1.3] left-0 text-[40px] text-[rgba(247,243,243,0.6)] top-[304px] w-[395px] m-0" data-node-id="17:76">
            Integer at quam euismod
          </p>
          <p className="absolute font-['Capriola',sans-serif] h-[115px] leading-[1.3] left-0 text-[40px] text-[rgba(247,243,243,0.3)] top-[454px] w-[395px] m-0" data-node-id="17:77">
            Quisque tincidunt elit ultricies quam
          </p>
          <div className="absolute h-[304px] left-0 top-0 w-[395px]" data-name="Feature Description" data-node-id="17:78">
            <div className="absolute bg-[rgba(10,9,3,0)] h-[279px] left-0 rounded-[20px] top-0 w-[395px]" data-node-id="17:79" />
            <p className="absolute font-['Capriola',sans-serif] leading-[1.3] left-0 text-[#f7f3f3] text-[40px] top-0 w-[395px] m-0" data-node-id="17:80">
              Aenean eget metus vitae tortor placera
            </p>
            <p className="absolute font-['Capriola',sans-serif] h-[130px] leading-[1.3] left-0 text-[#f7f3f3] text-[20px] top-[152px] w-[395px] m-0" data-node-id="17:81">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Duis at iaculis diam
            </p>
          </div>
          <p className="absolute font-['Capriola',sans-serif] h-[116px] leading-[1.3] left-0 text-[40px] text-[rgba(247,243,243,0.1)] top-[598px] w-[395px] m-0" data-node-id="17:82">
            Mauris dolor odio, rutrum
          </p>
        </div>
        <div className="absolute flex flex-col font-['Capriola',sans-serif] justify-center leading-[1.3] left-[202px] text-[40px] text-nowrap text-white top-[1600px] translate-y-[-50%] whitespace-pre" data-node-id="17:154">
          <p className="mb-0">BeeBlast is your employee, </p>
          <p className="m-0">you are fully in control</p>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="relative h-[810px] w-full max-w-[1440px]" data-name="Discovery Section" data-node-id="17:100">
        <div className="absolute bg-[#0a0903] h-[810px] left-0 top-0 w-full" data-name="Background" data-node-id="17:99" />
        <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[29px] justify-center leading-[0] left-[96px] text-[#f7f3f3] text-[20px] top-[150.5px] translate-y-[-50%] w-[181px]" data-node-id="17:101">
          <p className="leading-[1.3] m-0">Discovery more</p>
        </div>
        <div className="absolute h-[432px] left-[96px] top-[198px] w-[395px]" data-name="News Left" data-node-id="17:120">
          <div className="absolute flex h-[300px] items-center justify-center left-px top-0 w-[395px]">
            <div className="flex-none scale-y-[-100%]">
              <Gradient
                gradient="linear-gradient(209.358deg, rgba(0, 0, 0, 0) 58.372%, rgba(242, 230, 0, 0.2) 76.523%), linear-gradient(190.599deg, rgba(233, 236, 245, 0.3) 9.8843%, rgba(204, 214, 235, 0.3) 57.218%), linear-gradient(141.089deg, rgba(163, 195, 217, 0.3) 3.6358%, rgba(239, 11, 11, 0.3) 77.695%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(-3.9 6.25 -19.513 -12.176 198 121.5)&quot; opacity=&quot;0.4000000059604645&quot;><rect height=&quot;204.65&quot; width=&quot;345.72&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(163,195,217,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(178,200,167,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(194,204,116,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(209,209,66,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(217,212,41,1)&quot; offset=&quot;0.875&quot;/><stop stop-color=&quot;rgba(224,214,16,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><g transform=&quot;matrix(-7.85 3.5 -9.6608 -21.668 94 165.5)&quot; opacity=&quot;1&quot;><rect height=&quot;175.31&quot; width=&quot;417.6&quot; fill=&quot;url(%23grad)&quot; id=&quot;quad&quot; shape-rendering=&quot;crispEdges&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(1 -1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 1)&quot;/><use href=&quot;%23quad&quot; transform=&quot;scale(-1 -1)&quot;/></g><defs><linearGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; x2=&quot;5&quot; y2=&quot;5&quot;><stop stop-color=&quot;rgba(233,236,245,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(225,219,199,1)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(216,201,152,1)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(208,184,106,1)&quot; offset=&quot;0.75&quot;/><stop stop-color=&quot;rgba(199,167,59,1)&quot; offset=&quot;1&quot;/></linearGradient></defs></svg>')"
                className="h-[300px] rounded-[20px] w-[395px]"
                data-node-id="17:103"
              />
            </div>
          </div>
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[59px] justify-center leading-[0] left-0 text-[20px] text-white top-[352.5px] translate-y-[-50%] w-[395px]" data-node-id="17:109">
            <p className="leading-[1.3] m-0">Etiam eleifend orci elit, eget iaculis ligula consectetur et.</p>
          </div>
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[27px] justify-center leading-[0] left-0 text-[16px] text-white top-[418.5px] translate-y-[-50%] w-[395px]" data-node-id="17:114">
            <p className="leading-[1.3] m-0">Blogs</p>
          </div>
        </div>
        <div className="absolute h-[432px] left-[522px] top-[198px] w-[395px]" data-name="News Middle" data-node-id="17:121">
          <Gradient
            gradient="linear-gradient(201.633deg, rgba(190, 110, 70, 0.4) 2.1899%, rgba(114, 134, 160, 0.4) 43.706%, rgba(205, 231, 176, 0.4) 64.144%), linear-gradient(179.215deg, rgba(190, 110, 70, 0.4) 2.9289%, rgba(114, 134, 160, 0.4) 65.62%, rgba(205, 231, 176, 0.4) 98.556%), linear-gradient(rgb(205, 231, 176) 0%, rgb(163, 191, 168) 75.962%, rgb(89, 89, 74) 100%)"
            className="absolute h-[300px] left-0 rounded-[20px] top-0 w-[395px]"
            data-node-id="17:104"
          />
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[27px] justify-center leading-[0] left-0 text-[16px] text-white top-[418.5px] translate-y-[-50%] w-[395px]" data-node-id="17:116">
            <p className="leading-[1.3] m-0">Case Studies</p>
          </div>
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[59px] justify-center leading-[0] left-0 text-[20px] text-white top-[354.5px] translate-y-[-50%] w-[395px]" data-node-id="17:110">
            <p className="leading-[1.3] m-0">Aenean porta velit eu enim dapibus, id gravida metus auctor.</p>
          </div>
        </div>
        <div className="absolute h-[432px] left-[948px] top-[198px] w-[395px]" data-name="News Right" data-node-id="17:122">
          <Gradient
            gradient="url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 395 300&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.30000001192092896&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(1.6 34.95 -46.018 2.1067 197.5 150)&quot;><stop stop-color=&quot;rgba(239,98,108,1)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(241,135,145,0.75)&quot; offset=&quot;0.25&quot;/><stop stop-color=&quot;rgba(244,173,182,0.5)&quot; offset=&quot;0.5&quot;/><stop stop-color=&quot;rgba(248,247,255,0)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>'), linear-gradient(180.824deg, rgba(248, 247, 255, 0) 1.6598%, rgba(206, 109, 160, 0.6) 43.585%, rgba(147, 129, 255, 0) 99.12%), linear-gradient(118.252deg, rgba(248, 247, 255, 0.4) 1.4492%, rgba(255, 238, 221, 0.4) 48.423%, rgba(255, 216, 190, 0.4) 91.351%), linear-gradient(160.705deg, rgb(248, 247, 255) 6.3484%, rgb(184, 184, 255) 42.353%, rgb(147, 129, 255) 75.118%)"
            className="absolute h-[300px] left-0 rounded-[20px] top-0 w-[395px]"
            data-node-id="17:106"
          />
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[27px] justify-center leading-[0] left-0 text-[16px] text-white top-[418.5px] translate-y-[-50%] w-[395px]" data-node-id="17:118">
            <p className="leading-[1.3] m-0">Research</p>
          </div>
          <div className="absolute flex flex-col font-['Capriola',sans-serif] h-[59px] justify-center leading-[0] left-0 text-[20px] text-white top-[352.5px] translate-y-[-50%] w-[395px]" data-node-id="17:112">
            <p className="leading-[1.3] m-0">Nulla a ex diam. Donec quis orci sed purus porttitor blandit</p>
          </div>
        </div>
        <div className="absolute left-[1280px] size-[50px] top-[323px]" data-name="More Button" data-node-id="17:128">
          <img alt="" className="block max-w-none size-full" src={imgMoreButton} />
        </div>
      </section>

      {/* Pre-End Section */}
      <section className="relative h-[813px] w-full max-w-[1441px]" data-name="Pre-End Section" data-node-id="15:111">
        <div className="absolute bg-[#0a0903] h-[813px] left-0 top-0 w-[1440px]" data-node-id="11:127" />
        <div className="absolute h-[485px] left-[97px] rounded-[20px] top-[164px] w-[1247px]" data-name="Get Started Container" data-node-id="11:3360">
          <div className="absolute h-[485px] left-0 rounded-[20px] top-0 w-[1247px]" data-name="Background" data-node-id="33:43">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute h-[186.39%] left-[-0.01%] max-w-none top-[-49.07%] w-[128.4%]" src={imgBackground} />
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[20px]" />
            </div>
          </div>
          <p className="absolute font-['Capriola',sans-serif] leading-[1.3] left-[250px] text-[60px] text-nowrap text-white top-[154px] whitespace-pre m-0" data-node-id="11:128">
            Get Started with BeeBlast
          </p>
          <Button
            className="absolute bg-[#f4d06f] h-[50px] left-[534px] top-[266px] w-[180px] rounded-[30px] font-['Capriola',sans-serif] text-[20px] text-black hover:bg-[#f4d06f]/90"
            data-name="Book Demo Button"
            data-node-id="17:149"
          >
            Book demo
          </Button>
        </div>
      </section>

      {/* End Section (Footer) */}
      <section className="relative h-[767px] w-full max-w-[1442px]" data-name="End Section" data-node-id="15:109">
        <div className="absolute bg-[#0a0903] h-[767px] left-0 top-0 w-[1440px]" data-node-id="3:9" />
        <div className="absolute h-[767px] left-0 top-0 w-[1442px]" data-name="Language Container" data-node-id="15:99">
          <p className="absolute font-['Inter',sans-serif] font-semibold leading-[1.3] left-[1056px] text-[#90959a] text-[20px] text-nowrap top-[102px] whitespace-pre m-0" data-node-id="11:108">
            Language
          </p>
          <p className="absolute font-['Inter',sans-serif] font-semibold leading-[1.3] left-[1201px] text-[#f7f3f3] text-[20px] text-nowrap top-[102px] whitespace-pre m-0" data-node-id="11:110">
            EN
          </p>
          <p className="absolute font-['Inter',sans-serif] font-semibold leading-[1.3] left-[1237px] text-[#90959a] text-[20px] text-nowrap top-[102px] whitespace-pre m-0" data-node-id="11:112">
            NL
          </p>
          <div className="absolute left-[1024px] size-[10px] top-[110px]" data-node-id="15:113">
            <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
          </div>
        </div>
        <div className="absolute h-[459px] left-[415px] top-[221px] w-[289px]" data-name="Footer Middle Container" data-node-id="15:96">
          <div className="absolute bg-[#0a0903] h-[459px] left-px top-0 w-[288px]" data-node-id="3:25" />
          <div className="absolute font-['Inter',sans-serif] font-semibold h-[142px] leading-[1.3] left-0 text-nowrap top-0 w-[136px] whitespace-pre" data-name="Resource Container" data-node-id="15:85">
            <p className="absolute left-px text-[#90959a] text-[15px] top-0 m-0" data-node-id="3:31">
              Resource
            </p>
            <p className="absolute left-px text-[#f7f3f3] text-[16px] top-[39px] m-0" data-node-id="6:65">
              Blogs
            </p>
            <p className="absolute left-px text-[#f7f3f3] text-[16px] top-[80px] m-0" data-node-id="6:67">
              Case Studies
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[121px] m-0" data-node-id="6:71">
              Customer Stories
            </p>
          </div>
          <div className="absolute font-['Inter',sans-serif] font-semibold h-[101px] leading-[1.3] left-0 text-nowrap top-[203px] w-[169px] whitespace-pre" data-name="Platform Container" data-node-id="15:86">
            <p className="absolute left-px text-[#90959a] text-[15px] top-0 m-0" data-node-id="6:83">
              Platform
            </p>
            <p className="absolute left-px text-[#f7f3f3] text-[16px] top-[39px] m-0" data-node-id="6:85">
              Accountant Assistant
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[80px] m-0" data-node-id="6:87">
              Workflow Agent
            </p>
          </div>
        </div>
        <div className="absolute h-[459px] left-[94px] top-[221px] w-[290px]" data-name="Footer Left Container" data-node-id="15:97">
          <div className="absolute bg-[#0a0903] h-[459px] left-[2px] top-0 w-[288px]" data-node-id="3:23" />
          <div className="absolute font-['Inter',sans-serif] font-semibold h-[142px] leading-[1.3] left-0 text-nowrap top-[162px] w-[159px] whitespace-pre" data-name="Research Container" data-node-id="15:83">
            <p className="absolute left-[2px] text-[#90959a] text-[15px] top-0 m-0" data-node-id="6:73">
              Researchs
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[39px] m-0" data-node-id="6:75">
              Research Index
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[80px] m-0" data-node-id="6:77">
              Research Overviews
            </p>
            <p className="absolute left-[2px] text-[#f7f3f3] text-[16px] top-[121px] m-0" data-node-id="6:79">
              Research Residency
            </p>
          </div>
          <div className="absolute font-['Inter',sans-serif] font-semibold h-[101px] leading-[1.3] left-[2px] text-nowrap top-0 w-[68px] whitespace-pre" data-name="Product Container" data-node-id="15:84">
            <p className="absolute left-0 text-[#90959a] text-[15px] top-0 m-0" data-node-id="3:35">
              Product
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[39px] m-0" data-node-id="5:57">
              Features
            </p>
            <p className="absolute left-px text-[#f7f3f3] text-[16px] top-[80px] m-0" data-node-id="5:59">
              Security
            </p>
          </div>
        </div>
        <div className="absolute h-[459px] left-[736px] top-[221px] w-[288px]" data-name="Footer Right Container" data-node-id="15:98">
          <div className="absolute bg-[#0a0903] h-[459px] left-0 top-0 w-[288px]" data-node-id="3:29" />
          <div className="absolute font-['Inter',sans-serif] font-semibold h-[100px] leading-[1.3] left-0 top-[244px] w-[64px]" data-name="More Container" data-node-id="15:88">
            <p className="absolute left-0 text-[#90959a] text-[15px] text-nowrap top-0 whitespace-pre m-0" data-node-id="3:37">
              More
            </p>
            <p className="absolute h-[20px] left-0 text-[#f7f3f3] text-[16px] top-[39px] w-[44px] m-0" data-node-id="6:69">
              News
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] text-nowrap top-[79px] whitespace-pre m-0" data-node-id="6:81">
              Podcast
            </p>
          </div>
          <div className="absolute font-['Inter',sans-serif] font-semibold h-[183px] leading-[1.3] left-0 text-nowrap top-0 w-[127px] whitespace-pre" data-name="Company Container" data-node-id="15:87">
            <p className="absolute left-0 text-[#90959a] text-[15px] top-0 m-0" data-node-id="3:33">
              Company
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[39px] m-0" data-node-id="3:42">
              About Us
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[80px] m-0" data-node-id="3:46">
              Careers
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[121px] m-0" data-node-id="3:48">
              Privacy Policies
            </p>
            <p className="absolute left-0 text-[#f7f3f3] text-[16px] top-[162px] m-0" data-node-id="3:50">
              Cookies Policies
            </p>
          </div>
        </div>
        <div className="absolute h-[52px] left-[94px] top-[88px] w-[197px]" data-name="Icon Logo" data-node-id="15:100">
          <div className="absolute bg-[#f4d06f] h-[50px] left-0 rounded-[30px] top-px w-[94px]" data-node-id="6:89" />
          <p className="absolute font-['Capriola',sans-serif] leading-[1.3] left-[10px] text-[#0a0903] text-[40px] text-nowrap top-0 whitespace-pre m-0" data-node-id="6:90">
            <span>Bee </span>
            <span className="text-[#f7f3f3]">Blast</span>
          </p>
        </div>
        <div className="absolute h-[361px] left-[1024px] top-[199px] w-[320px]" data-name="More contain Container" data-node-id="15:95">
          <Gradient
            gradient="linear-gradient(90deg, rgba(214, 239, 255, 0.2) 0%, rgba(214, 239, 255, 0.2) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 320 361&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.20000000298023224&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(9.7972e-16 18.05 -16 1.1052e-15 160 180.5)&quot;><stop stop-color=&quot;rgba(0,0,0,0)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(0,0,0,1)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>'), linear-gradient(rgb(251, 207, 112) 0%, rgb(16, 152, 247) 100%)"
            className="absolute h-[361px] left-0 rounded-[20px] top-0 w-[320px]"
            data-node-id="15:89"
          />
          <p className="absolute font-['Capriola',sans-serif] h-[148px] leading-[1.3] left-[33px] text-[#f7f3f3] text-[30px] top-[18px] w-[266px] m-0" data-node-id="6:94">Lorem Ipsum is simply typesetting industry. </p>
          <Button
            className="absolute bg-[#f4d06f] h-[50px] left-[33px] top-[282px] w-[180px] rounded-[30px] font-['Inter',sans-serif] font-semibold text-[20px] text-black hover:bg-[#f4d06f]/90"
            data-name="Book Demo Button"
            data-node-id="17:145"
          >
            Give it a try
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <section className="fixed bg-transparent h-[91px] left-0 right-0 top-0 z-50 backdrop-blur-sm" data-name="Navigation" data-node-id="1:15">
        <NavigationMenu className="absolute left-[545px] top-[28px]" viewport={false}>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#home"
                onClick={() => setActiveNav("home")}
                onMouseEnter={() => setHoveredNav("home")}
                onMouseLeave={() => setHoveredNav(null)}
                className={`h-[35px] min-w-[88px] px-4 rounded-[20px] transition-colors font-['Capriola',sans-serif] text-[20px] text-black items-center justify-center ${
                  hoveredNav !== null
                    ? hoveredNav === "home"
                      ? "bg-[#d9d9d9]/70"
                      : "bg-transparent"
                    : activeNav === "home"
                    ? "bg-[#d9d9d9]/70"
                    : "bg-transparent"
                }`}
                data-name="Home Button"
                data-node-id="15:105"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#resources"
                onClick={() => setActiveNav("resources")}
                onMouseEnter={() => setHoveredNav("resources")}
                onMouseLeave={() => setHoveredNav(null)}
                className={`h-[35px] min-w-[125px] px-4 rounded-[20px] transition-colors font-['Capriola',sans-serif] text-[20px] text-black items-center justify-center ${
                  hoveredNav !== null
                    ? hoveredNav === "resources"
                      ? "bg-[#d9d9d9]/70"
                      : "bg-transparent"
                    : activeNav === "resources"
                    ? "bg-[#d9d9d9]/70"
                    : "bg-transparent"
                }`}
                data-name="Resources Button"
                data-node-id="15:106"
              >
                Resources
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                onClick={() => setActiveNav("about")}
                onMouseEnter={() => setHoveredNav("about")}
                onMouseLeave={() => setHoveredNav(null)}
                className={`h-[35px] min-w-[90px] px-4 rounded-[20px] transition-colors font-['Capriola',sans-serif] text-[20px] text-black items-center justify-center ${
                  hoveredNav !== null
                    ? hoveredNav === "about"
                      ? "bg-[#d9d9d9]/70"
                      : "bg-transparent"
                    : activeNav === "about"
                    ? "bg-[#d9d9d9]/70"
                    : "bg-transparent"
                }`}
                data-name="About Button"
                data-node-id="15:107"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          className="absolute bg-[#0a0903] h-[50px] left-[calc(50%+568px)] rounded-[30px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[112px] hover:bg-[#1a1903] font-['Capriola',sans-serif] text-[20px] text-white"
          data-name="Sign In button"
          data-node-id="1:21"
        >
          Sign In
        </Button>
        <div className="absolute h-[52px] left-[96px] top-[20px] w-[197px]" data-name="Icon Logo" data-node-id="15:101">
          <div className="absolute bg-[#f4d06f] h-[50px] left-0 rounded-[30px] top-px w-[94px]" data-node-id="15:102" />
          <p className="absolute font-['Capriola',sans-serif] leading-[1.3] left-[10px] text-[#0a0903] text-[40px] text-nowrap top-0 whitespace-pre m-0" data-node-id="15:103">
            Bee Blast
          </p>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="relative h-[76px] w-full max-w-[1440px]" data-name="Footer" data-node-id="15:110">
        <div className="absolute bg-[#0a0903] h-[76px] left-0 top-0 w-full" data-node-id="2:7" />
        <p className="absolute font-['Inter',sans-serif] font-semibold leading-[1.3] left-[575px] text-[#f7f3f3] text-[18px] text-nowrap top-[26px] whitespace-pre m-0" data-node-id="3:11">
          <span>Beeblast@2025 </span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#f4d06f] transition-colors">Manage Cookies</span>
        </p>
        <p className="absolute font-['Inter',sans-serif] font-semibold leading-[1.3] left-[1136px] text-[#f7f3f3] text-[18px] text-nowrap top-[26px] whitespace-pre m-0" data-node-id="3:12">
          Amsterdam, Netherland
        </p>
      </section>
    </div>
  );
}
