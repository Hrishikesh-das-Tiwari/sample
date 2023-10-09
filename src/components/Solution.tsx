import { base } from "@/utils/textSize";
import ExpertForm from "./ExpertForm";

function Solution(props: any) {
  const option = props?.option;
  const explanation = props?.explanation;
  return (
    <>
      <div className="bg-[#ECF4FF] py-1 px-2 rounded my-4">
        <div className="md:w-[90%] m-4">
          <h1 className={`font-semibold mb-2 sm:text-xl text-base`}>
            Solution
          </h1>
          {option && (
            <p className={`font-light mb-5 ${base}`}>
              Correct option is <span className="uppercase"> {option}</span>
            </p>
          )}
          <p className={`font-light ${base}`} dangerouslySetInnerHTML={{
          __html: explanation,
        }} />
        </div>
      </div>

      {/* <button
        onClick={() => router.push("/signup")}
        className={`bg-[#3A7DDE] font-bold text-white w-full rounded py-2 my-6 ${p}`}
      >
        Still Unclear? Talk to our Expert!
      </button> */}


      <ExpertForm/>
    </>
  );
}

export default Solution;
