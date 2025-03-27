"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { PreferenceKey } from "../models/formData";

interface CheckboxProps {
    id: PreferenceKey;
    title: string;
    description: string;
    checked: boolean;
    onChange: (id: PreferenceKey, isChecked: boolean) => void;
}

export default function CheckboxWithText({ id, title, description, checked, onChange }: CheckboxProps) {
    return (
        <div className="items-top flex spa
    ce-x-2 my-1">
            <Checkbox id={id} className="mr-4 cursor-pointer" checked={checked} onCheckedChange={(cek) => { onChange(id, Boolean(cek)) }} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={id}
                    className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    <h4>{title}</h4>
                </label>
                <p className="text-sm text-muted-foreground mb-2">
                    {description}
                </p>
            </div>
        </div>
    )
}
