// src/components/pages/home/Security.tsx
const securityFacts = [
  "BeeBlast protects your data with end-to-end encryption (AES-256, TLS 1.3) and strict access control.",
  "You always own and control your data — choose to keep or permanently delete it anytime.",
  "BeeBlast meets major security standards including GDPR, ISO 27001, and SOC 2 Type II compliance. You can follow this link for verification yourself.",
  "Our Attribute-Based Access Control (ABAC) ensures precise permissions for every user and workspace.",
  "Comprehensive logging and tracing let you monitor your agent's actions and your own activity in real time.",
  "We never sell, store, or use your data for AI model training — your information stays yours, always.",
];

const blockColors = [
  "#211e0a",
  "#f7f3f3",
  "#90959a",
  "#1098f7",
  "#f4d06f",
  "#ff9f1c",
  "#d6efff",
];

export function Security() {
  return (
    <section className="relative z-10 w-full bg-[#0a0903] py-24 text-[#f7f3f3]" data-name="Security Section" data-node-id="17:162">
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
            <p className="text-[clamp(2.25rem,4vw,2.75rem)] leading-[1.3] m-0">
              We priority your security and data.
            </p>
            <p className="text-[1.125rem] leading-[1.6] text-[#f7f3f3]/90 m-0">
              BeeBlast is built with privacy-first principles and enterprise-grade encryption — so you stay fully in control of your data at all times.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[auto,1fr]">
            <div className="grid grid-cols-3 gap-4 w-fit mx-auto lg:mx-0">
              {blockColors.map((color, index) => (
                <span
                  // simple decorative blocks that echo the hero palette
                  key={`${color}-${index}`}
                  className="h-[74px] w-[67px] rounded-[12px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="space-y-6 text-[1.125rem] leading-[1.6] text-[#f7f3f3]/90">
              {securityFacts.map((fact) => (
                <p key={fact} className="m-0">
                  {fact}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center text-[clamp(2rem,4vw,2.75rem)] leading-[1.3] font-semibold">
            <p className="mb-2">Security isn't optional for us</p>
            <p className="m-0">It's at the core of everything we build.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
