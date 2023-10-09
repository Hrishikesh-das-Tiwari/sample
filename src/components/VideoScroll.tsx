import React from "react";

import { FaLock, FaAngleRight } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import Image from "next/image";

function VideoScroll() {
  return (
    <>
      <h1 className="font-bold sm:text-2xl my-3">Videos</h1>

      {/* <Swipe /> */}

      <div className="flex flex-row gap-2 flex-wrap">
        <div className="sm:basis-1/4 min-w-[150px]">
          <div className="relative items-center">
            <BsPlayCircle className="absolute text-white text-4xl left-0 right-0 m-auto top-0 bottom-0" />
            <Image
              src="/video.png"
              className="w-full"
              width="100"
              height="100"
              alt="videos"
            />
          </div>
          <p className="lg:text-sm text-xs">Euclid’s Division lemma</p>
        </div>

        <div className="sm:basis-1/4 min-w-[150px]">
          <div className="relative items-center">
            <BsPlayCircle className="absolute text-white text-4xl left-0 right-0 m-auto top-0 bottom-0" />
            <Image
              src="/video.png"
              className="w-full"
              width="100"
              height="100"
              alt="videos"
            />
          </div>
          <p className="lg:text-sm text-xs">Euclid’s Division lemma</p>
        </div>
      </div>
    </>
  );
}

export default VideoScroll;
