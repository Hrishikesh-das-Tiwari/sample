import { FaAngleRight } from "react-icons/fa";
import { base, h2, p, medium, easy } from "@/utils/textSize";
import { useEffect, useState } from "react";
import { getSimilarQuestions } from "@/api/questions";
import { useRouter } from "next/router";

function SimilarQuestions() {
  const router = useRouter();
  const [questions, setQuestions] = useState<any>(undefined);
  const [viewMore, setViewMore] = useState<boolean>(false);

  const handleQuestionClick = (question: any) => {
    router.push({
      pathname: "/question",
      query: { questionId: question.id },
    });
  };

  useEffect(() => {
    const gradeId = localStorage.getItem("grade");
    const examId = JSON.parse(`${localStorage.getItem("exam")}`).examid;
    const subjectId = JSON.parse(
      `${localStorage.getItem("subject")}`
    ).subjectid;
    const chapterId = JSON.parse(
      `${localStorage.getItem("chapter")}`
    ).chapterid;

    getSimilarQuestions(gradeId, examId, subjectId, chapterId).then((res) =>
      setQuestions({ first: res[0], rest: res.slice(1) })
    );
  }, []);

  return (
    <>
      <h1 className={`my-2 font-medium  ${h2}`}>Similar Questions</h1>
      {questions && (
        <div>
          {questions?.first && (
            <div className="p-6 rounded border my-4">
              <p
                className={p}
                dangerouslySetInnerHTML={{
                  __html: questions?.first?.question?.questionText,
                }}
              />
              <div className="flex flex-row my-2">
                <div
                  className={`mt-1 inline-block py-1 px-6 rounded-[50px] ${questions?.first?.difficultyLevel}`}
                >
                  {questions?.first?.difficultyLevel}
                </div>
                <button
                  onClick={() => handleQuestionClick(questions.first)}
                  className="flex flex-row ml-auto text-blue-500 items-center"
                >
                  <p className={base}>View solution</p>
                  <FaAngleRight className=" font-bold text-xl" />
                </button>
              </div>
            </div>
          )}

          {viewMore === true &&
            questions?.rest?.map((question: any, ind: number) => (
              <div key={ind} className="p-6 rounded border my-4">
                <p
                  className={p}
                  dangerouslySetInnerHTML={{
                    __html: question?.question?.questionText,
                  }}
                />
                <div className="flex flex-row my-2">
                  <div
                    className={`mt-1 inline-block py-1 px-6 rounded-[50px] ${question?.difficultyLevel}`}
                  >
                    {question?.difficultyLevel}
                  </div>
                  <button
                    onClick={() => handleQuestionClick(question)}
                    className="flex flex-row ml-auto text-blue-500 items-center"
                  >
                    <p className={base}>View solution</p>
                    <FaAngleRight className=" font-bold text-xl" />
                  </button>
                </div>
              </div>
            ))}

          {/* <div className="p-6 rounded border my-4">
            <p className={p}>
              The general health standard in India is _________.
            </p>
            <div className="flex flex-row my-2">
              <div
                className={`mt-1 inline-block py-1 px-6 rounded-[50px] ${easy}`}
              >
                Easy
              </div>
              <button className="flex flex-row ml-auto text-blue-500 items-center">
                <p className={base}>View solution</p>
                <FaAngleRight className="font-bold text-xl" />
              </button>
            </div>
          </div> */}

          {viewMore === false && (
            <button
              onClick={() => setViewMore(true)}
              className="bg-[#ECF4FF] p-4 w-full rounded-full my-6 text-center font-medium text-blue-500"
            >
              View More
            </button>
          )}

          {viewMore === true && (
            <button
              onClick={() => setViewMore(false)}
              className="bg-[#ECF4FF] p-4 w-full rounded-full my-6 text-center font-medium text-blue-500"
            >
              View Less
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default SimilarQuestions;
