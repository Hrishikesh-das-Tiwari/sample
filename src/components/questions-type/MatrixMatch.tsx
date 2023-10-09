import Solution from "../Solution";

export default function MatrixMatch() {
  const hard = "bg-red-100 text-red-500 small";

  return (
    <>
      <h1 className={`my-2 md:text-xl sm:text-[18px] text-[16px] font-bold`}>
        Questions
      </h1>
      <p className={`font-semibold base`}>
        What is the role of health in human capital formation?
      </p>
      <div className={`my-2 inline-block py-1 px-6 rounded-[50px] ${hard}`}>
        Hard
      </div>

      <div className=" flex gap-2 flex-col justify-between">
        <table className="matrix-match my-4 md:basis-1/2 sm:text-base  text-sm max-w-[600px] border-none">
          <thead>
            <tr>
              <th className="w-1/2 sm:text-lg text-base text-gray-500">
                Column I
              </th>
              <th className="w-1/2 sm:text-lg text-base text-gray-500 right">
                Column II
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">
                <span>(A) </span>Acceleration due to gravity on this planet’s
                surface
              </td>
              <td className="right">
                <span>(P) </span>Half
              </td>
            </tr>
            <tr>
              <td className="left">
                <span>(B) </span>Gravitational potential on the surface
              </td>

              <td className="right">
                <span>(Q) </span>Same
              </td>
            </tr>
            <tr>
              <td className="left">
                <span>(C) </span>Gravitational potential at centre
              </td>
              <td className="right">
                <span>(R) </span>Two Times
              </td>
            </tr>
            <tr>
              <td className="left">
                <span>(D) </span>Gravitational potential outside the surface
              </td>
              <td className="right">
                <span>(S) </span>Two Times
              </td>
            </tr>
          </tbody>
        </table>

        <table className="matrix-answer md:basis-1/2 text-center max-w-[600px] my-4">
          <thead>
            <tr>
              <th></th>
              <th>P</th>
              <th>Q</th>
              <th>R</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className=" relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className=" relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className=" relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td>D</td>
              <td className="relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td className="invisible relative ">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
                  <svg
                    width="21"
                    height="14"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto absolute top-0 bottom-0 left-0 right-0"
                  >
                    <path
                      d="M1.30002 6.03226L8.27961 13L20.3 1"
                      stroke="#263643"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Solution
        explanation="Role of health in human capital formation are as follow:
        Only a healthy person can work efficiently and with full potential.
        A healthy person can work in a more effective manner.
        A healthy person can work in a productive way and in this way it can contribute better in the development of the economy of the country.
        The unhealthy person becomes a liability for the organization and country.
        Thus for the development of human capital and country the health is the most important "
      />
    </>
  );
}
