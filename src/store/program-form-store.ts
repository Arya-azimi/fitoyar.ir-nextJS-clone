import { create } from "zustand";

export type PersonalInfoSchema = {
  gender: "male" | "female" | null;
  age: number | null;
  height: number | null;
  weight: number | null;

  setGender: (gender: "male" | "female") => void;
  setAge: (age: number | null) => void;
  setHeight: (height: number | null) => void;
  setWeight: (weight: number | null) => void;
};

export const personalInfoStore = create<PersonalInfoSchema>((set) => ({
  gender: null,
  age: null,
  height: null,
  weight: null,

  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
}));

type GoalSchema = {
  goal: string | null;
  targetWeight: number | null;
  duration: number | null;

  setGoal: (goal: string | null) => void;
  setTargetWeight: (weight: number | null) => void;
  setDuration: (weeks: number | null) => void;
};

export const goalStore = create<GoalSchema>((set) => ({
  goal: null,
  targetWeight: null,
  duration: null,

  setGoal: (goal) => set({ goal }),
  setTargetWeight: (targetWeight) => set({ targetWeight }),
  setDuration: (duration) => set({ duration }),
}));

type TrainingHistorySchema = {
  sportHistory: string | null;

  setSportHistory: (history: string | null) => void;
};

export const trainingHistoryStore = create<TrainingHistorySchema>((set) => ({
  sportHistory: null,

  setSportHistory: (sportHistory) => set({ sportHistory }),
}));

type HealthStatusSchema = {
  healthStatus: boolean | null;
  healthStatusDesc: string | null;

  setHealthStatus: (status: boolean | null) => void;
  setHealthStatusDesc: (healthDesc: string | null) => void;
};

export const healthStatusStore = create<HealthStatusSchema>((set) => ({
  healthStatus: null,
  healthStatusDesc: null,

  setHealthStatus: (healthStatus) => set({ healthStatus }),
  setHealthStatusDesc: (healthStatusDesc) => set({ healthStatusDesc }),
}));

type DrugHistorySchema = {
  drugHistory: boolean | null;
  drugHistoryDesc: string | null;

  setDrugHistory: (drughistory: boolean | null) => void;
  setDrugHistoryDesc: (drugHistoryDesc: string | null) => void;
};

export const drugHistoryStore = create<DrugHistorySchema>((set) => ({
  drugHistory: null,
  drugHistoryDesc: null,

  setDrugHistory: (drugHistory) => set({ drugHistory }),
  setDrugHistoryDesc: (drugHistoryDesc) => set({ drugHistoryDesc }),
}));

type FoodRestrictionSchema = {
  foodRestriction: boolean | null;
  foodRestrictionDesc: string | null;

  setFoodRestriction: (foodrestriction: boolean | null) => void;
  setFoodRestrictionDesc: (foodrestrictionDesc: string | null) => void;
};

export const foodRestrictionStore = create<FoodRestrictionSchema>((set) => ({
  foodRestriction: null,
  foodRestrictionDesc: null,

  setFoodRestriction: (foodRestriction) => set({ foodRestriction }),
  setFoodRestrictionDesc: (foodRestrictionDesc) => set({ foodRestrictionDesc }),
}));

type DietSchema = {
  diet: string | null;
  dietDesc: string | null;

  setDiet: (diet: string | null) => void;
  setDietDesc: (dietDesc: string | null) => void;
};

export const dietStore = create<DietSchema>((set) => ({
  diet: null,
  dietDesc: null,

  setDiet: (diet) => set({ diet }),
  setDietDesc: (dietDesc) => set({ dietDesc }),
}));

type SportSupplementSchema = {
  sportSupplementHistory: boolean | null;
  sportSupplementDesc: string | null;

  setSportSupplementHistory: (supplementHistory: boolean | null) => void;
  setSportSupplementHistoryDesc: (supplementHistoryDesc: string | null) => void;
};

export const SportSupplementStore = create<SportSupplementSchema>((set) => ({
  sportSupplementHistory: null,
  sportSupplementDesc: null,

  setSportSupplementHistory: (sportSupplementHistory) =>
    set({ sportSupplementHistory }),
  setSportSupplementHistoryDesc: (sportSupplementDesc) =>
    set({ sportSupplementDesc }),
}));

type ExerciseAmountSchema = {
  exerciseAmount: string | null;

  setExerciseAmount: (amount: string | null) => void;
};

export const exerciseAmountStore = create<ExerciseAmountSchema>((set) => ({
  exerciseAmount: null,
  setExerciseAmount: (exerciseAmount) => set({ exerciseAmount }),
}));
