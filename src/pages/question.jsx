import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LinkSkeleton from "../components/linkSkeletion";
import SimilarQuestions from "../components/SimilarQuestions";
import Questions from "../components/Questions";
import BasicBreadcrumbs, { url } from "../components/Breadcrumbs";
import Svg from "../components/practice-more-questions/Svg";
import PopularChapters from "../components/PopularChapters";

export default function Home() {
  return (
    <>
      <Navbar />
      <LinkSkeleton>
        <div className="md:w-[90%] md:ml-[9%]">
          <BasicBreadcrumbs url={url} />
          <h1 className={`text-blue-800 my-4 h1`}>{"chapter?.chaptername"}</h1>
          <Questions />

          <hr className="mt-4 mb-8 border-[1.5px] border-gray-300" />

          <>
            <SimilarQuestions />
            <hr className="my-4" />
            <h3 className={`sm:text-xl text-base text-bold my-4`}>
              Practice More Questions
            </h3>
            <Svg />
            <hr className="my-4" />

            <PopularChapters />
          </>
        </div>
      </LinkSkeleton>

      <Footer />
    </>
  );
}
