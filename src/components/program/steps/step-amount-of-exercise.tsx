"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const AmountValues = [
  { id: 1, value: "۱ روز در هفته", text: "۱ روز در هفته" },
  { id: 2, value: "۲ تا ۳ روز", text: "۲ تا ۳ روز" },
  { id: 3, value: "۴ تا ۶ روز", text: "۴ تا ۶ روز" },
  { id: 4, value: "کل هفته", text: "کل هفته" },
];

export function StepAmountOfExercise() {
  const { exerciseAmount, setExerciseAmount } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";

  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const handleStatusChange = (value: string) => {
    setExerciseAmount(value);
  };

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/مصرف داری خاص.svg"
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
        {AmountValues.map((AV) => (
          <div
            key={AV.id}
            onClick={() => handleStatusChange(`${AV.value}`)}
            className={`${baseClasses} ${exerciseAmount === AV.value ? selectedClasses : unselectedClasses}`}
          >
            <span className="text-xl font-medium">{AV.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
