import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function PaginationBtn() {
  return (
    <>
      <ol className="flex page-btns justify-center gap-1 items-center md:text-base text-sm text-gray-600 font-medium my-8 text-center">
        <li>
          <button className="inline-flex text-xl disabled:text-gray-200 md:h-14 md:w-14 sm:h-10 sm:w-10 h-8 w-8 items-center justify-center rounded border border-gray-300 rtl:rotate-180">
            <FaAngleLeft />
          </button>
        </li>

        <li>
          <button
            className={`disabled:bg-gray-100 inline-flex items-center justify-center block md:h-14 md:w-14 sm:h-10 sm:w-10 h-8 w-8 rounded border border-gray-100 text-center items-center`}
          >
            1
          </button>
        </li>

        <li className="items-center">
          <button
            className={`disabled:bg-gray-100 inline-flex items-center justify-center block md:h-14 md:w-14 sm:h-10 sm:w-10 h-8 w-8 rounded border border-gray-100 text-center items-center`}
          >
            2
          </button>
        </li>

        <li className="items-center">
          <button
            className={`disabled:bg-gray-100 inline-flex items-center justify-center block md:h-14 md:w-14 sm:h-10 sm:w-10 h-8 w-8 rounded border border-gray-100 text-center items-center`}
          >
            3
          </button>
        </li>

        <li>
          <button className="inline-flex text-xl disabled:text-gray-200 md:h-14 md:w-14 sm:h-10 sm:w-10 h-8 w-8 items-center justify-center rounded border border-gray-300 rtl:rotate-180">
            <FaAngleRight />
          </button>
        </li>
      </ol>
    </>
  );
}

export default PaginationBtn;
