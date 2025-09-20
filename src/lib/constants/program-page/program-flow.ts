import { StepPersonalInfo } from "@/components/program/steps";
import { StepGoal } from "@/components/program/steps/step-goal";

import { goalStore } from "@/store/program-form-store";
import { personalInfoStore } from "@/store/program-form-store";

type FormStep = {
  component: React.ComponentType;
  validation: () => boolean;
};

export const FORM_STEPS: FormStep[] = [
  {
    component: StepPersonalInfo,
    validation: () => {
      const state = personalInfoStore.getState();
      return (
        state.gender !== null &&
        state.age !== null &&
        state.height !== null &&
        state.weight !== null
      );
    },
  },
  {
    component: StepGoal,
    validation: () => {
      const state = goalStore.getState();
      return (
        state.goal !== null &&
        state.targetWeight !== null &&
        state.duration !== null
      );
    },
  },
];
