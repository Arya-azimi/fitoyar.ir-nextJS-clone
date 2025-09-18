"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const DrugStatus = [
  { id: 1, value: true, text: "دارم" },
  { id: 2, value: false, text: "ندارم" },
];

export function StepDrugHistory() {
  const { drugHistory, drugHistoryDesc, setDrugHistory, setDrugHistoryDesc } =
    useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";

  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const textareaStyle =
    "focus:outline-hidden placeholder:italic border border-red-100 focus:border-red-300 w-full p-4 text-sm font-medium rounded-lg";

  const handleStatusChange = (value: boolean) => {
    setDrugHistory(value);
    if (value === false) {
      setDrugHistoryDesc(null);
    }
  };

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/مصرف داروی خاص.svg"
          alt="فیتویار لوگو"
          width={70}
          height={70}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">سابقه مصرف داروهای خاص</h2>
      <p className="text-gray-500 mb-6">
        مثل: داروهای قند، داروهای تیروئید، ضدافسردگی، داروهای قلبی،
        هورمونی...{" "}
      </p>
      <div className="grid grid-cols-1 gap-4 px-4">
        {DrugStatus.map((DS) => (
          <div
            key={DS.id}
            onClick={() => handleStatusChange(DS.value)}
            className={`${baseClasses} ${
              drugHistory === DS.value ? selectedClasses : unselectedClasses
            } `}
          >
            <span className="text-xl font-medium">{DS.text}</span>
          </div>
        ))}

        {drugHistory === true && (
          <div>
            <p className="text-gray-500 mb-2 font-semibold">
              توضیحات (الزامی) :
            </p>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                onChange={(e) =>
                  setDrugHistoryDesc(e.target.value ? e.target.value : null)
                }
                name=""
                className={` ${textareaStyle}`}
                id=""
                value={drugHistoryDesc || ""}
              ></textarea>
            </div>
          </div>
        )}

        {drugHistory === true &&
        (!drugHistoryDesc || drugHistoryDesc.length <= 10) ? (
          <p className="text-red-800 text-lg font-bold text-center p-2 border border-red-600 rounded-lg">
            اطلاعات بیشتری وارد کنید !!!
          </p>
        ) : null}
      </div>
    </div>
  );
}
