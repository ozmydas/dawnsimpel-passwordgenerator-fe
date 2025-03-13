export interface FormData {
  name: string;
  preferences: {
    over12: boolean;
    includeUppercase: boolean;
    includeNumber: boolean;
    includeSpecialChars: boolean;
  };
}

export type PreferenceKey = "over12" | "includeUppercase" | "includeNumber" | "includeSpecialChars";