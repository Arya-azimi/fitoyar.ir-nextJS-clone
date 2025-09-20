"use client";

import { useState } from "react";
import { ProgressBar } from "./progress-bar";
import { FORM_STEPS } from "@/lib/constants/program-page/program-flow";

const TOTAL_STEPS = FORM_STEPS.length;

export function ProgramForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const isStepComplete = () => {
    const currentValidation = FORM_STEPS[step - 1]?.validation;
    if (!currentValidation) return false;
    return currentValidation();
  };

  const CurrentStepComponent = FORM_STEPS[step - 1]?.component;

  return (
    <div className="container mx-auto max-w-4xl rounded-lg border border-gray-100 p-8 shadow-xl">
      <div className="mb-8">
        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
      </div>

      <div>{CurrentStepComponent && <CurrentStepComponent />}</div>

      <div className="mt-8 flex justify-between gap-4">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="rounded-lg bg-gray-300 px-8 py-3 font-bold text-gray-800 transition-colors hover:bg-gray-400"
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
            className="rounded-lg bg-red-500 px-8 py-3 font-bold text-white transition-colors hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            بعدی
          </button>
        )}
      </div>
    </div>
  );
}
