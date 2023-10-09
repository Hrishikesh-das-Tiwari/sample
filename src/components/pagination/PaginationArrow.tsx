import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export default function PaginationArrow() {
  return (
    <div className="flex flex-row text-sm mt-8  gap-8 text-[#787878] justify-center items-center">
      <FaAngleLeft />
      <p>1</p>
      <p>2</p>
      <FaAngleRight />
    </div>
  );
}
