"use client";

import { createElement, useState } from "react";
import { useProgramFormStore } from "@/store/program-form-store";
import {
  StepPersonalInfo,
  StepGoal,
  StepHistory,
  StepHealthStatus,
  StepDrugHistory,
  StepFoodRestriction,
  StepDiet,
  StepSportSupplementHistory,
  StepAmountOfExercise,
} from "./steps";
import { ProgressBar } from "./progress-bar";

const FORMS = [
  StepPersonalInfo,
  StepGoal,
  StepHistory,
  StepHealthStatus,
  StepDrugHistory,
  StepFoodRestriction,
  StepDiet,
  StepSportSupplementHistory,
  StepAmountOfExercise,
];

enum Validation {
  PersonalInfo,
  Diet,
  Goal,
}

const validationMap = {
  [Validation.PersonalInfo]: () => {},
};

export function ProgramForm() {
  const [step, setStep] = useState(1);
  const formData = useProgramFormStore((state) => state);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const isStepComplete = () => {
    switch (step) {
      case Validation.PersonalInfo:
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
      case 3:
        return formData.sportHistory !== null;
      case 4:
        return (
          formData.healthStatus === false ||
          (formData.healthStatus === true &&
            formData.healthStatusDesc !== null &&
            formData.healthStatusDesc.length > 10)
        );
      case 5:
        return (
          formData.drugHistory === false ||
          (formData.drugHistory === true &&
            formData.drugHistoryDesc !== null &&
            formData.drugHistoryDesc.length > 10)
        );
      case 6:
        return (
          formData.foodRestriction === false ||
          (formData.foodRestriction === true &&
            formData.foodRestrictionDesc !== null &&
            formData.foodRestrictionDesc.length > 10)
        );
      case 7:
        return (
          formData.diet === "omnivorous" ||
          formData.diet === "meat-eater" ||
          (formData.diet === "herbivor" &&
            formData.dietDesc !== null &&
            formData.dietDesc.length > 10)
        );
      case 8:
        return (
          formData.sportSupplementHistory === false ||
          (formData.sportSupplementHistory === true &&
            formData.sportSupplementDesc !== null &&
            formData.sportSupplementDesc.length > 10)
        );
      case 9:
        return formData.exerciseAmount !== null;
      default:
        return false;
    }
  };

  return (
    <div className="container mx-auto max-w-2xl lg:max-w-4xl p-8 shadow-2xl rounded-xl">
      <div className="mb-8">
        <ProgressBar currentStep={step} totalSteps={FormData.length - 1} />
      </div>

      <div>{createElement(FORMS[step - 1])}</div>

      {/* componoent */}

      <div className="mt-8 flex justify-between">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="rounded-lg cursor-pointer bg-gray-300 px-8 py-3 font-bold text-gray-800 hover:bg-gray-400"
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
            className="rounded-lg cursor-pointer bg-red-500 px-8 py-3 font-bold text-white transition-colors hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed"
          >
            بعدی
          </button>
        )}
      </div>
    </div>
  );
}
