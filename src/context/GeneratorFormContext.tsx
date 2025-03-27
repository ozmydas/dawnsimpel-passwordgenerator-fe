import { createContext, useState } from "react";
import { GeneratorFormData } from "../models/formData";

interface FormContextType {
  formData: GeneratorFormData;
  updateField: (field: string, value: any) => void;
}

export const GeneratorFormContext = createContext<FormContextType | null>(null);

export function GeneratorFormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<GeneratorFormData>({
    name: "",
    preferences: {
      over12: false,
      includeUppercase: true,
      includeNumber: true,
      includeSpecialChars: true,
      nonEnglishWord: false,
    },
  });

  function updateField(field: string, value: any) {
    setFormData((prev) => ({
      ...prev,
          preferences: {
            ...prev.preferences,
            [field]: value
          }
    }));
  }

  return (
    <GeneratorFormContext.Provider value={{ formData, updateField }}>
      {children}
    </GeneratorFormContext.Provider>
  );
}
