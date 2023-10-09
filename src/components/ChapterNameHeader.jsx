import { h1 } from "@/utils/textSize";

function ChapterNameHeader() {
  return (
    <>
      <h1 className={`text-blue-800 mt-4 font-semibold ${h1}`}>chapter</h1>

      <p className="sm:text-sm text-[0.5rem] text-gray-500">
        subject | <span> Views</span>
      </p>
    </>
  );
}

export default ChapterNameHeader;
