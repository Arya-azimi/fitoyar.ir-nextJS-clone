"use client";

import { ProgramIntroduction } from "@/components/ui/program/program-introduction";
import { PublicSrc } from "@/lib/constants/program-page/public-src";
import { personalInfoStore } from "@/store/program-form-store";

import {
  baseClasses,
  inputClasses,
  selectedClasses,
  unselectedClasses,
} from "../program-clases";
import { personalInfoSections } from "@/lib/constants/program-page/inputs";

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
        {personalInfoSections.map((section) => (
          <div key={section.underInputTitle}>
            <h3 className="text-lg font-medium mt-6 mb-2 px-2">
              {section.underInputTitle}
            </h3>

            <div
              className={
                section.inputs.length > 1
                  ? "grid grid-cols-2 gap-4 px-4"
                  : "px-4"
              }
            >
              {section.inputs.map((inputConfig) => {
                if (inputConfig.type === "radio") {
                  return (
                    <label
                      key={inputConfig.value}
                      className={`${baseClasses} ${
                        gender === inputConfig.value
                          ? selectedClasses
                          : unselectedClasses
                      }`}
                    >
                      <input
                        type="radio"
                        name={inputConfig.name}
                        value={inputConfig.value}
                        checked={gender === inputConfig.value}
                        onChange={() =>
                          setGender(inputConfig.value as "male" | "female")
                        }
                        className="sr-only"
                      />
                      <span className="text-xl font-medium">
                        {inputConfig.label}
                      </span>
                    </label>
                  );
                }

                if (inputConfig.type === "number") {
                  let value, setValue;
                  if (inputConfig.name === "age") {
                    value = age;
                    setValue = setAge;
                  } else if (inputConfig.name === "height") {
                    value = height;
                    setValue = setHeight;
                  } else if (inputConfig.name === "weight") {
                    value = weight;
                    setValue = setWeight;
                  }

                  return (
                    <input
                      key={inputConfig.name}
                      type="number"
                      placeholder={inputConfig.placeholder}
                      className={inputClasses}
                      value={value || ""}
                      onChange={(e) =>
                        setValue(
                          e.target.value ? parseInt(e.target.value) : null
                        )
                      }
                    />
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
