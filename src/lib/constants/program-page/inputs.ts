import { PersonalInfoSchema } from "@/store/program-form-store";

type PersonalInfoKey = keyof Omit<
  PersonalInfoSchema,
  "setGender" | "setAge" | "setHeight" | "setWeight"
>;

export type InputConfig = {
  name: PersonalInfoKey;
  type: "radio" | "number";
  label?: string;
  value?: "male" | "female" | string;
  placeholder?: string;
};

export type FormSection = {
  underInputTitle: string;
  inputs: InputConfig[];
};

export const personalInfoSections: FormSection[] = [
  {
    underInputTitle: "جنسیت",
    inputs: [
      {
        name: "gender",
        type: "radio",
        label: "مرد",
        value: "male",
      },
      {
        name: "gender",
        type: "radio",
        label: "زن",
        value: "female",
      },
    ],
  },
  {
    underInputTitle: "سن (سال)",
    inputs: [
      {
        name: "age",
        type: "number",
        placeholder: "مثال: 25",
      },
    ],
  },
  {
    underInputTitle: "قد (سانتی‌متر)",
    inputs: [
      {
        name: "height",
        type: "number",
        placeholder: "مثال: 180",
      },
    ],
  },
  {
    underInputTitle: "وزن فعلی (کیلوگرم)",
    inputs: [
      {
        name: "weight",
        type: "number",
        placeholder: "مثال: 85",
      },
    ],
  },
];
