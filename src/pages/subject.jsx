import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LinkSkeleton from "@/components/linkSkeletion";
import { h2 } from "@/utils/textSize";
import SearchBar from "@/components/search-bar/SearchBar";
import TrendingVideos from "@/components/TrendingVideos";
import CheckSelection from "@/utils/CheckSelection";
import BasicBreadcrumbs, { url } from "@/components/Breadcrumbs";
import UpdateGrade from "@/components/modal/UpdateGrade";

export default function Home() {
  return (
    <>
      <CheckSelection>
        <Navbar />

        <h1 className={`font-semibold ml-auto text-center mt-6 ${h2}`}>
          Get Verified solutions to all your doubts!
        </h1>
        <LinkSkeleton>
          <div className="md:w-[90%] ml-auto text-black">
            <SearchBar />
            <BasicBreadcrumbs url={url} />
            <div className="flex sm:flex-row flex-col justify-between mt-[7vh]">
              <h1 className="sm:text-xl text-lg font-bold">
                Browse by Subjects for Grade gradeId
              </h1>
              <h4 className="text-blue-700 cursor-pointer">Update Grade</h4>
              <UpdateGrade />
            </div>

            <div className="md:ml-16 cursor-pointer sm:ml-8 mx-auto ml-4 flex flex-row flex-wrap md:gap-10 sm:gap-6 gap-4 justify-start relative top-6 mb-12">
              <div className="flex hover:shadow-lg rounded-lg w-32 flex-col text-center gap-1 font-medium">
                <div className="w-fit mx-auto">subjectLogo</div>
                <p className="mx-auto">subject.subjectname</p>
              </div>
            </div>

            <TrendingVideos />
          </div>
        </LinkSkeleton>

        <Footer />
      </CheckSelection>
    </>
  );
}
