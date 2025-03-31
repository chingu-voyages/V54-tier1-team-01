import { useState, useEffect } from "react";
import ScenarioSection from "./ScenarioSection";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";
import PROMPTS from "../data/geminiPromptDescriptionInfo";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";

export default function MainComponent(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [scene, setScene] = useState(null);
    const [assessment, setAssessment] = useState(null);

    const stateSetters = {setValue:setScene, setError:setError, setLoading:setLoading};

    function setAssessmentFunc(value){
      setAssessment(value);
    }

    useEffect(()=>{
        //let initialPrompt = "who painted the Mona Lisa";
        const abouts = [null, 'software development plan', 'urbanization of a sector of a city', 'community work', 'contingency plan against natural disasters', 'education program'];
        const indx =Math.floor(Math.random()*abouts.length);
        let initialPrompt = PROMPTS.onMountScenarioPrompt(abouts[indx]);    
        responseGeminiAndStateSetting(initialPrompt, stateSetters);
      },
      []);

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