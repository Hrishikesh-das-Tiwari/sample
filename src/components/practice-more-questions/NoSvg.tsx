import { FaAngleRight } from "react-icons/fa";

export default function NoSvg() {
  return (
    <>
      <h3 className={`sm:text-xl text-base text-bold my-4`}>
        Practice More Questions
      </h3>

      <div className="flex flex-row gap-6 flex-nowrap overflow-x-scroll my-2 py-4">
        <div className="border-l-8 flex flex-col justify-evenly border-l-[#5DA444] border p-3 w-[165px] shrink-0 pr-8 rounded-lg shadow-lg overflow-hidden">
          <h4 className="min-h-[48px] font-semibold">Easy Questions</h4>
          <div className="rounded-full ml-auto bg-gray-300 opacity-50 inline-block p-[3px] text-lg">
            <FaAngleRight />
          </div>
        </div>
        <div className="border-l-8 border-l-[#B9A600] border p-3 w-[165px] flex flex-col justify-evenly shrink-0 pr-8 rounded-lg shadow-lg overflow-hidden">
          <h4 className="min-h-[48px] font-semibold">Medium Questions</h4>
          <div className="ml-auto rounded-full bg-gray-300 opacity-50 inline-block p-[3px] text-lg">
            <FaAngleRight />
          </div>
        </div>
        <div className="border-l-8 border-l-[#FF9393] border p-3 w-[165px] flex flex-col justify-evenly shrink-0 pr-8 rounded-lg shadow-lg overflow-hidden">
          <h4 className="min-h-[48px] font-semibold">Hard Questions</h4>
          <div className="ml-auto rounded-full bg-gray-300 opacity-50 inline-block p-[3px] text-lg">
            <FaAngleRight />
          </div>
        </div>
        <div className="border-l-8 border-l-[#AFFF93] border p-3 w-[165px] flex flex-col justify-evenly shrink-0 pr-8 rounded-lg shadow-lg overflow-hidden">
          <h4 className="min-h-[48px] font-semibold">BITSAT</h4>
          <div className="ml-auto rounded-full bg-gray-300 opacity-50 inline-block p-[3px] text-lg">
            <FaAngleRight />
          </div>
        </div>
        <div className="border-l-8 border-l-[#5A0A0A] border p-3 w-[165px] flex flex-col justify-evenly shrink-0 pr-8 rounded-lg shadow-lg overflow-hidden">
          <h4 className="min-h-[48px] font-semibold">JEE Main</h4>
          <div className="ml-auto rounded-full bg-gray-300 opacity-50 inline-block p-[3px] text-lg">
            <FaAngleRight />
          </div>
        </div>
        <div className="border-l-8 border-l-[#A293FF] border p-3 w-[165px] flex flex-col justify-evenly shrink-0 pr-8 rounded-lg shadow-lg overflow-hidden">
          <h4 className="min-h-[48px] font-semibold">JEE Advance</h4>
          <div className="ml-auto rounded-full bg-gray-300 opacity-50 inline-block p-[3px] text-lg">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </>
  );
}
