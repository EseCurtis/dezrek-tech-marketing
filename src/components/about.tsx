import Image from "next/image";

export function About() {
  return (
    <div className="grid grid-cols-3 px-16 py-20 gap-7" id="about">
      <div className="col-span-1 pr-7 ">
        <Image
          src={"/logo-collage.png"}
          width={1000}
          height={1000}
          alt="logo-collage"
        />
      </div>

      <div className="col-span-2 flex flex-col gap-7 justify-center">
        <h3 className="text-3xl font-semibold">⎯ About Dezrek</h3>

        <div className="flex flex-col gap-3">
          <p className="text-[13px]">
            At DezrekTechnologies, we are a team of passionate technologists
            dedicated to crafting innovative digital solutions. We specialize in
            creating websites, mobile apps, and web applications tailored to
            help businesses excel in the digital world. Combining creativity,
            technology, and functionality, we deliver sleek, performance-driven
            products that meet the highest standards of excellence.
          </p>

          <br />
          <hr />

          <div className="mt-5">
            <p className="text-[13px] italic">
              &quot;If you can visualize a digital product, it can be
              implemented.&quot;
            </p>
            <b className="text-[13px] self-end">- Ese Curtis</b>
          </div>
        </div>
      </div>
    </div>
  );
}
