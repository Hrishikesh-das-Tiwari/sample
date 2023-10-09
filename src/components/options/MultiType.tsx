import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

export default function MultiType() {
  const wrong = "bg-[#FF5C5C26]";
  const correct = "bg-[#4FB85A] bg-opacity-[.15]";

  return (
    <div className="flex flex-col gap-2 my-4  md:w-[70%]">
      <div className="rounded border p-2 relative flex flex-row gap-2 max-sm:text-xs">
        <div className="flex items-center justify-center bg-[#ECF4FF] sm:w-6 w-5 max-sm:h-5 h-6 rounded-full">
          <span className="sm:text-xs text-[10px]  font-bold">A</span>
        </div>
        13/36
      </div>

      <div
        className={`rounded border p-2 relative flex flex-row gap-2 max-sm:text-xs ${wrong}`}
      >
        <div className="flex items-center justify-center bg-[#ECF4FF] sm:w-6 w-5 max-sm:h-5 h-6 rounded-full">
          <span className="text-xs font-bold">B</span>
        </div>
        13/36
        <RxCross2 className="bg-[#FF5C5C] ml-auto rounded-full text-white items-center my-auto" />
      </div>

      <div
        className={`rounded border p-2 relative flex flex-row gap-2 max-sm:text-xs ${correct}`}
      >
        <div className="flex items-center justify-center bg-[#ECF4FF] sm:w-6 w-5 max-sm:h-5 h-6 rounded-full">
          <span className="text-xs font-bold">C</span>
        </div>
        13/36
        <TiTick className="bg-[#4FB85A] ml-auto rounded-full text-white items-center my-auto" />
      </div>

      <div className="rounded border p-2 relative flex flex-row gap-2 max-sm:text-xs">
        <div className="flex items-center justify-center bg-[#ECF4FF] sm:w-6 w-5 max-sm:h-5 h-6 rounded-full">
          <span className="text-xs font-bold">D</span>
        </div>
        13/36
      </div>
    </div>
  );
}
