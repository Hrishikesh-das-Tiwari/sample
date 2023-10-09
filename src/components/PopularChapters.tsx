import { getChapters, getPopularChapters } from "@/api/categories";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function PopularChapters() {
  const grades = ["6", "7", "8", "9", "10", "11", "12"];
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [chapters, setChapters] = useState<any[]>();
  const router = useRouter();

  const handleGradeChange = (grade: string) => {
    setChapters(undefined);
    setSelectedGrade(grade);
  };

  useEffect(() => {
    setSelectedGrade(localStorage.getItem("grade"));
  }, []);

  useEffect(() => {
    if (selectedGrade && selectedGrade !== null) {
      const loadData = async () => {
        const loadedData: any = await getPopularChapters(selectedGrade);
        // Divide the array into three equal-length columns
        const dividedData = [];
        const columnLength = Math.ceil(loadedData.length / 3);

        for (let i = 0; i < loadedData.length; i += columnLength) {
          const column = loadedData.slice(i, i + columnLength);
          dividedData.push(column);
        }
        setChapters(dividedData);
      };

      loadData();
    }
  }, [selectedGrade]);

  const handleChapterClick = (
    subjectId: number,
    chapterId: number,
    chaptername: string
  ) => {
    const subData = {
      subjectId,
      subjectname: subjectId === 1 ? "Physics" : "Chemistry",
    };
    const chapData = { chapterId, chaptername };
    localStorage.setItem("subject", JSON.stringify(subData));
    localStorage.setItem("chapter", JSON.stringify(chapData));
    localStorage.setItem("grade", JSON.stringify(selectedGrade));
    router.push({
      pathname: "/chapters",
      query: { gradeId: selectedGrade, examId: "12", subjectId, chapterId },
    });
  };

  return (
    <>
      <h3 className={`sm:text-xl text-base text-bold my-4`}>
        Popular Chapters
      </h3>

      <div className="flex flex-row gap-2 flex-wrap mb-6">
        {selectedGrade !== null &&
          grades.map((grade: string, ind: number) => (
            <button
              key={ind}
              onClick={() => handleGradeChange(grade)}
              className={`md:w-20 sm:w-16 w-12 border rounded-lg p-2 ${
                selectedGrade === grade
                  ? "bg-[#5DA444] font-bold text-white"
                  : "bg-[#F8F8F8]"
              }`}
            >
              {grade}th
            </button>
          ))}
      </div>

      <div className="flex sm:flex-row flex-col text-gray-500 mb-6">
        {chapters?.map((column, index) => (
          <div key={index} className="sm:basis-1/3">
            <div className="sm:w-[80%] flex flex-col sm:gap-2 gap-1">
              {column.map((item: any, itemIndex: number) => (
                <p
                  className="cursor-pointer hover:underline hover:text-blue-500"
                  onClick={() =>
                    handleChapterClick(
                      item.subjectId,
                      item.chapterId,
                      item.chaptername
                    )
                  }
                  key={itemIndex}
                >
                  {item.chaptername}
                </p>
              ))}
            </div>
          </div>
        ))}
        {/* <div className="sm:basis-1/3">
          <div className="sm:w-[80%] flex flex-col sm:gap-2 gap-1">
            <p>Some Applications of Trigonometry</p>
            <p>Pair of Linear Equations in Two Variables</p>
            <p>Verb</p>
            <p>Articles</p>
            <p>Real Numbers</p>
          </div>
        </div>*/}
      </div>
    </>
  );
}
