import Solution from "../Solution";
import { useState } from "react";

export default function DropDown() {
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const hard = "bg-red-100 text-red-500 small";

  const handleChangeValue1 = (event: any) => {
    setvalue1(event.target.value);
  };
  const handleChangeValue2 = (event: any) => {
    setvalue2(event.target.value);
  };

  return (
    <>
      <h1 className={`my-2 md:text-xl sm:text-[18px] text-[16px] font-bold`}>
        Questions
      </h1>
      <p className={`font-bold base`}>Matrix match type</p>
      <div className={`my-2 inline-block py-1 px-6 rounded-[50px] ${hard}`}>
        Hard
      </div>

      <div className="my-2 items-center">
        When you
        <div className="text-black inline-block mx-4 sm:w-48 w-36 h-10 items-center my-1 relative sm:text-base text-sm">
          <div className="flex flex-wrap relative w-full h-full">
            <select
              id="currency"
              name="currency"
              onChange={handleChangeValue1}
              className="h-full px-2 z-10 w-full border shadow rounded-full bg-transparent text-black text-center overflow-ellipsis"
            >
              <option></option>
              <option>Science is very hard, if you do not practice</option>
              <option>+95</option>
            </select>

            <input
              type="text"
              name="price"
              id="price"
              className="text-center -z-10 absolute w-full bg-transparent left-0 right-0 top-0 bottom-0 m-auto rounded-md border-0 text-gray-900 placeholder:text-gray-400 sm:leading-6"
              placeholder={value1 === "" ? "Topic" : ""}
            />
          </div>
        </div>
        the temperature, the density of an object{" "}
        <div className="text-black inline-block mx-4 sm:w-48 w-36 h-10 items-center my-1 relative sm:text-base text-sm">
          <div className="flex flex-wrap relative w-full h-full">
            <select
              id="currency"
              name="currency"
              onChange={handleChangeValue2}
              className="h-full z-10 w-full border shadow rounded-full bg-transparent text-black text-center px-2 overflow-ellipsis"
            >
              <option></option>
              <option>Science is very hard, if you do not practice</option>
              <option>+95</option>
            </select>

            <input
              type="text"
              name="price"
              id="price"
              className="text-center -z-10 absolute w-full bg-transparent left-0 right-0 top-0 bottom-0 m-auto rounded-md border-0 text-gray-900 placeholder:text-gray-400 sm:leading-6"
              placeholder={value2 === "" ? "Topic" : ""}
            />
          </div>
        </div>
        {/* <div className="text-black inline-block mx-4">
          <FormControl className="w-32 ">
            <InputLabel id="demo-simple-select-label">Topic</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Topic"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div> */}
      </div>

      <Solution
        option="increases"
        explanation="Only a healthy person can work efficiently and with full potential.
            A healthy person can work in a more effective manner. A healthy
            person can work in a productive way and in this way it can
            contribute better in the development of the economy of the country.
            The unhealthy person becomes a liability for the organization and
            country. Thus for the development of human capital and country the
            health is the most important component."
      />
    </>
  );
}
