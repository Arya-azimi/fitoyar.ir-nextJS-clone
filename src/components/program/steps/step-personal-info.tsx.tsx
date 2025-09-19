"use client";

import { ProgramIntroduction } from "@/components/ui/program/program-introduction";
import { PublicSrc } from "@/lib/constants/public-src";
import { personalInfoStore } from "@/store/program-form-store";

import {
  // baseClasses,
  inputClasses,
  // selectedClasses,
  // unselectedClasses,
} from "../program-clases";
import { personalInfoSections } from "@/lib/constants/inputs";

export function StepPersonalInfo() {
  const {
    // gender,
    // setGender,
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
  } = personalInfoStore();

  return (
    <div>
      <ProgramIntroduction
        imageSrc={PublicSrc.program.svg.personalInfo}
        imageAlt="اطلاعات شخصی"
        imageSize={70}
        title="مشخصات فردی"
        description="انتخاب جنسیت و تعیین سن، قد و وزن."
      />

      <div className="space-y-6">
        {personalInfoSections.map((sec) => (
          <div key={sec.underInputTitle}>
            <h3 className="text-lg font-medium mt-6 mb-2 px-2">
              {sec.underInputTitle}
            </h3>
            <div
              className={
                sec.inputs.length > 1 ? "grid grid-cols-2 gap-4 px-4" : "px-4"
              }
            >
              {sec.inputs.map((input) => (
                <div key={input.label}>
                  {input.type === "radio" && (
                    <div className="grid grid-cols-2 gap-4 px-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
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
