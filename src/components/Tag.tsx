export default function Tag(props: any) {
  const { problemTag } = props;
  const hard = "bg-red-100 text-red-500 small";
  const medium = "bg-[#FFFDEC] text-[#B9A600] small";
  const easy = "bg-[#F1FFEC] text-[#5DA444] small";

  return (
    <div
      className={`my-2 inline-block font-semibold py-1 px-6 rounded-[50px] ${
        problemTag === "Hard" ? hard : problemTag === "Medium" ? medium : easy
      }`}
    >
      {problemTag}
    </div>
  );
}
