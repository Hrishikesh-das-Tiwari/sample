import Link from "next/link";

export function SecondaryJee() {
  return (
    <div className="absolute flex flex-col font-medium bg-white z-20 text-sm p-3 top-0 left-40 mx-auto w-max shadow-lg rounded-lg">
      <Link
        href="https://infinitylearn.com/jee-13"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 13
      </Link>
      <Link
        href="https://infinitylearn.com/jee-12"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 12
      </Link>
      <Link
        href="https://infinitylearn.com/jee-11"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 11
      </Link>
    </div>
  );
}

export function SecondaryNeet() {
  return (
    <div className="absolute flex flex-col font-medium bg-white z-20 text-sm p-3 top-8 left-40 mx-auto w-max shadow-lg rounded-lg">
      <Link
        href="https://infinitylearn.com/neet-13"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 13
      </Link>
      <Link
        href="https://infinitylearn.com/neet-12"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 12
      </Link>
      <Link
        href="https://infinitylearn.com/neet-11"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 11
      </Link>
    </div>
  );
}

export function SecondaryFoundation() {
  return (
    <div className="absolute flex flex-col font-medium bg-white z-20 text-sm p-3 top-20 left-40 mx-auto w-max shadow-lg rounded-lg">
      <Link
        href="https://infinitylearn.com/foundation/8"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 8
      </Link>
      <Link
        href="https://infinitylearn.com/foundation/9"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 9
      </Link>
      <Link
        href="https://infinitylearn.com/foundation/10"
        className="hover:bg-blue-100 p-1 pr-16"
      >
        Grade 10
      </Link>
    </div>
  );
}
