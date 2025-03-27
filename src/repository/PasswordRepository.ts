import { GeneratorFormData, PasswordResponse } from "../models/formData";
import { Repository } from "../models/repository";
import axios from 'axios';

export default class PasswordGeneratorRepository implements Repository<GeneratorFormData> {

    async create(formdata: GeneratorFormData): Promise<PasswordResponse> {

        // console.log("📨 test data :", data);

        let status = false;
        let msg = "your password successfully generateds";
        let passwd = null;

        try {
            const response = await axios.post(process.env.API_URL ?? "", JSON.stringify(formdata.preferences), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // console.log('Response:', response.data);

            status = true;
            passwd = response.data.data.password;
        } catch (error) {
            console.error('Error:', error);

            status = false;
            passwd = null;
        }

        const result: PasswordResponse = {
            status: status,
            message: msg,
            data: {
                password: passwd,
            }
        }

        return result;
    }

    async read(id: string): Promise<GeneratorFormData | null> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, data: Partial<GeneratorFormData>): Promise<GeneratorFormData> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}