"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const DietStatus = [
  { id: 1, value: "omnivorous", text: "همه چیز حوار" },
  { id: 2, value: "meat-eater", text: "گوشت خوار" },
  { id: 3, value: "herbivor", text: "گیاه خوار" },
];

export function StepDiet() {
  const { diet, dietDesc, setDiet, setDietDesc } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";

  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const textareaStyle =
    "focus:outline-hidden placeholder:italic border border-red-100 focus:border-red-300 w-full p-4 text-sm font-medium rounded-lg";

  const handleStatusChange = (value: string) => {
    setDiet(value);
    if (value === "omnivorous" || value === "meat-eater") {
      setDietDesc(null);
    }
  };

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/رژیم غذایی.svg"
          alt="فیتویار لوگو"
          width={50}
          height={50}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">
        رژیم غذایی شما از چه نوع است؟
      </h2>
      <p className="text-gray-500 mb-6">
        دوست داری چی تو رژیمت نباشه یا چیز خاصی رو دوست نداری در رژیمت داشته
        باشی؟از بادمجون بدم میاد. از ماست بدن میاد. به قارچ حصاصیت دارم
      </p>
      <div className="grid grid-cols-1 gap-4 px-4">
        {DietStatus.map((DS) => (
          <div
            key={DS.id}
            onClick={() => handleStatusChange(DS.value)}
            className={`${baseClasses} ${
              diet === DS.value ? selectedClasses : unselectedClasses
            } `}
          >
            <span className="text-xl font-medium">{DS.text}</span>
          </div>
        ))}

        {diet === "herbivor" && (
          <div>
            <p className="text-gray-500 mb-2 font-semibold">
              توضیحات (الزامی) :
            </p>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                onChange={(e) =>
                  setDietDesc(e.target.value ? e.target.value : null)
                }
                name=""
                className={` ${textareaStyle}`}
                id=""
                value={dietDesc || ""}
              ></textarea>
            </div>
          </div>
        )}

        {diet === "herbivor" && (!dietDesc || dietDesc.length <= 10) ? (
          <p className="text-red-800 text-lg font-bold text-center p-2 border border-red-600 rounded-lg">
            اطلاعات بیشتری وارد کنید !!!
          </p>
        ) : null}
      </div>
    </div>
  );
}
