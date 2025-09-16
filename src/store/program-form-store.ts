import { create } from "zustand";

type FormState = {
  gender: "male" | "female" | null;
  age: number | null;
  height: number | null;
  weight: number | null;
  goal: string | null;
  activityLevel: string | null;
};

type FormActions = {
  setGender: (gender: "male" | "female") => void;
  setAge: (age: number | null) => void;
  setHeight: (height: number | null) => void;
  setWeight: (weight: number | null) => void;
};

export const useProgramFormStore = create<FormState & FormActions>((set) => ({
  gender: null,
  age: null,
  height: null,
  weight: null,
  goal: null,
  activityLevel: null,

  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
}));
