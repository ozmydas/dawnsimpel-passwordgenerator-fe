import './App.css';
import { Cpu, Ghost, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CheckboxWithText from './components/CheckOption';
import { FormData, PreferenceKey } from "./models/formData";
import { useState } from 'react';


const App = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    preferences: {
      over12: false,
      includeUppercase: true,
      includeNumber: true,
      includeSpecialChars: true,
    },
  })

  /********/

  document.documentElement.classList.add("dark")

  function handleCheckedChange(name: PreferenceKey, isChecked: boolean) {
    console.log("🔥 change id :", name)
    console.log("✅ is checked :", isChecked)

    setFormData(prevFormData => ({
      ...prevFormData,
      preferences: {
        ...prevFormData.preferences,
        [name]: isChecked
      }
    }));
  }

  return (
    <div className='main-container'>
      <div className='bulet-container'>
        <div className='bulet-spin'>
          <div className='blur bulet'>sdsdsdsds</div>
          <div className='blur bulet2'>sdsdsdsds</div>
        </div>
      </div>
      {/* <div className='loader'>
        <div className='ghost-spinner'>
          <span className='ghost'>👻</span>
        </div>
      </div> */}
      <div className="content">
        <h1>D<Ghost className='triangel' />mn <span className='anwriter'>Simple Password Generator</span></h1>
        <p className='my-4 py-4 leading-[2]'>Just for Fun and a Proof of Concept 😁<br /> Made with ⚛️ React + 🌀 Tailwind + 🦀 Rust + ⚡ Supabase</p>
        {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
        {/*  */}
        <div className='flex items-center justify-center my-4'>
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
                {/* <CheckboxWithText id="3" title="Use Abstract Words" description="dolor sit amet" checked={true} onChange={handleCheckedChange} /> */}
              </div>
              <div className='my-4 pt-2'>
                <Button
                  id='btnGenerate'
                  variant="destructive"
                >
                  <div className='flex gap-2 justify-center items-center btn-txt'>
                    <div><Cpu className='btn-icon' /></div> <div> Generate Password</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        {/*  */}
        <div className='p-4 m-4'>
          <Card>
            <CardHeader>
              <CardTitle><h2>Result</h2></CardTitle>
              <CardDescription className='p-4'><h3>Generated Code Will Appear Here <br /><br /><span className='telunjuk'>👇</span></h3></CardDescription>
            </CardHeader>
            <CardContent>
              <h1>************</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
