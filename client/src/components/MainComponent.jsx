import { useState, useEffect } from "react";
import ScenarioSection from "./ScenarioSection";
import InputSection from "./InputSection";
import PROMPTS from "../data/geminiPromptDescriptionInfo";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";

export default function MainComponent(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let [scene, setScene] = useState(null);

    const stateSetters = {setValue:setScene, setError:setError, setLoading:setLoading};

    let initialPrompt = PROMPTS.onMountScenarioPrompt();

    useEffect(()=>{
        //let initialPrompt = "who painted the Mona Lisa";
    
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
              <InputSection scene={scene}/>
            </>
          }
        </>
      );
}