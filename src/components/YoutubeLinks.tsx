import { h2, h3 } from "@/utils/textSize";
import Image from "next/image";

function YoutubeLinks() {
  return (
    <div className="my-8">
      <h1 className={h2}>Watch Related Youtube Content</h1>
      <div className="youtube my-6 flex flex-row gap-4 flex-wrap">
        <div className="sm:basis-1/4 basis-2/4 min-w-[150px]">
          <Image
            src="/video.png"
            className="w-full"
            width="100"
            height="100"
            alt="videos"
          />
          <p className="lg:text-sm text-xs">Euclid’s Division lemma</p>
        </div>
        <div className="sm:basis-1/4 basis-2/4 min-w-[150px]">
          <Image
            src="/video.png"
            className="w-full"
            width="100"
            height="100"
            alt="videos"
          />
          <p className="lg:text-sm text-xs">Euclid’s Division lemma</p>
        </div>
      </div>
    </div>
  );
}

export default YoutubeLinks;
