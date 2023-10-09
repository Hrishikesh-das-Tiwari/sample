import { FaAngleRight } from "react-icons/fa";

export default function Blue() {
  return (
    <>
      <h3 className="sm:text-xl text-base text-bold mb-4 mt-10">
        Practice More Questions
      </h3>
      <div className="flex flex-row sm:gap-4 gap-2 my-4 sm:text-base text-sm">
        <div className="sm:w-[22%] max-sm:basis-1/3 shrink sm:font-semibold font-medium flex items-center  p-1 lg:p-4 sm:p-3 min-[400px]:p-3 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p className="">Easy Questions</p>
          <FaAngleRight />
        </div>
        <div className="sm:w-[22%] max-sm:basis-1/3 shrink sm:font-semibold font-medium flex items-center  p-1 lg:p-4 sm:p-3 min-[400px]:p-3 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p>Medium Questions</p>
          <FaAngleRight />
        </div>
        <div className="sm:w-[22%] max-sm:basis-1/3 shrink sm:font-semibold font-medium flex items-center  p-1 lg:p-4 sm:p-3 min-[400px]:p-3 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p>Hard Questions</p>
          <FaAngleRight />
        </div>
      </div>

      <div className="flex flex-row sm:gap-4 gap-2 max-sm:justify-between my-4 flex-wrap sm:text-base text-sm">
        <div className="sm:w-[22%] max-sm:w-[48%] max-sm:px-4 max-sm:py-2 shrink sm:font-semibold font-medium flex items-center sm:p-2 p-4 lg:p-4 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p>JEE Mains</p>
          <FaAngleRight />
        </div>
        <div className="sm:w-[22%] max-sm:w-[48%] max-sm:px-4 max-sm:py-2 shrink sm:font-semibold font-medium flex items-center sm:p-2 p-4 lg:p-4 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p>JEE Advanced</p>
          <FaAngleRight />
        </div>
        <div className="sm:w-[22%] max-sm:w-[48%] max-sm:px-4 max-sm:py-2 shrink sm:font-semibold font-medium flex items-center sm:p-2 p-4 lg:p-4 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p>NEET</p>
          <FaAngleRight />
        </div>
        <div className="sm:w-[22%] max-sm:w-[48%] max-sm:px-4 max-sm:py-2 shrink sm:font-semibold font-medium flex items-center sm:p-2 p-4 lg:p-4 rounded flex-row justify-between bg-[#ECF2FA] border-l-4 border-[#004BB6]">
          <p>BITSAT</p>
          <FaAngleRight />
        </div>
      </div>
    </>
  );
}
