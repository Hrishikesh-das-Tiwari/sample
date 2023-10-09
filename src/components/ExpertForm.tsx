function ExpertForm() {
  return (
    <div className="bg-blue-100 p-1 sm:w-[60%] mx-auto max-w-[700px] rounded">
      <h3 className="text-blue-800 text-lg text-center font-semibold my-2">
        Talk to our academic expert!
      </h3>
      <form className="px-1 flex flex-col gap-3 my-4">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-full">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="grid-state"
            >
              Grade
            </label>
            <div className="relative">
              <select
                className="bg-gray-50 text-sm block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>---</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="grid-state"
            >
              Target Exam
            </label>
            <div className="relative">
              <select
                className="bg-gray-50 text-sm block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>JEE</option>
                <option>NEET</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          +91
          <input
            type="text"
            id="first_name"
            placeholder="Phone number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-bold mb-2" htmlFor="grid-state">
            Preferred time slot for the call
          </label>
          <div className="relative">
            <select
              className="bg-gray-50 text-sm block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>---</option>
              <option>9 am</option>
              <option>10 am</option>
              <option>11 am</option>
              <option>12 pm</option>
              <option>1 pm</option>
              <option>2 pm</option>
              <option>3 pm</option>
              <option>4 pm</option>
              <option>5 pm</option>
              <option>6 pm</option>
              <option>7 pm</option>
              <option>8 pm</option>
              <option>9 pm</option>
              <option>10 pm</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full">
          <label className="block text-sm font-bold mb-2" htmlFor="grid-state">
            Language of Choice
          </label>
          <div className="relative">
            <select
              className="bg-gray-50 text-sm block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>---</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p className="">Please indicate your interest</p>
          <div className="flex flex-col gap-1 my-2">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Live Classes
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Recorded Classes
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Test Series
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Self Learning
              </label>
            </div>
          </div>
        </div>

        <div className="flex my-2">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="link-checkbox"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              privacy policy{" "}
            </a>
            .
          </label>
        </div>

        <button
          className="bg-blue-800 text-white w-[40%] mx-auto rounded px-2 py-1  inline-block"
          type="submit"
        >
          Get OTP
        </button>
      </form>
    </div>
  );
}

export default ExpertForm;
