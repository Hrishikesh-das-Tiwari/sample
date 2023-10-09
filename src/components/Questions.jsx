import { h2 } from "@/utils/textSize";
import SingleType from "./options/SingleType";
import Solution from "./Solution";

function Questions() {
  return (
    <>
      <h1 className={`my-2 ${h2} font-bold`}>Questions &nbsp;</h1>
      <p className={`font-medium base`}>QuestionText</p>
      <div className={`my-2 inline-block py-1 px-6 rounded-[50px] small`}>
        <span></span>
      </div>

      <SingleType
      //pass props here
      />

      <Solution />
    </>
  );
}

export default Questions;
