import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { classes } from "../navbar-dropdown/Secondary";
import { ExemplarSubjects, SolutionSubjects } from "./StudySubject";
import Link from "next/link";

export function Solutions() {
  const [show, setShow] = useState<any>(undefined);
  const handleSetShow = (classVal: any) => {
    let value: string | undefined = classVal;
    if (show && show === classVal) value = undefined;
    setShow(value);
  };

  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      {classes.map((classVal: number, ind: number) => (
        <>
          <div
            key={ind}
            className="flex flex-row gap-3 items-center p-1 cursor-pointer"
            onClick={() => handleSetShow(classVal)}
          >
            <p>NCERT Solutions For Class {classVal}</p>
            <AiOutlineCaretDown />
          </div>
          {show && show === classVal && (
            <SolutionSubjects classVal={classVal} />
          )}
        </>
      ))}
    </div>
  );
}

export function Exemplar() {
  const [show, setShow] = useState<any>(undefined);
  const handleSetShow = (classVal: any) => {
    let value: string | undefined = classVal;
    if (show && show === classVal) value = undefined;
    setShow(value);
  };

  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      {classes.map((classVal: number, ind: number) => (
        <>
          <div
            key={ind}
            className="flex flex-row gap-3 items-center p-1 cursor-pointer"
            onClick={() => handleSetShow(classVal)}
          >
            <p>NCERT Exemplar Solutions For Class {classVal}</p>
            <AiOutlineCaretDown />
          </div>
          {show && show === classVal && (
            <ExemplarSubjects classVal={classVal} />
          )}
        </>
      ))}
    </div>
  );
}

export function Jee() {
  return (
    <Link
      className="pl-2"
      href="https://infinitylearn.com/jee-main-question-paper-2023"
    >
      Previous Year Question Paper
    </Link>
  );
}

export function Rank() {
  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      <Link
        href="https://infinitylearn.com/rank-predictor-neet"
        className="pl-1"
      >
        NEET
      </Link>
      <Link
        href="https://infinitylearn.com/rank-predictor-jee"
        className="pl-1"
      >
        JEE
      </Link>
    </div>
  );
}
