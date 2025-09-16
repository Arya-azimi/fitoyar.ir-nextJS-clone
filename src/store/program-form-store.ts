import { create } from "zustand";

type FormState = {
  gender: "male" | "female" | null;
  age: number | null;
  height: number | null;
  weight: number | null;
  goal: string | null;
  targetWeight: number | null;
  duration: number | null;
};

type FormActions = {
  setGender: (gender: "male" | "female") => void;
  setAge: (age: number | null) => void;
  setHeight: (height: number | null) => void;
  setWeight: (weight: number | null) => void;
  setGoal: (goal: string | null) => void;
  setTargetWeight: (weight: number | null) => void;
  setDuration: (weeks: number | null) => void;
};

export const useProgramFormStore = create<FormState & FormActions>((set) => ({
  gender: null,
  age: null,
  height: null,
  weight: null,
  goal: null,
  targetWeight: null,
  duration: null,

  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  setGoal: (goal) => set({ goal }),
  setTargetWeight: (targetWeight) => set({ targetWeight }),
  setDuration: (duration) => set({ duration }),
}));
