"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const SupplementHistory = [
  { id: 1, value: true, text: "بله" },
  { id: 2, value: false, text: "خیر" },
];

export function StepSportSupplementHistory() {
  const {
    sportSupplementHistory,
    sportSupplementDesc,
    setSportSupplementHistory,
    setSportSupplementHistoryDesc,
  } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";

  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const textareaStyle =
    "focus:outline-hidden placeholder:italic border border-red-100 focus:border-red-300 w-full p-4 text-sm font-medium rounded-lg";

  const handleStatusChange = (value: boolean) => {
    setSportSupplementHistory(value);
    if (value === false) {
      setSportSupplementHistoryDesc(null);
    }
  };

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/مکمل.svg"
          alt="فیتویار لوگو"
          width={50}
          height={50}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">مکمل ها</h2>
      <p className="text-gray-500 mb-6">
        آیا از مکمل خاصی استفاده میکردی یا در حال حاضر هم استفاده میکنی؟
      </p>
      <div className="grid grid-cols-1 gap-4 px-4">
        {SupplementHistory.map((SH) => (
          <div
            key={SH.id}
            onClick={() => handleStatusChange(SH.value)}
            className={`${baseClasses} ${
              sportSupplementHistory === SH.value
                ? selectedClasses
                : unselectedClasses
            } `}
          >
            <span className="text-xl font-medium">{SH.text}</span>
          </div>
        ))}

        {sportSupplementHistory === true && (
          <div>
            <p className="text-gray-500 mb-2 font-semibold">
              توضیحات (الزامی) :
            </p>
            <div className="grid grid-cols-1 gap-4">
              <textarea
                onChange={(e) =>
                  setSportSupplementHistoryDesc(
                    e.target.value ? e.target.value : null
                  )
                }
                name=""
                className={` ${textareaStyle}`}
                id=""
                value={sportSupplementDesc || ""}
              ></textarea>
            </div>
          </div>
        )}

        {sportSupplementHistory === true &&
        (!sportSupplementDesc || sportSupplementDesc.length <= 10) ? (
          <p className="text-red-800 text-lg font-bold text-center p-2 border border-red-600 rounded-lg">
            اطلاعات بیشتری وارد کنید !!!
          </p>
        ) : null}
      </div>
    </div>
  );
}
