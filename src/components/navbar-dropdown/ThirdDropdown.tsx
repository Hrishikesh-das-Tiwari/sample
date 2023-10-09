import Link from "next/link";

export const subjects: any = {
  12: ["Maths", "Biology", "Physics", "Chemistry"],
  11: ["Maths", "Biology", "Physics", "Chemistry"],
  10: ["Maths", "English", "Science", "Social Science"],
  9: ["Maths", "English", "Science", "Social Science"],
  8: ["Maths", "English", "Science", "Social Science"],
  7: ["Maths", "English", "Science", "Social Science"],
  6: ["Maths", "English", "Science", "Social Science"],
};

export const subjects_exemplar: any = {
  12: ["Maths", "Biology", "Physics", "Chemistry"],
  11: ["Maths", "Biology", "Physics", "Chemistry"],
  10: ["Maths", "Science"],
  9: ["Maths", "Science"],
  8: ["Maths", "Science"],
  7: ["Maths", "Science"],
  6: ["Maths", "Science"],
};

export function ThirdOne(props: any) {
  const { classVal, top } = props;

  return (
    <div
      className={`absolute flex font-medium flex-col gap-2 text-sm p-3 xl:left-64 max-xl:right-60 ${top} xl:m-[8px] w-max shadow-lg rounded-lg bg-white`}
    >
      {classVal &&
        subjects[classVal]?.map((subject: any, ind: number) => (
          <Link
            key={ind}
            href={`https://infinitylearn.com/surge/study-materials/ncert-solutions/class-${classVal}/${subject}/`}
            className="hover:bg-blue-100 p-1"
          >
            NCERT Solutions For Class {classVal} {subject}
          </Link>
        ))}
    </div>
  );
}

export function ThirdTwo(props: any) {
  const { classVal, top } = props;

  return (
    <div
      className={`absolute flex font-medium flex-col gap-2 text-sm p-3 xl:left-80 max-xl:right-80 ${top} xl:ml-[16px] w-max shadow-lg rounded-lg bg-white`}
    >
      {classVal &&
        subjects_exemplar[classVal]?.map((subject: any, ind: number) => (
          <Link
            key={ind}
            href={`https://infinitylearn.com/surge/study-materials/ncert-exemplar-solutions/class-${classVal}/${subject}/`}
            className="hover:bg-blue-100 p-1"
          >
            NCERT Exemplar Solutions For Class {classVal} {subject}
          </Link>
        ))}
    </div>
  );
}
