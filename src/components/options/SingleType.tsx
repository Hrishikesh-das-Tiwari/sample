import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

export default function SingleType({
  answerOptions,
  clickOption,
  selectedOption,
  correctOption,
}: any) {
  return (
    <div className="flex flex-col gap-2 my-4 md:w-[70%]">
      {answerOptions?.map((option: any, ind: number) => {
        let correct: boolean | undefined = undefined;
        if (selectedOption) {
          if (
            (ind + 1 === +selectedOption && ind + 1 === +correctOption) ||
            ind + 1 === +correctOption
          ) {
            correct = true;
          } else if (ind + 1 === +selectedOption) {
            correct = false;
          }
        }

        return (
          <div
            key={ind}
            onClick={() => clickOption(ind + 1)}
            className={`rounded border items-center p-2 relative flex flex-row gap-2 max-sm:text-xs cursor-pointer ${
              correct !== undefined && (correct === true ? "correct" : "wrong")
            } `}
          >
            <div className="flex items-center justify-center bg-[#ECF4FF] sm:w-6 w-5 max-sm:h-5 h-6 rounded-full">
              <span className="sm:text-xs text-xs font-bold">
                {String.fromCharCode(ind + 65)}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: option,
              }}
              className=""
            />
            <div className="ml-auto inline-block">
              {correct !== undefined && correct === true && (
                <TiTick className="bg-[#4FB85A] ml-auto rounded-full text-white items-center my-auto" />
              )}
              {correct !== undefined && correct === false && (
                <RxCross2 className="bg-[#FF5C5C] ml-auto rounded-full text-white items-center my-auto" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
