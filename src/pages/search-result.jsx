import { RxCross1 as CloseIcon } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SearchBar from "@/components/search-bar/SearchBar";
import BasicBreadcrumbs from "@/components/Breadcrumbs";

export default function Search() {
  return (
    <>
      <Navbar />

      <div className="md:w-[70%] m-auto">
        <BasicBreadcrumbs />
        <SearchBar />
        <h1 className="md:text-[22px] sm:text-[20px] text-[18px]">
          Showing results for
        </h1>
        <br />

        <div className="flex flex-col sm:w-[90%] divide-y-2">
          <div className="flex flex-row gap-2 text-sm flex-wrap text-white mb-4">
            <button className={`border border-[#5DA444] p-2 w-[8rem] rounded`}>
              Easy Qs
            </button>
            <button className={`border border-[#B9A600] rounded p-2 w-[8rem]`}>
              Medium Qs
            </button>
            <button
              className={`border border-[#FF9393] text-[#FF9393] p-2 w-[8rem] rounded`}
            >
              Hard Qs
            </button>
          </div>

          <div
            className={`flex flex-row gap-4 font-bold mb-4 rounded-full shadow-xl py-1 px-3 items-center w-fit text-sm`}
          >
            <p>{"difficulty"}</p>
            <CloseIcon className="text-xs cursor-pointer" />
          </div>

          <div className="flex flex-row gap-4 pt-4">
            <p className="sm:text-lg text-base font-bold text-blue-800">
              Q&nbsp;1
            </p>
            <div className="w-full">
              <div className="font-semibold base max-sm:text-sm sm:w-[90%]">
                <p></p>
              </div>
              <div className="flex flex-row my-4 w-full">
                <div
                  className={`mt-1 inline-block small py-1 px-6 rounded-[50px] `}
                >
                  {"question.difficultyLevel"}
                </div>
                <button className="flex flex-row ml-auto whitespace-nowrap text-blue-500 items-center">
                  <p className="sm:text-lg text-sm">View solution</p>
                  <FaAngleRight className=" font-bold sm:text-xl text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
