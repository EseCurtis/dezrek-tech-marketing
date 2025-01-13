import {
  MdArrowOutward,
  MdFavoriteBorder,
  MdMoving,
  MdPeopleOutline
} from "react-icons/md";

export function HeadlineBanner() {
  return (
    <div className="h-[55dvh] w-full relative  bg-black ">
      <div
        className="w-full h-full absolute opacity-30 bg-contain top-0"
        style={{
          background: "url(/pexels-fauxels-3183183.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        }}
      ></div>

      <div className="grid grid-cols-3 text-white  px-16 w-full h-full z-10 relative gap-10 pl-0">
       
        <div className="col-span-2 h-full relative flex flex-col items-center justify-center  p-5 pl-0 ">
          <div className="bg- w-full h-full gap-10 pt-16 px-16 pl-0 rounded-xl rounded-r-[0]">
            <div className="flex justify-between items-center gap- pt-5 text-white">
              <div className="col-span-1 h-full w-full flex flex-col items-center justify-center gap-2">
                <h4 className="text-7xl font-[500] flex">
                  30 <MdPeopleOutline className="text-xl text-pink-600" />
                </h4>
                <p className="text-sm">Customer Reviews</p>
              </div>
              <span>|</span>
              <div className="col-span-1 h-full w-full flex flex-col items-center justify-center gap-2">
                <h4 className="text-7xl font-[500] flex">
                  15 <MdFavoriteBorder className="text-xl text-orange-500" />
                </h4>
                <p className="text-sm">Happy Clients</p>
              </div>

              <span>|</span>

              <div className="col-span-1 h-full w-full flex flex-col items-center justify-center gap-2">
                <h4 className="text-7xl font-[500] flex">
                  22 <MdMoving className="text-xl text-blue-500" />
                </h4>
                <p className="text-sm">Return Rate</p>
              </div>
            </div>

            <div className="  text-white  w-full h-auto  z-10 rounded-xl p-3 mx-auto flex justify-center mt-10">
              <div className="flex flex-col text-[13px] text-white items-center gap-3">
                <button className="flex rounded-full border border-black p-4 text-black bg-white px-7 gap-3 items-center pr-4">
                  Behold the power of our cracked developers ⏤ Explore our
                  portfolio
                  <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 h-full flex flex-col justify-start gap-3 py-10 pt-20">
          <p className="text-[13px]">⏤ At Dezrek Technologies</p>
          <h3 className="text-5xl font-[600] leading-[3rem]">
            We Ensure our clients get the best.
          </h3>
        </div>
      </div>
    </div>
  );
}
