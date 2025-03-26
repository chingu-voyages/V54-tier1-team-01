import { useState } from "react";
import ScenarioSection from "./ScenarioSection";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";
import TypedStringComponent from "./TypedString";
import PROMPTS from "../data/geminiPromptDescriptionInfo";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";

export default function MainTesterComponent(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [scene, setScene] = useState(null);
    const [assessment, setAssessment] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const stateSetters = {setValue:setScene, setError:setError, setLoading:setLoading};

   function setAssessmentFunc(value){
     setAssessment(value);
   }

   function handleSubmitScenarioAbout(e) {
      e.preventDefault();
      setLoading(true);
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
      let initialPrompt = PROMPTS.onMountScenarioPrompt(formJson['sceneAbout']);
      //console.log(initialPrompt);
      responseGeminiAndStateSetting(initialPrompt, stateSetters);
    }

    /* show ScenarioSection and InputSection if Gemini responded with an scenario text... */
    if(scene){
      return (
          <>
            {
              loading ?
              <h1>loading...</h1>
              :
              error ?
              <h1>Something went wrong. Please try again later</h1>
              :
              <>
                <ScenarioSection scene={scene}/>
                <InputSection scene={scene} setAssessmentFunc={setAssessmentFunc}/>
                <ResultSection assessment={assessment}/>
              </>
            }
          </>
        );
    }
    /* otherwise, return the first input area to get the scenario topic from the user */
    return (<>
      {loading && <p>Loading...</p>}
      {!loading && !scene &&
    (<div className="grid grid-rows-[50px_minmax(200px,1fr)_100px]">
        <h1 className="h-20 text-xl md:text-3xl font-bold text-black-300">Welcome, prompt engineer!</h1>
        <div className="p-10">
        <p className="text-left">There is no best way to learn than by doing. This is what this app is about! With this app you will learn by making a Pentagram prompt for an scenario created by the AI agent. You will be asked to create prompts based on the Pentagram framework for that scenario, and the AI will tell you how good your prompt was!</p>
        <p className="text-left">It is simple:</p>
        <div className="flex justify-center">
        <ul className="self-center w-185 font-medium text-left text-lg/8 list-disc">
          <li className="">Suggest a topic for the scenario (keep it empty if you want a random one)</li>
          <li className="">Once you get the scenario, read it carefully!</li>
          <li className="">Construct prompts for each of the components of the Pentagram framework</li>
          <li className="">Submit... and get an evaluation from the AI <span className="italic">self!</span></li>
        </ul>
        </div>
        <p className="p-2 text-lg"><span className="italic">My scenario is about </span><span className="inline-block w-100 h-12 p-2 border rounded"><TypedStringComponent /></span></p>
        </div>
        
        <form className="" method="post" onSubmit={handleSubmitScenarioAbout}>
          <input className='w-small h-12 p-2 border rounded' name="sceneAbout" type="text" />
          <button
          type='submit'
          className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'
        >
          Get an scenario!
        </button>
        </form>
      </div>)}
      </>);
}