import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa";

export default function Svg({ data }: any) {
  const router = useRouter();
  const handleChangeFilter = (difficulty: string) => {
    if (data && data.gradeId)
      router.push({
        pathname: "/chapters",
        query: {
          gradeId: data.gradeId,
          examId: data.examId,
          subjectId: data.subjectId,
          chapterId: data.chapterId,
          difficulty,
        },
      });
  };
  return (
    <div className="flex flex-row gap-4 flex-nowrap overflow-x-scroll my-2 py-4">
      <div
        onClick={() => handleChangeFilter("easy")}
        className="bg-[#EBFDEE] cursor-pointer p-3 w-[160px] shrink-0 pr-8 rounded-lg shadow-lg relative overflow-hidden"
      >
        <h4 className="font-semibold pt-1">Easy Questions</h4>
        {/* <p className="text-xs text-gray-500 mt-2">234 Qs</p> */}
        <svg
          width="160"
          height="99"
          viewBox="0 0 160 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <path
            opacity="0.2"
            d="M30.5 14.5C16.9 11.7 2 8.16667 -4 3V-10H185.5V113.5C175.167 119.333 149 126 127 106C99.5 81 129 48.5 107 26C94.5 14.5 47.5 18 30.5 14.5Z"
            fill="#B8E4BF"
          />
        </svg>
        <div className="rounded-full absolute bg-gray-300 opacity-50 right-2 bottom-2 p-[3px] text-lg">
          <FaAngleRight />
        </div>
      </div>

      <div
        onClick={() => handleChangeFilter("moderate")}
        className="bg-[#fff8df] cursor-pointer p-3 w-[160px] shrink-0 pr-8 rounded-lg shadow-lg relative overflow-hidden"
      >
        <h4 className="font-semibold pt-1">Moderate Questions</h4>
        {/* <p className="text-xs text-gray-500 mt-2">234 Qs</p> */}
        <svg
          width="160"
          height="99"
          viewBox="0 0 160 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <path
            opacity="0.2"
            d="M30.5 14.5C16.9 11.7 2 8.16667 -4 3V-10H185.5V113.5C175.167 119.333 149 126 127 106C99.5 81 129 48.5 107 26C94.5 14.5 47.5 18 30.5 14.5Z"
            fill="#ECD1B2"
          />
        </svg>
        <div className="rounded-full absolute bg-gray-300 opacity-50 right-2 bottom-2 p-[3px] text-lg">
          <FaAngleRight />
        </div>
      </div>

      <div
        onClick={() => handleChangeFilter("difficult")}
        className="bg-[#ffeee7] cursor-pointer p-3 w-[160px] shrink-0 pr-8 rounded-lg shadow-lg relative overflow-hidden"
      >
        <h4 className="font-semibold pt-1">Difficult Questions</h4>
        {/* <p className="text-xs text-gray-500 mt-2">234 Qs</p> */}
        <svg
          width="160"
          height="99"
          viewBox="0 0 160 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <path
            opacity="0.2"
            d="M30.5 14.5C16.9 11.7 2 8.16667 -4 3V-10H185.5V113.5C175.167 119.333 149 126 127 106C99.5 81 129 48.5 107 26C94.5 14.5 47.5 18 30.5 14.5Z"
            fill="#FF9393"
          />
        </svg>
        <div className="rounded-full absolute bg-gray-300 opacity-50 right-2 bottom-2 p-[3px] text-lg">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
