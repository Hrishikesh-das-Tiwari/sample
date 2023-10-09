import Image from "next/image";
import SingleType from "../options/SingleType";
import Tag from "../Tag";

export default function Picture() {
  const hard = "bg-red-100 text-red-500 small";
  const wrong = "bg-[#FF5C5C26]";
  const correct = "bg-[#4FB85A] bg-opacity-[.15]";

  return (
    <>
      <h1 className={`my-2 md:text-xl sm:text-lg text-base font-bold`}>
        Questions
      </h1>
      <p className={`font-medium base`}>
        An unbiased coin is tossed. If the outcome is a head then a pair of
        unbiased dice is rolled and the sum of the numbers obtained on them is
        noted. If the toss of the coin results in a tail then a card from a
        well-shuffled pack of nine cards numbered 1,2,3,..,9 is randomly picked
        and the number on the card is noted. The probability that the noted
        number is either 7 or 8 is?
      </p>
      <Tag problemTag="Hard" />

      <div className="flex flex-row gap-2 my-2">
        <div className="text-center">
          <Image src="/mcq-picture.png" width={200} height={200} alt="mcq" />
          <p>(a)</p>
        </div>
        <div className="text-center">
          <Image src="/mcq-picture.png" width={200} height={200} alt="mcq" />
          <p>(b)</p>
        </div>
        <div className="text-center">
          <Image src="/mcq-picture.png" width={200} height={200} alt="mcq" />
          <p>(c)</p>
        </div>
        <div className="text-center">
          <Image src="/mcq-picture.png" width={200} height={200} alt="mcq" />
          <p>(d)</p>
        </div>
      </div>

      <SingleType />
    </>
  );
}
