"use client";

import { useState } from "react";
import { useProgramFormStore } from "@/store/program-form-store";
import { StepPersonalInfo } from "./steps/step-personal-info.tsx";
import { StepGoal } from "./steps/step-goal";
import { ProgressBar } from "./progress-bar";

const TOTAL_STEPS = 19;

export function ProgramForm() {
  const [step, setStep] = useState(1);
  const formData = useProgramFormStore((state) => state);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return (
          formData.gender !== null &&
          formData.age !== null &&
          formData.height !== null &&
          formData.weight !== null
        );
      case 2:
        return (
          formData.goal !== null &&
          formData.targetWeight !== null &&
          formData.duration !== null
        );
      default:
        return false;
    }
  };

  return (
    <div className="container mx-auto max-w-2xl lg:max-w-4xl p-8 shadow-2xl rounded-xl">
      <div className="mb-8">
        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
      </div>

      <div>
        {step === 1 && <StepPersonalInfo />}
        {step === 2 && <StepGoal />}
      </div>

      <div className="mt-8 flex justify-between">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="rounded-lg bg-gray-300 px-8 py-3 font-bold text-gray-800 hover:bg-gray-400"
          >
            قبلی
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS && (
          <button
            onClick={nextStep}
            disabled={!isStepComplete()}
            className="rounded-lg bg-red-500 px-8 py-3 font-bold text-white transition-colors hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed"
          >
            بعدی
          </button>
        )}
      </div>
    </div>
  );
}
