import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Foundation, Jee, Neet } from "./CourseSubject";

export default function Courses() {
  const [show, setShow] = useState<string>("");

  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      <div
        className="flex flex-row gap-3 items-center p-1 cursor-pointer"
        onClick={() => {
          let val = "jee";
          if (show === "jee") val = "";
          setShow(val);
        }}
      >
        <p>JEE</p>
        <AiOutlineCaretDown />
      </div>

      {show === "jee" && <Jee />}

      <div className="flex flex-row gap-3 items-center p-1 cursor-pointer">
        <p>NEET</p>
        <AiOutlineCaretDown />
      </div>
      {show === "neet" && <Neet />}

      <p className="p-1 pr-16">CUET</p>

      <div
        onClick={() => {
          let val = "foundation";
          if (show === "foundation") val = "";
          setShow(val);
        }}
        className="flex flex-row gap-3 items-center p-1 cursor-pointer"
      >
        <p>FOUNDATION</p>
        <AiOutlineCaretDown />
      </div>
      {show === "foundation" && <Foundation />}
    </div>
  );
}
