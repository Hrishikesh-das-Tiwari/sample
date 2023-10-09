import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Exemplar, Jee, Rank, Solutions } from "./StudyLinks";

export default function StudyMaterial() {
  const [show, setShow] = useState<string>("");

  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      <div
        onClick={() => {
          let val = "solution";
          if (show === "solution") val = "";
          setShow(val);
        }}
        className="flex flex-row gap-3 items-center p-1 cursor-pointer"
      >
        <p>NCERT Solutions</p>
        <AiOutlineCaretDown />
      </div>
      {show === "solution" && <Solutions />}
      <div
        onClick={() => {
          let val = "exemplar";
          if (show === "exemplar") val = "";
          setShow(val);
        }}
        className="flex flex-row gap-3 items-center p-1 cursor-pointer"
      >
        <p>NCERT Exemplar Solutions</p>
        <AiOutlineCaretDown />
      </div>
      {show === "exemplar" && <Exemplar />}
      <div
        onClick={() => {
          let val = "main";
          if (show === "main") val = "";
          setShow(val);
        }}
        className="flex flex-row gap-3 items-center p-1 cursor-pointer"
      >
        <p>JEE Main</p>
        <AiOutlineCaretDown />
      </div>
      {show === "main" && <Jee />}
      <div
        onClick={() => {
          let val = "rank";
          if (show === "rank") val = "";
          setShow(val);
        }}
        className="flex flex-row gap-3 items-center p-1 cursor-pointer"
      >
        <p>Rank Predictor</p>
        <AiOutlineCaretDown />
          </div>
          {show==='rank' && <Rank/>}
    </div>
  );
}
