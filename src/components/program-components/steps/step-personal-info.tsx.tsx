"use client";

import { useProgramFormStore } from "@/store/program-form-store";
import Image from "next/image";

export function StepPersonalInfo() {
  const {
    gender,
    setGender,
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
  } = useProgramFormStore();

  const baseClasses =
    "flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-lg cursor-pointer transition-colors";

  const selectedClasses =
    "border border-red-300 shadow-lg bg-gray-100 text-black ";

  const unselectedClasses = "border-gray-100 shadow-lg hover:shadow-xl";

  const inputClasses =
    "focus:outline-hidden placeholder:italic border border-red-100 focus:border-red-300 w-full p-4 text-center text-sm font-bold rounded-lg ";

  return (
    <div>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 ">
        <Image
          src="/program/جنسیت.svg"
          alt="فیتویار لوگو"
          width={70}
          height={70}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">مشخصات فردی</h2>
      <p className="text-gray-500 mb-6">انتخاب جنسیت و تعیین سن، قد و وزن.</p>

      <h3 className="text-lg font-medium mt-6 mb-2 px-2">جنسیت</h3>
      <div className="grid grid-cols-2 gap-4 px-4">
        <div
          onClick={() => setGender("male")}
          className={`${baseClasses} ${gender === "male" ? selectedClasses : unselectedClasses}`}
        >
          <span className="text-xl font-medium">مرد</span>
        </div>
        <div
          onClick={() => setGender("female")}
          className={`${baseClasses} ${gender === "female" ? selectedClasses : unselectedClasses}`}
        >
          <span className="text-xl font-medium">زن</span>
        </div>
      </div>

      <h3 className="text-lg font-medium mt-6 mb-2 px-2">سن (سال)</h3>
      <div className="px-4">
        <input
          type="number"
          placeholder="مثال: 25"
          className={inputClasses}
          value={age || ""}
          onChange={(e) =>
            setAge(e.target.value ? parseInt(e.target.value) : null)
          }
        />
      </div>

      <h3 className="text-lg font-medium mt-6 mb-2 px-2 ">قد (سانتی‌متر)</h3>
      <div className="px-4">
        <input
          type="number"
          placeholder="مثال: 180"
          className={inputClasses}
          value={height || ""}
          onChange={(e) =>
            setHeight(e.target.value ? parseInt(e.target.value) : null)
          }
        />
      </div>

      <h3 className="text-lg font-medium mt-6 mb-2 px-2">وزن فعلی (کیلوگرم)</h3>
      <div className="px-4">
        <input
          type="number"
          placeholder="مثال: 85"
          className={inputClasses}
          value={weight || ""}
          onChange={(e) =>
            setWeight(e.target.value ? parseInt(e.target.value) : null)
          }
        />
      </div>
    </div>
  );
}
