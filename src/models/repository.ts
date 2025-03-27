import { PasswordResponse } from "./formData";

export interface Repository<T> {
  create(data: T): Promise<PasswordResponse>;
  read(id: string): Promise<T | null>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
}