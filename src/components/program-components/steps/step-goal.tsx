"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

const goals = [
  { id: "weight-gain", label: "افزایش وزن", icon: "/program/هدف.svg" },
  { id: "weight-loss", label: "کاهش وزن", icon: "/program/هدف.svg" },
  { id: "muscle-building", label: "عضله سازی", icon: "/program/هدف.svg" },
  { id: "fat-loss", label: "چربی سوزی", icon: "/program/هدف.svg" },
  { id: "fitness", label: "فیتنس", icon: "/program/هدف.svg" },
];

export function StepGoal() {
  const {
    goal,
    setGoal,
    targetWeight,
    setTargetWeight,
    duration,
    setDuration,
  } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";
  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black";
  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const inputClasses =
    "focus:outline-hidden placeholder:italic border border-red-100 focus:border-red-300 w-full p-4 text-center text-sm font-bold rounded-lg ";

  return (
    <div>
      <div className="w-[80px] h-[80px] rounded-md shadow-md bg-gray-200 mb-6 flex items-center justify-center">
        <Image src="/program/هدف.svg" alt="هدف" width={70} height={70} />
      </div>
      <h2 className="text-xl font-semibold mb-2">هدف شما چیست؟</h2>
      <p className="text-gray-500 mb-6">
        مهم‌ترین هدفی که دنبال می‌کنید را انتخاب کنید.
      </p>

      <h3 className="text-lg font-medium mt-6 mb-2 px-2">هدف :</h3>

      <div className="grid grid-cols-2 gap-4 px-4">
        {goals.map((g) => (
          <div
            key={g.id}
            onClick={() => setGoal(g.id)}
            className={`${baseClasses} ${goal === g.id ? selectedClasses : unselectedClasses}`}
          >
            <span className="text-xl font-medium ">{g.label}</span>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-medium mt-6 px-2 mb-2">وزن هدف (کیلوگرم)</h3>
      <div className="px-4">
        <input
          type="number"
          placeholder="مثال: 75"
          className={inputClasses}
          value={targetWeight || ""}
          onChange={(e) =>
            setTargetWeight(e.target.value ? parseInt(e.target.value) : null)
          }
        />
      </div>
      <h3 className="text-lg font-medium px-2 mt-6 mb-2">در چند هفته؟</h3>
      <div className="px-4">
        <input
          type="number"
          placeholder="مثال: 12"
          className={inputClasses}
          value={duration || ""}
          onChange={(e) =>
            setDuration(e.target.value ? parseInt(e.target.value) : null)
          }
        />
      </div>
    </div>
  );
}
