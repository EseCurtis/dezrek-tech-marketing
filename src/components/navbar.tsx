import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Brand } from "./brand";

export function NavBar() {
  return (
    <div className="items-center p-7 px-10 grid grid-cols-5 fixed z-[50] bg-white/90 backdrop-blur-sm">
      <div className="col-span-1">
        <Brand />
      </div>

      <div className="w-full justify-center flex gap-10 text-[13px] font-[400] col-span-3 [&>*]:transition-all [&>*:hover]:underline">
        <Link href="#">Home</Link>
        <Link href="#about">Services</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <div className="col-span-1 flex gap-3 text-sm items-center justify-end">
        <Link
          href="mailto:wedezrektech@gmail.com"
          className="flex gap-3 items-center hover:underline cursor-pointer border rounded-full border-black px-3 py-1"
        >
          <FaEnvelope />
          <p className="text-xs">wedezrektech@gmail.com</p>
        </Link>

        <span>|</span>

        <Link href="tel:0000000" className="flex gap-3 items-center bg-black p-1 rounded-full cursor-pointer hover:bg-green-500 transition-all">
          <FaPhone className="text-white text-xs cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
