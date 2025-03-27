import PasswordGeneratorRepository from "../repository/PasswordRepository";
import { passwordStore } from "../stores/passwordStore";

export const usePasswordGeneratorService = () => {

    const { setPassword } = passwordStore();

    const passwordRepo = new PasswordGeneratorRepository();

    const submit = async (data: any): Promise<void> => {
        try {
            const result = await passwordRepo.create(data);
            setPassword(result.data.password); // Store the password in Recoil state

            console.log("Form submitted successfully!", result);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return { submit };
};
