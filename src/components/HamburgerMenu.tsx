import Link from "next/link";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import Courses from "./sidebar-links/Courses";
import StudyMaterial from "./sidebar-links/StudyMaterial";

export default function HamburgerMenu({ setClose }: any) {
  const [show, setShow] = useState<number | undefined>(undefined);

  return (
    <div
      className={`absolute z-20 left-0 w-[300px] bg-blue-500 h-[100vh] overflow-wrap text-white pl-8 pt-4 transform transition-transform duration-300 ease-in-out 
       `}
    >
      <svg
        width="18px"
        height="18px"
        viewBox="0 -0.5 8 8"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        onClick={() => setClose()}
        className="ml-auto sm:text-xl text-lg mr-6 my-4 text-right cursor-pointer"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>close_mini [#1522]</title> <desc>Created with Sketch.</desc>{" "}
          <defs> </defs>{" "}
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-385.000000, -206.000000)"
              fill="#ffffff"
            >
              {" "}
              <g id="icons" transform="translate(56.000000, 160.000000)">
                {" "}
                <polygon
                  id="close_mini-[#1522]"
                  points="334.6 49.5 337 51.6 335.4 53 333 50.9 330.6 53 329 51.6 331.4 49.5 329 47.4 330.6 46 333 48.1 335.4 46 337 47.4"
                >
                  {" "}
                </polygon>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
      <div className="flex flex-col flex-wrap gap-4 max:w-[280px] overflow-wrap text-sm font-semibold pt-4">
        <div
          className="flex flex-row uppercase cursor-pointer"
          onClick={() => {
            let val: number | undefined = 1;
            if (show === 1) val = undefined;
            setShow(val);
          }}
        >
          study material
          <AiOutlineCaretDown className="mt-1 ml-3" />
        </div>
        {show && show === 1 && <StudyMaterial />}

        <Link href="/" className="uppercase">
          home
        </Link>

        <div
          className="flex flex-row uppercase cursor-pointer"
          onClick={() => {
            let val: number | undefined = 2;
            if (show === 2) val = undefined;
            setShow(val);
          }}
        >
          Courses
          <AiOutlineCaretDown className="mt-1 ml-3" />
        </div>
        {show && show === 2 && <Courses />}

        <Link href="https://schools.infinitylearn.com/" className="uppercase">
          schools
        </Link>

        <Link href="https://infinitylearn.com/score" className="uppercase">
          score
        </Link>

        <Link href="#">Sign In</Link>

        <Link
          href="#"
          className="bg-yellow-400 mr-8 p-1 text-center text-gray-900 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
