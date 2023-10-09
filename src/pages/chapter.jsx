import { FaAngleRight } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBarBtn from "../components/search-bar/SearchBarBtn";

export default function Chapter() {
  return (
    <>
      <Navbar />

      <div className="md:w-[90%] ml-auto text-black ">
        <SearchBarBtn />

        <h1 className={`text-blue-800 mt-4 font-semibold h1`}>
          subject?.subjectname
        </h1>

        <p className="sm:text-sm text-[0.5rem] text-gray-500">Chapters</p>

        <div className="flex flex-col my-6">
          <div className="flex flex-row p-2 odd:bg-gray-100 items-center rounded hover:shadow-xl hover:z-10 group">
            <div className="sm:p-2 p-1 sm:text-xl text-base text-gray-400"></div>

            <div className="flex flex-col flex-1 sm:pl-4 pl-2 gap-2">
              <p className="sm:text-base text-xs font-semibold"></p>
              <p className="sm:text-xs text-[0.5rem] text-gray-500 flex flex-row gap-2">
                <span className="questions">44 Questions</span>
              </p>
            </div>

            <FaAngleRight className="group-hover:visible mr-2 invisible ml-auto text-base items-start" />
          </div>
        </div>
      </div>
      {/* </LinkSkeleton> */}

      <Footer />
    </>
  );
}
