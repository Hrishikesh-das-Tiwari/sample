import React from "react";
import { subjects, subjects_exemplar } from "../navbar-dropdown/ThirdDropdown";
import Link from "next/link";

export function SolutionSubjects(props: any) {
  const { classVal } = props;

  return (
    <div className="flex flex-col gap-1 text-xs font-medium pl-1">
      {classVal &&
        subjects[classVal]?.map((subject: any, ind: number) => (
          <Link
            key={ind}
            href={`https://infinitylearn.com/surge/study-materials/ncert-solutions/class-${classVal}/${subject}/`}
            className="p-1 cursor-pointer"
          >
            NCERT Solutions For Class {classVal} {subject}
          </Link>
        ))}
    </div>
  );
}

export function ExemplarSubjects(props: any) {
  const { classVal } = props;

  return (
    <div className="flex flex-col flex-wrap overflow-wrap gap-1 text-xs font-medium pl-1">
      {classVal &&
        subjects_exemplar[classVal]?.map((subject: any, ind: number) => (
          <Link
            key={ind}
            href={`https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-${classVal}/${subject}/`}
            className="py-1 cursor-pointer"
          >
            NCERT Exemplar Solutions For Class {classVal} {subject}
          </Link>
        ))}
    </div>
  );
}
