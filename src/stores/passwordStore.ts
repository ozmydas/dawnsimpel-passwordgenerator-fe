import { create } from 'zustand'

interface PasswordState {
    password: string;
    setPassword: (pass: string) => void;
    // fetchPassword: () => Promise<void>;
}

export const passwordStore = create<PasswordState>((set) => ({
    password: "********",
    setPassword: (password) => set({ password }),
}))