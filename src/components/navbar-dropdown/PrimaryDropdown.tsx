import { useState } from "react";
import { AiOutlineCaretRight as Right } from "react-icons/ai";
import {
  SecondaryFour,
  SecondaryOne,
  SecondaryThree,
  SecondaryTwo,
} from "./Secondary";
import {
  SecondaryFoundation,
  SecondaryJee,
  SecondaryNeet,
} from "./SecondaryCourse";
import Link from "next/link";

export function Study() {
  const [show, setShow] = useState<any>();

  return (
    <div className="absolute flex flex-col font-medium bg-white z-20 text-sm p-3 top-9 left-[-30px] mx-auto w-max shadow-lg rounded-lg">
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(1)}
      >
        <p>NCERT Solutions</p>
        <Right />
      </div>
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(2)}
      >
        <p>NCERT Exemplar Solutions</p>
        <Right />
      </div>
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(3)}
      >
        <p>JEE Main</p>
        <Right />
      </div>
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(4)}
      >
        <p>Rank Predictor</p>
        <Right />
      </div>
      {show && show === 1 ? (
        <SecondaryOne />
      ) : show === 2 ? (
        <SecondaryTwo />
      ) : show === 3 ? (
        <SecondaryThree />
      ) : show === 4 ? (
        <SecondaryFour />
      ) : (
        ""
      )}
    </div>
  );
}

export function Courses() {
  const [show, setShow] = useState<any>();

  return (
    <div
      onMouseLeave={() => setShow("")}
      className="absolute flex flex-col font-medium bg-white z-20 text-sm p-3 top-9 left-[-30px] mx-auto w-max shadow-lg rounded-lg"
    >
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(1)}
      >
        <p>JEE</p>
        <Right />
      </div>
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(2)}
      >
        <p>NEET</p>
        <Right />
      </div>
      <Link
        href="https://infinitylearn.com/cuet"
        onMouseEnter={() => setShow("")}
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
      >
        <p>CUET</p>
      </Link>
      <div
        className="flex flex-row justify-between gap-3 items-center hover:bg-blue-100 p-1"
        onMouseEnter={() => setShow(3)}
      >
        <p>FOUNDATION</p>
        <Right />
      </div>
      {show && show === 1 ? (
        <SecondaryJee />
      ) : show === 2 ? (
        <SecondaryNeet />
      ) : show === 3 ? (
        <SecondaryFoundation />
      ) : (
        ""
      )}
    </div>
  );
}
