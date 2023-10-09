import { BsTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Courses, Study } from "./navbar-dropdown/PrimaryDropdown";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState<string>("");
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <nav className="sm:bg-[#4373CB] border-gray-200 text-sm font-medium relative flex flex-row justify-between overflow-visible">
        <div
          onClick={() => setSidebarOpen(true)}
          className="absolute xl:hidden top-0 bottom-0 m-auto left-2 items-center h-fit cursor-pointer"
        >
          <HamburgerIcon />
        </div>
        {isSidebarOpen === true && (
          <HamburgerMenu isOpen={isSidebarOpen} setClose={handleCloseSidebar} />
        )}
        <Image
          src="/home-logo.webp"
          width="370"
          height="300"
          sizes="(max-width:30%)"
          alt="brand-logo"
          className="max-[400px]:w-[220px] max-md:w-[300px] max-lg:w-[320px] "
        />
        <ul className="flex max-xl:hidden flex-row xl:gap-8 gap-4 ml-auto items-center pr-2 xl:pr-16">
          <li
            className="flex flex-col px-1 py-2 relative"
            onMouseEnter={() => setShowDropdown("study")}
            onMouseLeave={() => setShowDropdown("")}
          >
            <div className="flex flex-row">
              <Link
                href="#"
                className="block uppercase text-white rounded"
                aria-current="page"
              >
                study material
              </Link>
              <AiOutlineCaretDown className="mt-1 ml-1 text-white" />
            </div>
            {showDropdown === "study" && <Study />}
          </li>
          <li>
            <Link
              href="/"
              className="block uppercase text-white px-1 py-2 text-gray-900 rounded"
            >
              home
            </Link>
          </li>
          <li
            className="flex flex-row px-1 py-2 relative"
            onMouseEnter={() => setShowDropdown("course")}
            onMouseLeave={() => setShowDropdown("")}
          >
            <Link
              href="#"
              className="block uppercase text-white rounded"
              aria-current="page"
            >
              courses
            </Link>
            <AiOutlineCaretDown className="mt-1 ml-1 text-white" />
            {showDropdown === "course" && <Courses />}
          </li>
          <li>
            <Link
              href="https://schools.infinitylearn.com/"
              className="block uppercase text-white px-1 py-2 text-gray-900 rounded"
            >
              schools
            </Link>
          </li>
          <li>
            <Link
              href="https://infinitylearn.com/score"
              className="block uppercase text-white px-1 py-2 text-gray-900 rounded"
            >
              scores
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block text-white px-1 py-2 text-gray-900 rounded"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-yellow-400 block text-white px-2 py-2 text-gray-900 rounded"
            >
              Sign Up
            </Link>
          </li>
          <li className="my-auto">
            <Link
              href="tel:7996668865"
              className="bg-gray-200 block text-white px-2 py-2 text-gray-900 rounded-full text-xs"
            >
              <BsTelephoneFill />
            </Link>
          </li>
        </ul>
        <div className="xl:hidden text-xs flex flex-row ml-auto items-center gap-2 pr-2">
          <Link
            href="#"
            className="bg-yellow-400 h-fit text-white sm:p-2 p-1 text-gray-900 rounded"
          >
            Sign Up
          </Link>
          <Link
            href="tel:7996668865"
            className="bg-gray-200 h-fit text-white sm:p-2 p-1 text-gray-900 rounded-full"
          >
            <BsTelephoneFill />
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
