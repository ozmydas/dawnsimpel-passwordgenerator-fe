"use client"
import { useContext, useState } from "react";
import { GeneratorFormContext } from "../context/GeneratorFormContext";
import { PreferenceKey } from "../models/formData";
import CheckboxWithText from "./CheckOption";
import { Button } from "@/components/ui/button";
import { Cpu, Settings, LoaderIcon, LoaderCircle } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { usePasswordGeneratorService } from "../services/PasswordGeneratorService";


export default function CardForm() {
    const context = useContext(GeneratorFormContext);

    if (!context) {
        throw new Error("MyForm must be used within a FormProvider");
    }

    const { formData, updateField } = context;
    const [isLoading, setLoading] = useState(false);
    const { submit } = usePasswordGeneratorService();

    function handleCheckedChange(name: PreferenceKey, isChecked: boolean) {
        console.log("🔥 change id :", name)
        console.log("✅ is checked :", isChecked)

        updateField(name, isChecked)
    }

    async function handleSubmit() {
        console.log("🚀 take off :", formData)

        setLoading(prev => !prev)

        await submit(formData)

        setTimeout(() => {

            setLoading(prev => !prev)
        }, 200);
    }

    return (
        <Card className='min-w-[640px] max-w-[820px] text-center'>
            <CardHeader>
                <CardTitle><h2><Settings className='icon' /> Password Options</h2></CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-2 text-left">
                    <CheckboxWithText id="over12" title="Use Over 12 Characters" description="dolor sit amet" checked={formData.preferences.over12} onChange={handleCheckedChange} />
                    <CheckboxWithText id="includeUppercase" title="Include Uppercase" description="dolor sit amet" checked={formData.preferences.includeUppercase} onChange={handleCheckedChange} />
                    <CheckboxWithText id="includeNumber" title="Include Number" description="dolor sit amet" checked={formData.preferences.includeNumber} onChange={handleCheckedChange} />
                    <CheckboxWithText id="includeSpecialChars" title="Include Special Characters" description="dolor sit amet" checked={formData.preferences.includeSpecialChars} onChange={handleCheckedChange} />
                    <CheckboxWithText id="nonEnglishWord" title="Use Non-English Word" description="dolor sit amet" checked={formData.preferences.nonEnglishWord} onChange={handleCheckedChange} />
                </div>
                <div className='my-4 pt-2'>
                    {!isLoading ? <Button
                        id='btnGenerate'
                        variant="destructive"
                        onClick={handleSubmit}
                    >
                        <div className='flex gap-2 justify-center items-center btn-txt'>
                            <div><Cpu className='btn-icon' /></div> <div> Generate Password</div>
                        </div>
                    </Button> : <Button
                        id='btnGenerate'
                        variant="destructive"
                        disabled
                    >
                        <div className='flex gap-2 justify-center items-center btn-txt'>
                            <div className="animate-spin "><LoaderCircle className='spun' /></div> <div> Loading</div>
                        </div>
                    </Button>}

                </div>
            </CardContent>
        </Card>
    )
}
