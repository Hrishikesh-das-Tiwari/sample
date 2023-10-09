import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBarBtn from "../components/search-bar/SearchBarBtn";
import ChapterNameHeader from "../components/ChapterNameHeader";
import Learn from "../components/chapter/Learn";
import Practice from "../components/chapter/Practice";

export default function Chapter() {
  return (
    <>
      <Navbar />

      <div className="md:w-[90%] ml-auto text-black ">
        <SearchBarBtn />
        <ChapterNameHeader />

        <div className="my-4">
          <div className="flex flex-row gap-6 md:text-base text-sm border-b-2 border-gray-300 mb-4">
            <button
              value="practice"
              className={`lg:basis-1/4 sm:py-3 sm:basis-1/3 basis-2/4 px-4 max-sm:py-4 bg-blue-100 border-b-4 border-blue-800`}
            >
              Practice
            </button>

            <button
              value="learn"
              className={`sm:basis-1/4 sm:py-3 basis-1/2 px-4 
                     bg-blue-100 border-b-4 border-blue-800
                }`}
            >
              Learn
            </button>
          </div>

          <Learn />

          <Practice />
        </div>
      </div>

      <Footer />
    </>
  );
}
