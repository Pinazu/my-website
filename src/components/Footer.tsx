// src/components/Footer.tsx
import imgEllipse1 from "@assets/ellipse1.svg";
import imgRokenOrageAutumn from "@assets/rokenorangeautumn.svg";
import imgLogo from "@assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Gradient } from "@/components/ui/gradient";
import { SiX, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { footerColumns } from "@/lib/utils"; // Import footer data


export function Footer() {
  return (
    <>
      {/* End Section (Footer) */}
      <section className="relative z-10 w-full bg-[#0a0903] py-16 text-[#f7f3f3]">
        <div className="absolute inset-0 bg-[#0a0903]" aria-hidden />
        <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
            <div className="flex flex-wrap items-end justify-between">
              <div className="h-[100px]">
                <img alt="BeeBlast Logo" className="block h-full w-full object-contain" src={imgLogo} />
              </div>
              <div className="flex items-center gap-4">
                <img alt="" className="h-2.5 w-2.5" src={imgEllipse1} />
                <p className="text-[1rem] font-semibold tracking-[0.2em] text-[#90959a]">Language</p>
                <div className="flex items-center gap-3 font-['Inter',sans-serif] text-[20px] font-semibold">
                  <button type="button" className="text-[#f7f3f3] transition-colors hover:text-[#f4d06f]">
                    EN
                  </button>
                  <button type="button" className="text-[#90959a] transition-colors hover:text-[#f4d06f]">
                    NL
                  </button>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-wrap justify-between gap-8">
              {footerColumns.map((column) => (
                <div key={column.id} className="flex min-w-[100px] max-w-[290px] flex-1 flex-col gap-10">
                  {column.sections.map((section) => (
                    <div key={section.title}>
                      <p className="text-[0.9rem] font-semibold text-[#90959a]">{section.title}</p>
                      <ul className="mt-4 flex flex-col gap-3">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="text-[1rem] font-semibold text-[#f7f3f3] transition-colors hover:text-[#f4d06f]"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex min-w-[220px] max-w-[320px] flex-1">
                <div className="relative h-[361px] w-full overflow-hidden rounded-[20px]">
                  <Gradient
                    gradient="linear-gradient(90deg, rgba(214, 239, 255, 0.2) 0%, rgba(214, 239, 255, 0.2) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=&quot;0 0 320 361&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; preserveAspectRatio=&quot;none&quot;><rect x=&quot;0&quot; y=&quot;0&quot; height=&quot;100%&quot; width=&quot;100%&quot; fill=&quot;url(%23grad)&quot; opacity=&quot;0.20000000298023224&quot;/><defs><radialGradient id=&quot;grad&quot; gradientUnits=&quot;userSpaceOnUse&quot; cx=&quot;0&quot; cy=&quot;0&quot; r=&quot;10&quot; gradientTransform=&quot;matrix(9.7972e-16 18.05 -16 1.1052e-15 160 180.5)&quot;><stop stop-color=&quot;rgba(0,0,0,0)&quot; offset=&quot;0&quot;/><stop stop-color=&quot;rgba(0,0,0,1)&quot; offset=&quot;1&quot;/></radialGradient></defs></svg>'), linear-gradient(rgb(251, 207, 112) 0%, rgb(16, 152, 247) 100%)"
                    className="absolute inset-0"
                  />
                  <img alt="" className="absolute inset-0 h-full w-full object-cover" src={imgRokenOrageAutumn} />
                  <div className="relative z-10 flex h-full flex-col justify-between p-8">
                    <p className="text-[30px] leading-[1.3] text-[#f7f3f3]">
                      Lorem Ipsum is simply typesetting industry.
                    </p>
                    <Button className="bg-[#f4d06f] text-[#0a0903] hover:bg-[#f4d06f]/90 w-fit relative z-10 h-[56px] rounded-[30px] px-10 text-[20px] font-semibold text-[#0a0903] bg-[#f4d06f] hover:bg-[#f4d06f]/90">
                      Give it a try
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="relative z-20 w-full bg-[#0a0903]" data-name="Footer" data-node-id="15:110">
        <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
          <div
            className="mx-auto flex max-w-[1440px] flex-col gap-6 py-6 text-[#f7f3f3] sm:flex-row sm:items-center sm:justify-between"
            data-node-id="2:7"
          >
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f7f3f3] transition-colors hover:text-[#f4d06f]"
              >
                <SiX size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/109203588"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f7f3f3] transition-colors hover:text-[#f4d06f]"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f7f3f3] transition-colors hover:text-[#f4d06f]"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://github.com/beeblastco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f7f3f3] transition-colors hover:text-[#f4d06f]"
              >
                <SiGithub size={20} />
              </a>
            </div>
            <p
              className="font-['Inter',sans-serif] text-center text-xs font-semibold leading-[1.3] text-[#f7f3f3] sm:text-left"
              data-node-id="3:11"
            >
              <span>BeeBlast@2025 </span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline transition-colors hover:text-[#f4d06f]">
                Manage Cookies
              </span>
            </p>
            <p
              className="font-['Inter',sans-serif] text-center text-xs font-semibold leading-[1.3] text-[#f7f3f3] sm:text-right"
              data-node-id="3:12"
            >
              Amsterdam, Netherland
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
