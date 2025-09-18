import { create } from "zustand";

type FormState = {
  gender: "male" | "female" | null;
  age: number | null;
  height: number | null;
  weight: number | null;
  goal: string | null;
  targetWeight: number | null;
  duration: number | null;
  sportHistory: string | null;
  healthStatus: boolean | null;
  healthStatusDesc: string | null;
  drugHistory: boolean | null;
  drugHistoryDesc: string | null;
  foodRestriction: boolean | null;
  foodRestrictionDesc: string | null;
  diet: string | null;
  dietDesc: string | null;
};

type FormActions = {
  setGender: (gender: "male" | "female") => void;
  setAge: (age: number | null) => void;
  setHeight: (height: number | null) => void;
  setWeight: (weight: number | null) => void;
  setGoal: (goal: string | null) => void;
  setTargetWeight: (weight: number | null) => void;
  setDuration: (weeks: number | null) => void;
  setSportHistory: (history: string | null) => void;
  setHealthStatus: (status: boolean | null) => void;
  setHealthStatusDesc: (healthDesc: string | null) => void;
  setDrugHistory: (drughistory: boolean | null) => void;
  setDrugHistoryDesc: (drugHistoryDesc: string | null) => void;
  setFoodRestriction: (foodrestriction: boolean | null) => void;
  setFoodRestrictionDesc: (foodrestrictionDesc: string | null) => void;
  setDiet: (diet: string | null) => void;
  setDietDesc: (dietDesc: string | null) => void;
};

export const useProgramFormStore = create<FormState & FormActions>((set) => ({
  gender: null,
  age: null,
  height: null,
  weight: null,
  goal: null,
  targetWeight: null,
  duration: null,
  sportHistory: null,
  healthStatus: null,
  healthStatusDesc: null,
  drugHistory: null,
  drugHistoryDesc: null,
  foodRestriction: null,
  foodRestrictionDesc: null,
  diet: null,
  dietDesc: null,

  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),

  setGoal: (goal) => set({ goal }),
  setTargetWeight: (targetWeight) => set({ targetWeight }),
  setDuration: (duration) => set({ duration }),

  setSportHistory: (sportHistory) => set({ sportHistory }),

  setHealthStatus: (healthStatus) => set({ healthStatus }),
  setHealthStatusDesc: (healthStatusDesc) => set({ healthStatusDesc }),

  setDrugHistory: (drugHistory) => set({ drugHistory }),
  setDrugHistoryDesc: (drugHistoryDesc) => set({ drugHistoryDesc }),

  setFoodRestriction: (foodRestriction) => set({ foodRestriction }),
  setFoodRestrictionDesc: (foodRestrictionDesc) => set({ foodRestrictionDesc }),

  setDiet: (diet) => set({ diet }),
  setDietDesc: (dietDesc) => set({ dietDesc }),
}));
