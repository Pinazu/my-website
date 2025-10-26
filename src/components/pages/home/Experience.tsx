// src/components/pages/home/Experience.tsx
import imgCommaOrangeAutumn from "@assets/commaorangeautumn.svg";
import imgMartinBlueSummer from "@assets/martinbluesummer.svg";
import imgJoshCyanSummer from "@assets/joshcyansummer.svg";

export function Experience() {
  return (
    <section className="relative h-[1800px] w-full max-w-full z-10" data-name="Experience Section" data-node-id="17:61">
      <img alt="" className="absolute left-0 top-0 w-full w-max-full" src={imgMartinBlueSummer} />
      <img alt="" className="absolute left-0 top-[900px] w-full w-max-full" src={imgJoshCyanSummer} />
      <div className="absolute flex flex-col h-[98px] justify-center leading-[1.3] left-[202px] text-[#f7f3f3] text-[40px] top-[135px] translate-y-[-50%] w-[821px]" data-node-id="17:59">
        <p className="mb-0">But, </p>
        <p className="m-0">we also care about your experiences</p>
      </div>
      <div className="absolute flex flex-col h-[139px] justify-center leading-[0] left-[737px] text-[#f7f3f3] text-[40px] top-[380.5px] translate-y-[-50%] w-[607px]" data-node-id="17:68">
        <p className="leading-[1.3] m-0">We want to bring seemless interaction between BeeBlast and your business</p>
      </div>
      <img
        src={imgCommaOrangeAutumn}
        alt=""
        className="absolute h-[585px] left-[518px] rounded-[20px] top-[604px] w-[828px]"
        data-name="Preview Feature"
        data-node-id="17:155"
      />
      <div className="absolute h-[714px] left-[97px] top-[728px] w-[395px]" data-name="Features" data-node-id="17:84">
        <p className="absolute h-[121px] leading-[1.3] left-0 text-[40px] text-[rgba(247,243,243,0.6)] top-[304px] w-[395px] m-0" data-node-id="17:76">
          Integer at quam euismod
        </p>
        <p className="absolute h-[115px] leading-[1.3] left-0 text-[40px] text-[rgba(247,243,243,0.3)] top-[454px] w-[395px] m-0" data-node-id="17:77">
          Quisque tincidunt elit ultricies quam
        </p>
        <div className="absolute h-[304px] left-0 top-0 w-[395px]" data-name="Feature Description" data-node-id="17:78">
          <div className="absolute bg-[rgba(10,9,3,0)] h-[279px] left-0 rounded-[20px] top-0 w-[395px]" data-node-id="17:79" />
          <p className="absolute leading-[1.3] left-0 text-[#f7f3f3] text-[40px] top-0 w-[395px] m-0" data-node-id="17:80">
            Aenean eget metus vitae tortor placera
          </p>
          <p className="absolute h-[130px] leading-[1.3] left-0 text-[#f7f3f3] text-[20px] top-[152px] w-[395px] m-0" data-node-id="17:81">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Duis at iaculis diam
          </p>
        </div>
        <p className="absolute h-[116px] leading-[1.3] left-0 text-[40px] text-[rgba(247,243,243,0.1)] top-[598px] w-[395px] m-0" data-node-id="17:82">
          Mauris dolor odio, rutrum
        </p>
      </div>
      <div className="absolute flex flex-col justify-center leading-[1.3] left-[202px] text-[40px] text-nowrap text-white top-[1600px] translate-y-[-50%] whitespace-pre" data-node-id="17:154">
        <p className="mb-0">BeeBlast is your employee, </p>
        <p className="m-0">you are fully in control</p>
      </div>
    </section>
  );
}
