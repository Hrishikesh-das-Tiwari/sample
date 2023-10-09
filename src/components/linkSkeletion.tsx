import Image from "next/image";
import ExpertForm from "./ExpertForm";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LinkSkeleton(props: any) {
  const showForm = props?.showForm ? props.showForm : false;

  return (
    <div className="flex md:flex-row flex-col md:mx-8 mx-4 justify-between">
      <div className="md:w-3/4">{props.children}</div>

      <div className="md:w-1/4 flex flex-col gap-4 md:m-4 md:min-w-[20%] md:max-w-[20%] max-md:mt-8">
        <Link href="https://student.infinitylearn.com">
          <Image
            src="/iqTest.png"
            width="500"
            height="500"
            alt="iq test"
            className="w-[100%] cursor-pointer"
          />
        </Link>
        <Link href="https://student.infinitylearn.com">
          <Image
            src="/telegramLink.png"
            width="500"
            height="500"
            alt="iq test"
            className="max-md:w-[100%] cursor-pointer"
          />
        </Link>
        <Link href="https://student.infinitylearn.com">
          <Image
            src="/eqTest.png"
            width="500"
            height="500"
            alt="iq test"
            className="max-md:w-[100%] cursor-pointer"
          />
        </Link>

        {showForm && <ExpertForm />}
      </div>
    </div>
  );
}
