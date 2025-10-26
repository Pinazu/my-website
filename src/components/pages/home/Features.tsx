// src/components/pages/home/Features.tsx
import imgLilyBlueSummer from "@assets/lilybluesummer.svg";

export function Features() {
  return (
    <section className="relative h-[1176px] w-full max-w-full z-10" data-name="Features Section" data-node-id="15:138">
      <div className="absolute bg-[#0a0903] h-[1176px] left-0 top-0 w-full" data-name="Background" data-node-id="15:134" />
      <img
        src={imgLilyBlueSummer}
        alt=""
        className="absolute h-[592px] left-[97px] rounded-[20px] top-[162px] w-[826px]"
        data-name="Background Preview"
        data-node-id="33:30"
      />
      <p className="absolute h-[106px] leading-[1.3] left-[97px] text-[#f7f3f3] text-[40px] top-[783px] w-[821px] m-0" data-node-id="15:120">
        Introducing BeeBlast — your effortless tax assistant.
      </p>
      <p className="absolute h-[115px] leading-[1.3] left-[948px] text-[#70757a] text-[40px] top-[610px] w-[395px] m-0" data-node-id="15:149">
        Built for freelancers and small business
      </p>
      <p className="absolute h-[115px] leading-[1.3] left-[948px] text-[#414447] text-[40px] top-[797px] w-[395px] m-0" data-node-id="15:151">
        Quisque tincidunt elit ultricies quam
      </p>
      <div className="absolute h-[304px] left-[948px] top-[323px] w-[395px]" data-name="Feature Description" data-node-id="16:32">
        <div className="absolute bg-[#0a0903] border border-[#0a0903] border-solid h-[279px] left-0 rounded-[20px] top-0 w-[395px]" data-node-id="15:142" />
        <p className="absolute leading-[1.3] left-0 text-[#f7f3f3] text-[40px] top-0 w-[395px] m-0" data-node-id="15:114">
          Auto-classified. Verified. Filed.
        </p>
        <p className="absolute h-[130px] leading-[1.3] left-0 text-[#f7f3f3] text-[20px] top-[152px] w-[395px] m-0" data-node-id="15:148">
          BeeBlast automatically scans your receipts, invoices, and bank transactions, then prepares compliant tax reports — all within minutes.
        </p>
      </div>
      <p className="absolute h-[116px] leading-[1.3] left-[948px] text-[#1e1f21] text-[40px] top-[927px] w-[395px] m-0" data-node-id="15:153">
        Mauris dolor odio, rutrum
      </p>
    </section>
  );
}
