"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const FoodRestriction = [
  { id: 1, value: true, text: "دارم" },
  { id: 2, value: false, text: "ندارم" },
];

export function StepFoodRestriction() {
  const {
    foodRestriction,
    foodRestrictionDesc,
    setFoodRestriction,
    setFoodRestrictionDesc,
  } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";

  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const textareaStyle =
    "focus:outline-hidden placeholder:italic border border-red-100 focus:border-red-300 w-full p-4 text-sm font-medium rounded-lg";

  const handleStatusChange = (value: boolean) => {
    setFoodRestriction(value);
    if (value === false) {
      setFoodRestrictionDesc(null);
    }
  };

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/محدودیت غذای.svg"
          alt="فیتویار لوگو"
          width={60}
          height={60}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">محدودیت غذایی داری؟</h2>
      <p className="text-gray-500 mb-6">
        دوست داری چی تو رژیم غذاییت نباشه؟ یا چه چیزی رو دوست نداری؟ مثلا: از
        بادمجون بدم میاد، به سیر حساسیت دارم و...
      </p>
      <div className="grid grid-cols-1 gap-4 px-4">
        {FoodRestriction.map((FS) => (
          <div
            key={FS.id}
            onClick={() => handleStatusChange(FS.value)}
            className={`${baseClasses} ${
              foodRestriction === FS.value ? selectedClasses : unselectedClasses
            } `}
          >
            <span className="text-xl font-medium">{FS.text}</span>
          </div>
        ))}

        {foodRestriction === true && (
          <div>
            <p className="text-gray-500 mb-2 font-semibold">
              توضیحات (الزامی) :
            </p>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                onChange={(e) =>
                  setFoodRestrictionDesc(e.target.value ? e.target.value : null)
                }
                name=""
                className={` ${textareaStyle}`}
                id=""
                value={foodRestrictionDesc || ""}
              ></textarea>
            </div>
          </div>
        )}

        {foodRestriction === true &&
        (!foodRestrictionDesc || foodRestrictionDesc.length <= 10) ? (
          <p className="text-red-800 text-lg font-bold text-center p-2 border border-red-600 rounded-lg">
            اطلاعات بیشتری وارد کنید !!!
          </p>
        ) : null}
      </div>
    </div>
  );
}
