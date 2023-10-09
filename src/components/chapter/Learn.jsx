import { FaAngleRight } from "react-icons/fa";
import { h3 } from "@/utils/textSize";

export default function Learn() {
  return (
    <>
      <h3 className={`${h3} text-semibold my-4`}>Topics</h3>
      <div className="flex flex-col">
        <div className="flex flex-row p-2 odd:bg-gray-100 items-center rounded hover:shadow-xl hover:z-10">
          <div className="sm:p-2 p-1 sm:text-xl text-lg text-gray-400">1</div>

          <div className="flex flex-col flex-1 sm:pl-4 pl-2 sm:gap-2 gap-1">
            <p className="sm:text-base text-sm font-semibold">topicname</p>
            <p className="sm:text-xs text-[0.65rem] text-gray-500">
              11 Videos | 20 flashcards
            </p>
          </div>

          <div className="flex flex-col divide-y flex-0 gap-2">
            <FaAngleRight className="ml-auto text-base items-start" />
          </div>
        </div>
      </div>
    </>
  );
}
