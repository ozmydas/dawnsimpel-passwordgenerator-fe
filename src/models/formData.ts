export interface GeneratorFormData {
  name: string;
  preferences: {
    over12: boolean;
    includeUppercase: boolean;
    includeNumber: boolean;
    includeSpecialChars: boolean;
    nonEnglishWord: boolean
  };
}

export type PreferenceKey = "over12" | "includeUppercase" | "includeNumber" | "includeSpecialChars" | "nonEnglishWord";

// export interface PasswordPayload{
//   status: boolean;
//   message: string;
//   data: any;
// }

export interface PasswordResponse{
  status: boolean;
  message: string;
  data: any;
}