"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const HistoryValues = [
  { id: 1, value: "less", text: "کم ( تا ۶ ماه تجربه )" },
  { id: 2, value: "average", text: "متوسط ( ۶ ماه تا ۲ سال تجربه )" },
  { id: 3, value: "a lot", text: "حرفه ای ( بیش از ۲ سال تجربه )" },
];

export function StepHistory() {
  const { sportHistory, setSportHistory } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";
  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/ورزش.svg"
          alt="فیتویار لوگو"
          width={60}
          height={60}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">سابقه تمرینی شما</h2>
      <div className="grid grid-cols-1 gap-4 px-4">
        {HistoryValues.map((HV) => (
          <div
            key={HV.id}
            onClick={() => setSportHistory(`${HV.value}`)}
            className={`${baseClasses} ${sportHistory === HV.value ? selectedClasses : unselectedClasses} `}
          >
            <span className="text-xl font-medium">{HV.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
