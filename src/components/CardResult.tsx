import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { passwordStore } from "../stores/passwordStore";

export default function CardResult() {
    
    
    const { password } = passwordStore();

    return (
        <Card>
            <CardHeader>
                <CardTitle><h2>Result</h2></CardTitle>
                <CardDescription className='p-4'>
                    <h3>Generated Password Will Appear Here <br /><br /><span className='telunjuk'>👇</span></h3>
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Show generated password or a placeholder */}
                <h1>{password}</h1>
            </CardContent>
        </Card>
    );
}
