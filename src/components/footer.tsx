import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export function Footer() {
  return (
    <div className="grid grid-cols-3 bg-black text-white p-10 px-16">
      <div className="col-span-1">
        <div className="flex hover:opacity-70 transition-all">
          <button className="bg-black border border-white p-3 px-14 rounded-full text-white text-[13px]">
            Build With Us Now
          </button>
          <div className="bg-black border border-white p-3 px-4 flex text-white items-center justify-center aspect-square rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center text-center">
        <p className="text-[13px]">
          &copy; {new Date().getFullYear()} Copyright By Dezrek Technologies
        </p>
      </div>
      <div className="col-span-1 flex gap-7 justify-end  items-center">
        <Link href="#">
          <FaXTwitter />
        </Link>

        <Link href="#">
          <FaGoogle />
        </Link>

        <Link href="#">
          <FaPhone />
        </Link>
      </div>
    </div>
  );
}
