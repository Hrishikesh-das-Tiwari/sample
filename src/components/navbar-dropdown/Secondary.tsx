import { useState } from "react";
import { AiOutlineCaretRight as Right } from "react-icons/ai";
import { ThirdOne, ThirdTwo } from "./ThirdDropdown";
import Link from "next/link";

export const classes: number[] = [12, 11, 10, 9, 8, 7, 6];
const top = [
  "top-0",
  "top-8",
  "top-14",
  "top-24",
  "top-32",
  "top-40",
  "top-48",
];

export function SecondaryOne() {
  const [show, setShow] = useState<any>({
    decision: false,
    value: undefined,
    top: undefined,
  });
  const handleSetShow = (classVal: any, ind: number) => {
    const value = classVal;
    setShow({ decision: true, value, top: top[ind] });
  };

  return (
    <div
      className="absolute flex font-medium flex-col gap-2 left-60 ml-[10px] bg-white text-sm p-3 top-0 w-max z-20 shadow-lg rounded-lg"
      onMouseLeave={() => setShow({ decision: false, value: undefined })}
    >
      {classes.map((classVal: number, ind: number) => (
        <div
          key={ind}
          className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
          data-value={classVal}
          onMouseEnter={() => handleSetShow(classVal, ind)}
        >
          <p>NCERT Solutions For Class {classVal}</p>
          <Right />
        </div>
      ))}
      {show && show?.decision === true && (
        <ThirdOne classVal={show?.value} top={show?.top} />
      )}
    </div>
  );
}

export function SecondaryTwo() {
  const [show, setShow] = useState<any>({
    decision: false,
    value: undefined,
    top: undefined,
  });
  const handleSetShow = (classVal: any, ind: number) => {
    const value = classVal;
    setShow({ decision: true, value, top: top[ind] });
  };

  return (
    <div
      className="absolute flex font-medium flex-col gap-2 text-sm p-3 top-4 left-60 ml-[10px] w-max shadow-lg rounded-lg bg-white z-20"
      onMouseLeave={() => setShow({ decision: false, value: undefined })}
    >
      {classes.map((classVal: number, ind: number) => (
        <div
          key={ind}
          className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
          data-value={classVal}
          onMouseEnter={() => handleSetShow(classVal, ind)}
        >
          <p>NCERT Exemplar Solutions For Class {classVal}</p>
          <Right />
        </div>
      ))}
      {show && show?.decision === true && (
        <ThirdTwo classVal={show?.value} top={show?.top} />
      )}
    </div>
  );
}

export function SecondaryThree() {
  return (
    <div className="absolute font-medium gap-2 text-sm p-3 left-60 ml-[10px] top-14 w-max shadow-lg rounded-lg bg-white z-20 hover:bg-blue-100 p-1">
      <Link href="https://infinitylearn.com/jee-main-question-paper-2023">
        Previous Year Question Paper
      </Link>
    </div>
  );
}

export function SecondaryFour() {
  return (
    <div className="absolute flex font-medium flex-col gap-2 text-sm p-3 top-24 left-60 ml-[10px] w-fit shadow-lg rounded-lg bg-white z-20">
      <Link
        href="https://infinitylearn.com/rank-predictor-neet"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        NEET
      </Link>
      <Link
        href="https://infinitylearn.com/rank-predictor-jee"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        JEE
      </Link>
    </div>
  );
}
