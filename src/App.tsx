import './App.css';
import { Ghost } from "lucide-react"
import { GeneratorFormProvider } from './context/GeneratorFormContext';
import CardForm from './components/CardForm';
import CardResult from './components/CardResult';


const App = () => {

  document.documentElement.classList.add("dark")

  return (
    <div className='main-container'>
      <div className='bulet-container'>
        <div className='bulet-spin'>
          <div className='blur bulet'>teal</div>
          <div className='blur bulet2'>purple</div>
        </div>
      </div>
      {/* <div className='loader'>
        <div className='ghost-spinner'>
          <span className='ghost'>👻</span>
        </div>
      </div> */}
      <div className="content">
        <h1>D<Ghost className='triangel' />mn Simple <span className='anwriter'> Password Generator</span></h1>
        <p className='my-4 py-4 leading-[2]'>Just for Fun and a Proof of Concept 😁<br /> Made with ⚛️ React + 🌀 Tailwind + 🦀 Rust + ⚡ Supabase</p>
        <div className='flex items-center justify-center my-4'>

          <GeneratorFormProvider>
            <CardForm />
          </GeneratorFormProvider>

        </div>
        <div className='p-4 m-4'>
          <CardResult />
        </div>
      </div>
    </div>
  );
};

export default App;
