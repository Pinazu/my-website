// src/components/Footer.tsx
import imgEllipse1 from "@assets/ellipse1.svg";
import imgRokenOrageAutumn from "@assets/rokenorangeautumn.svg";
import imgLogo from "@assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Gradient } from "@/components/ui/gradient";
import { SiX, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <>
      {/* End Section (Footer) */}
      <section className="relative h-[767px] w-full max-w-full z-10" data-name="End Section" data-node-id="15:109">
        <div className="absolute bg-[#0a0903] h-[767px] left-0 top-0 w-full max-w-full" data-node-id="3:9" />
        <div className="absolute h-[767px] left-0 top-0 w-full-max-w-full" data-name="Language Container" data-node-id="15:99">
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
        <div className="absolute h-[100px] left-[94px] top-[64px] w-[100px]" data-name="Icon Logo" data-node-id="15:100">
          <img alt="BeeBlast Logo" className="block h-full w-full object-contain" src={imgLogo} />
        </div>
        <div className="absolute h-[361px] left-[1024px] top-[199px] w-[320px]" data-name="More contain Container" data-node-id="15:95">
          <Gradient
            gradient="linear-gradient(90deg, rgba(214, 239, 255, 0.2) 0%, rgba(214, 239, 255, 0.2) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 320 361&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.20000000298023224&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(9.7972e-16 18.05 -16 1.1052e-15 160 180.5)&quot;><stop stop-color=&quot;rgba(0,0,0,0)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(0,0,0,1)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>'), linear-gradient(rgb(251, 207, 112) 0%, rgb(16, 152, 247) 100%)"
            className="absolute h-[361px] left-0 rounded-[20px] top-0 w-[320px]"
            data-node-id="15:89"
          />
          <img alt="" className="absolute h-[361px] left-0 rounded-[20px] top-0 w-[320px]" src={imgRokenOrageAutumn} />
          <p className="absolute h-[148px] leading-[1.3] left-[33px] text-[#f7f3f3] text-[30px] top-[18px] w-[266px] m-0" data-node-id="6:94">
            Lorem Ipsum is simply typesetting industry.
          </p>
          <Button
            className="absolute bg-[#f4d06f] h-[50px] left-[33px] top-[282px] w-[180px] rounded-[30px] font-['Inter',sans-serif] font-semibold text-[20px] text-[#0a0903] hover:bg-[#f4d06f]/90"
            data-name="Book Demo Button"
            data-node-id="17:145"
          >
            Give it a try
          </Button>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="relative w-full max-w-full z-20" data-name="Footer" data-node-id="15:110">
        <div className="bg-[#0a0903] left-0 top-0 w-full">
          <div className="px-32">
            <div className="flex justify-between items-center h-20" data-node-id="2:7">
              <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#f7f3f3] hover:text-[#f4d06f] transition-colors">
                  <SiX size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#f7f3f3] hover:text-[#f4d06f] transition-colors">
                  <SiLinkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#f7f3f3] hover:text-[#f4d06f] transition-colors">
                  <SiInstagram size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#f7f3f3] hover:text-[#f4d06f] transition-colors">
                  <SiGithub size={20} />
                </a>
              </div>
              <p className="font-['Inter',sans-serif] font-semibold leading-[1.3] left-[575px] text-[#f7f3f3] text-[12px] text-nowrap top-[26px] whitespace-pre m-0" data-node-id="3:11">
                <span>BeeBlast@2025 </span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#f4d06f] transition-colors">
                  Manage Cookies
                </span>
              </p>
              <p className="font-['Inter',sans-serif] font-semibold leading-[1.3] left-[1136px] text-[#f7f3f3] text-[12px] text-nowrap top-[26px] whitespace-pre m-0" data-node-id="3:12">
                Amsterdam, Netherland
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
