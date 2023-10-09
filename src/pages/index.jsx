/* eslint-disable no-unused-vars */
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LinkSkeleton from "../components/linkSkeletion";
import SearchBar from "../components/search-bar/SearchBar";

export default function Home() {
  const clicked = "bg-[#5DA444] font-bold text-white";

  return (
    <>
      <Navbar />

      <h1 className="font-semibold ml-auto text-center mt-6 sm:text-xl text-base">
        Get Verified solutions to all your doubts!
      </h1>
      <LinkSkeleton>
        <div className="md:w-[90%] ml-auto text-black ">
          <SearchBar />
          <div className="bg-[#ECF4FF] p-4 rounded mt-[10vh] shadow">
            <div className="w-[90%] mx-auto">
              <h3 className={`font-medium text-center sm:text-xl text-base`}>
                Select your grade and target exam to begin learning
              </h3>
              <div className="my-8 font-medium sm:text-base text-sm">
                <p className="text-[#004BB6] sm:text-xl text-base">
                  Select Grade
                </p>

                <form className="flex w-full flex-row text-center flex-wrap gap-6 my-3 items-center">
                  <div>
                    <input type="radio" name="option" className="peer hidden" />
                    <label
                      htmlFor={"grade"}
                      className="h-15 bg-white rounded w-32 p-2 block cursor-pointer select-none peer-checked:bg-[#5DA444] peer-checked:font-bold peer-checked:text-white"
                    >
                      Grade
                    </label>
                  </div>
                </form>
              </div>

              <div className="my-8 font-medium sm:text-base text-sm">
                <p className="text-[#004BB6] sm:text-xl text-base">
                  Select Target Exam
                </p>
                <div className="flex flex-row flex-wrap gap-6 my-3">
                  <button className={`h-15 rounded sm:w-48 w-32 p-2 bg-white`}>
                    {"exam?.examname"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LinkSkeleton>

      <Footer />
    </>
  );
}
