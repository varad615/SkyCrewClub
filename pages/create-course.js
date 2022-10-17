import Image from "next/image";
import React from "react";
import CreateCourseLayout from "../components/CourseEditor/CreateCourseLayout";
import Upload from "../public/Pictures/Upload.png";

const create = () => {
  const styles = {
    container: "flex w-full  flex-row justify-between gap-8 xl:flex-grow",
    left: "flex-grow space-y-8",
    right:
      "flex w-full flex-shrink-0 flex-col gap-4 md:flex-row md:gap-8 xl:max-w-sm xl:flex-col",
    label: "block text-sm font-medium text-gray-700",
    input:
      "block border w-full rounded-md py-3 pl-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
    grid: "grid grid-cols-3 gap-6",
    subTitle: "col-span-3 md:col-span-2",
    price: "col-span-3 md:col-span-1",
    saveBut:
      "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-500",
  };

  return (
    <CreateCourseLayout>
      <div className={styles.container}>
        {/* Left part */}
        <div className={styles.left}>
          {/* Course Title */}
          <div>
            <label htmlFor="title" className={styles.label}>
              {" "}
              Course Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name=""
                id=""
                className={styles.input}
                required
                placeholder="Eg. Fundamentals of DBMS"
              />
            </div>
          </div>
          {/* Course Subtitle */}
          <div className={styles.grid}>
            <div className={styles.subTitle}>
              <label htmlFor="title" className={styles.label}>
                {" "}
                Course Subtitle
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name=""
                  id=""
                  className={styles.input}
                  required
                  placeholder="Eg. Fundamentals of DBMS"
                />
              </div>
            </div>
            {/* Course Price */}
            <div className={styles.price}>
              <label htmlFor="title" className={styles.label}>
                {" "}
                Course Price
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name=""
                  id=""
                  className={styles.input}
                  required
                  placeholder="Eg. Rs 2000"
                />
              </div>
            </div>
          </div>
          {/* Course description */}
          <div>
            <label htmlFor="title" className={styles.label}>
              {" "}
              Course Description
            </label>
            <div className="mt-1">
              <input
                type="text"
                name=""
                id=""
                className={styles.input}
                required
                placeholder="Eg. Fundamentals of DBMS"
              />
            </div>
          </div>
          {/* Category */}
          <div>
            <label htmlFor="title" className={styles.label}>
              {" "}
              Category
            </label>
            <div className="mt-1">
              <input
                type="text"
                name=""
                id=""
                className={styles.input}
                required
                placeholder="Eg. Fundamentals of DBMS"
              />
            </div>
          </div>
        </div>
        {/* Right Part */}
        <div className={styles.right}>
          <div className="md:grow xl:grow-0">
            <div>
              <label
                htmlFor="course image"
                className="mb-1 block text-sm font-bold"
              >
                Course Image
              </label>
              <div>
                <div className="cursor-pointer overflow-hidden rounded-t-md border-2 border-gray-300 bg-white/50 border-solid ">
                  <div className="bg-black h-[320px] w-full text-white flex justify-center items-center">
                    upload Image
                  </div>
                </div>
                <div className="cursor-default overflow-hidden rounded-b-md border border-t-0 border-gray-300 bg-white p-4">
                  <ul className="list-inside list-disc space-y-1 text-xs !leading-normal">
                    <li>Aspect Ratio - 16:9</li>
                    <li>Minimum size - 1280 x 720</li>
                    <li>Maximum size - 2560 x 1440</li>
                    <li>Maximum size - 2560 x 1440</li>
                    <li>.png, .jpg, .jpeg, .gif</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <button className={styles.saveBut}>Save Changes</button>
      </div>
    </CreateCourseLayout>
  );
};

export default create;
