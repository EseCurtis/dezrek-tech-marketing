import Image from "next/image";
import { MdArrowOutward, MdCalendarMonth } from "react-icons/md";

export function Hero() {
  return (
    <div className=" items-center justify-center h-screen grid grid-cols-3 px-16">
      <div className="col-span-2 flex flex-col gap-7 h-full justify-center">
        <h1 className="text-7xl font-semibold">
          Web, Mobile, & <br /> Beyond – Tailored Digital Solutions.
        </h1>
        <p className="max-w-[70%] text-[13px]">
          Discover a team dedicated to crafting sleek, performance-driven
          digital products for businesses that strive for excellence. From
          dynamic websites to robust mobile apps, we deliver innovative
          solutions that help your business thrive in the digital world.
        </p>

        <div className="col-span-1 flex mt-3 gap-4">
          <div className="flex hover:opacity-70 transition-all">
            <button className="bg-black p-3 px-14 rounded-full text-white text-[13px]">
              Build With Us Now
            </button>
            <div className="bg-black border border-black p-3 px-4 flex text-white items-center justify-center aspect-square rounded-full">
              <MdArrowOutward />
            </div>
          </div>

          <button className="text-black border border-black p-3 px-7 rounded-full hover:border-black/30 transition-all text-[13px] flex gap-3 items-center">
            Book a Consultation <MdCalendarMonth />
          </button>
        </div>
      </div>

      <div className="col-span-1 scale-125">
        <Image
          src="/professor.png"
          alt="Dezrek Technologies Hero Image"
          width={1000}
          height={1000}
          className=""
        />
      </div>
    </div>
  );
}
