/* eslint-disable no-unused-vars */
import Modal from "@mui/material/Modal";

export default function UpdateGrade() {
  const clicked = "bg-[#5DA444] font-bold text-white";

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-[#ECF4FF] md:w-[70%] absolute left-0 right-0 top-0 bottom-0 m-auto p-4 rounded h-fit shadow">
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
                <button className={`h-15 rounded sm:w-48 w-32 p-2 `}>
                  examname
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}