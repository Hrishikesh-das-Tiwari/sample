export default function Video() {
  return (
    <div className="video sm:w-3/4 shrink-0 sm:pr-4 ">
      {/* <Image
      src="/videoplay.png"
      width={200}
      height={200}
      className="w-full"
      alt="videos"
    /> */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/e1eTLW_enew"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
      </div>

      <h1 className="sm:text-xl text-base leading-8 font-extrabold mt-3">
        Why cant the Government print more money
      </h1>
      <p className="text-[#767996] pl-6 sm:text-base text-sm">Dummy Subtopic</p>
    </div>
  );
}
