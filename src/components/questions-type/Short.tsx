import Image from "next/image";
import Solution from "../Solution";

export default function Short() {
  const hard = "bg-red-100 text-red-500 small";

  return (
    <>
      <h1 className={`my-2 md:text-xl sm:text-[18px] text-[16px] font-bold`}>
        Questions
      </h1>
      <p className={`font-semibold base`}>
        What is the role of health in human capital formation?
      </p>
      <div className={`my-2 inline-block py-1 px-6 rounded-[50px] ${hard}`}>
        Hard
      </div>

      <Solution
        explanation="Role of health in human capital formation are as follow:
        Only a healthy person can work efficiently and with full potential.
        A healthy person can work in a more effective manner.
        A healthy person can work in a productive way and in this way it can contribute better in the development of the economy of the country.
        The unhealthy person becomes a liability for the organization and country.
        Thus for the development of human capital and country the health is the most important "
      />
    </>
  );
}
