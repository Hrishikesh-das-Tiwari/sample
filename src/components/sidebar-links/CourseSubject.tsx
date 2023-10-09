import Link from "next/link";
import React from "react";

export function Jee() {
  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      <Link href='https://infinitylearn.com/jee-13' className="p-1">Grade 13</Link>
      <Link href='https://infinitylearn.com/jee-12' className="p-1">Grade 12</Link>
      <Link href='https://infinitylearn.com/jee-11' className="p-1">Grade 11</Link>
    </div>
  );
}

export function Neet() {
  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      <Link href='https://infinitylearn.com/neet-13' className="p-1">Grade 13</Link>
      <Link href='https://infinitylearn.com/neet-12' className="p-1">Grade 12</Link>
      <Link href='https://infinitylearn.com/neet-11' className="p-1">Grade 11</Link>
    </div>
  );
}

export function Foundation() {
  return (
    <div className="flex flex-col gap-2 text-xs font-medium pl-1">
      <Link href='https://infinitylearn.com/foundation/8' className="p-1">Grade 8</Link>
      <Link href='https://infinitylearn.com/foundation/9' className="p-1">Grade 9</Link>
      <Link href='https://infinitylearn.com/foundation/10' className="p-1">Grade 10</Link>
    </div>
  );
}
