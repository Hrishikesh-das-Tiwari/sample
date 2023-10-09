import { AiOutlineSearch } from "react-icons/ai";

import React, { useEffect, useRef, useState } from "react";
import { search } from "@/api/questions";
import { useRouter } from "next/router";

function SearchBar() {
  const inputRef: any = useRef();
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const value = inputRef?.current?.value;
    if (value && value !== null && value !== "")
      router.push({
        pathname: "/search-result",
        query: { value },
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 md:w-[70%] md:ml-auto md:mr-2"
    >
      <div className="relative mb-4 flex w-full flex-wrap items-stretch border border-solid">
        <input
          type="search"
          ref={inputRef}
          className="relative block w-[1px] min-w-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
          placeholder="Search for questions & chapters"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <span
          onClick={handleSubmit}
          className="input-group-text cursor-pointer flex items-center whitespace-nowrap rouded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
          id="basic-addon2"
        >
          <AiOutlineSearch />
        </span>
      </div>
    </form>
  );
}

export default SearchBar;
