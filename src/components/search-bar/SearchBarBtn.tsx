import { AiOutlineSearch } from "react-icons/ai";

function SearchBarBtn() {
  return (
    <div className="my-4 sm:w-[80%] sm:mr-auto md:mr-2">
      <div className="rounded-full relative mb-4 flex w-full flex-wrap items-stretch border shadow-lg border-solid">
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center p font-normal text-gray-400"
          id="basic-addon2"
        >
          <AiOutlineSearch />
        </span>
        <input
          type="search"
          className="relative block w-[1px] overflow-ellipsis min-w-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary "
          placeholder="Search for questions & chapters"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <button className="bg-blue-500 mr-2 rounded-full py-1 md:px-6 sm:px-4 px-2 my-1 text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBarBtn;
