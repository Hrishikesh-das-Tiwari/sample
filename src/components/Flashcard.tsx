import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Flashcard() {
  return (
    <div className=" p-4 border border-blue-700 rounded-xl border-b-8 min-w-[180px]">
      <p className="sm:text-lg text-base">01</p>
      <Image
        src="/flashcard.png"
        width={140}
        height={100}
        className="w-[140px]"
        alt="flashcard"
      />
      <p className="sm:text-lg text-sm sm:font-bold font-semibold">
        Algebra 1 Notes
      </p>
      <div className="flex flex-row items-center mt-2 gap-6">
        <p className="text-xs text-gray-800 whitespace-nowrap">4 cards</p>
        <FaAngleRight className="ml-auto" />
      </div>
    </div>
  );
}

export default Flashcard;
