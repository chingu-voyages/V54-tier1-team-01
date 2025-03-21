import { useState, useEffect } from "react";
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
    
        //responseGeminiAndStateSetting(initialPrompt, stateSetters);
      },
      []);

    return (
        <>
          <InputSection />
        </>
      );
}