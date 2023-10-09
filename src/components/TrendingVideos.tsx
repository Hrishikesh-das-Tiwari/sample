import { TfiEye } from "react-icons/tfi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Checkout from "./modal/Checkout";

export default function TrendingVideos() {
  const router = useRouter();
  const [view, setView] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const viewAll = "flex-wrap";
  const noView = "flex-nowrap overflow-x-scroll";

  const handleClose = () => setModal(false);

  return (
    <div className="">
      <div className="flex sm:flex-row flex-col justify-between mt-[7vh] mb-8">
        <h1 className="sm:text-xl font-bold">Trending Videos of this week</h1>
        {!view && (
          <button className="text-blue-700" onClick={() => setView(true)}>
            View all
          </button>
        )}
        {view && (
          <button className="text-blue-700" onClick={() => setView(false)}>
            View less
          </button>
        )}
      </div>

      <div className={`flex flex-row gap-2 my-6 ${view ? viewAll : noView}`}>
        <div
          onClick={() => router.push("/playlist")}
          className="bg-gray-100 cursor-pointer bg-opacity-25 p-1 rounded"
        >
          <div className="flex flex-col gap-1 w-[260px]">
            <div className="relative inline-block mr-auto">
              <Image
                src="/trending.png"
                width={200}
                height={200}
                alt="trending-videos"
                className="rounded-t-lg min-w-[260px]"
              />
              <div className="badge absolute bottom-0 right-1 bg-black m-1 text-gray-200 py-1 px-3 text-[0.55rem] font-semibold rounded-full">
                10:53
              </div>
            </div>
            <div className="flex flex-row items-center sm:text-xs text-sm gap-2 text-gray-500">
              <TfiEye />
              <p>889 views</p>
            </div>

            <p className="w-full text-base">
              Why cant the government print more money
            </p>
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-gray-100 cursor-pointer bg-opacity-25 p-1 rounded"
        >
          <div className="flex flex-col gap-1 w-[260px]">
            <div className="relative inline-block mr-auto">
              <Image
                src="/trending.png"
                width={200}
                height={200}
                alt="trending-videos"
                className="rounded-t-lg min-w-[260px]"
              />
              <div className="badge absolute bottom-0 right-1 bg-black m-1 text-gray-200 py-1 px-3 text-[0.55rem] font-semibold rounded-full">
                10:53
              </div>
            </div>
            <div className="flex flex-row items-center sm:text-xs text-sm gap-2 text-gray-500">
              <TfiEye />
              <p>889 views</p>
            </div>

            <p className="w-full text-base">
              Why cant the government print more money
            </p>
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-gray-100 cursor-pointer bg-opacity-25 p-1 rounded"
        >
          <div className="flex flex-col gap-1 w-[260px]">
            <div className="relative inline-block mr-auto">
              <Image
                src="/trending.png"
                width={200}
                height={200}
                alt="trending-videos"
                className="rounded-t-lg min-w-[260px]"
              />
              <div className="badge absolute bottom-0 right-1 bg-black m-1 text-gray-200 py-1 px-3 text-[0.55rem] font-semibold rounded-full">
                10:53
              </div>
            </div>
            <div className="flex flex-row items-center sm:text-xs text-sm gap-2 text-gray-500">
              <TfiEye />
              <p>889 views</p>
            </div>

            <p className="w-full text-base">
              Why cant the government print more money
            </p>
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-gray-100 cursor-pointer bg-opacity-25 p-1 rounded"
        >
          <div className="flex flex-col gap-1 w-[260px]">
            <div className="relative inline-block mr-auto">
              <Image
                src="/trending.png"
                width={200}
                height={200}
                alt="trending-videos"
                className="rounded-t-lg min-w-[260px]"
              />
              <div className="badge absolute bottom-0 right-1 bg-black m-1 text-gray-200 py-1 px-3 text-[0.55rem] font-semibold rounded-full">
                10:53
              </div>
            </div>
            <div className="flex flex-row items-center sm:text-xs text-sm gap-2 text-gray-500">
              <TfiEye />
              <p>889 views</p>
            </div>

            <p className="w-full text-base">
              Why cant the government print more money
            </p>
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-gray-100 cursor-pointer bg-opacity-25 p-1 rounded"
        >
          <div className="flex flex-col gap-1 w-[260px]">
            <div className="relative inline-block mr-auto">
              <Image
                src="/trending.png"
                width={200}
                height={200}
                alt="trending-videos"
                className="rounded-t-lg min-w-[260px]"
              />
              <div className="badge absolute bottom-0 right-1 bg-black m-1 text-gray-200 py-1 px-3 text-[0.55rem] font-semibold rounded-full">
                10:53
              </div>
            </div>
            <div className="flex flex-row items-center sm:text-xs text-sm gap-2 text-gray-500">
              <TfiEye />
              <p>889 views</p>
            </div>

            <p className="w-full text-base">
              Why cant the government print more money
            </p>
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-gray-100 cursor-pointer bg-opacity-25 p-1 rounded"
        >
          <div className="flex flex-col gap-1 w-[260px]">
            <div className="relative inline-block mr-auto">
              <Image
                src="/trending.png"
                width={200}
                height={200}
                alt="trending-videos"
                className="rounded-t-lg min-w-[260px]"
              />
              <div className="badge absolute bottom-0 right-1 bg-black m-1 text-gray-200 py-1 px-3 text-[0.55rem] font-semibold rounded-full">
                10:53
              </div>
            </div>
            <div className="flex flex-row items-center sm:text-xs text-sm gap-2 text-gray-500">
              <TfiEye />
              <p>889 views</p>
            </div>

            <p className="w-full text-base">
              Why cant the government print more money
            </p>
          </div>
        </div>
      </div>
      {modal && (
        <Checkout
          handleClose={handleClose}
          open={modal}
          title="Watch all the Trending videos"
        />
      )}
    </div>
  );
}
