import Image from "next/image";
import Tag from "../Tag";

export default function SinglePicture() {
  const hard = "bg-red-100 text-red-500 small";

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
      <Tag problemTag="Easy" />

      <Image
        src="/mcq-single-pic.png"
        width={200}
        height={200}
        alt="mcq"
        className="w-full"
      />
    </>
  );
}
