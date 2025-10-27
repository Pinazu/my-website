// src/components/pages/home/Metric.tsx
import { metrics } from "@/lib/utils"; // Load metric data

export function Metric() {
  return (
    <section className="relative z-10 w-full min-h-screen bg-[#0a0903] text-[#f7f3f3]" data-name="Success Metric Section" data-node-id="17:33">
      <div className="relative mx-auto w-full px-[10px] sm:px-[30px] py-30">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16">
          <div className="max-w-4xl text-[clamp(2rem,4vw,3rem)] leading-[1.3] font-semibold">
            <p className="m-0">
              We design BeeBlast so that you do not need to worry about taxes, bookkeeping, accounting and can just focus on your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric} className="rounded-[20px] bg-[#211e0a] px-8 py-10 text-center text-[1.25rem] leading-[1.4]">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
