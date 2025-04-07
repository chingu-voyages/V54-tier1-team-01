import '../style/MainComponent.css';
import { useState, useEffect } from "react";
import InputSection from "./InputSection";
import ScenarioSection from "./ScenarioSection";
import PROMPTS from "../data/geminiPromptDescriptionInfo";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";

export default function MainComponent(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let [scene, setScene] = useState(null);

    const stateSetters = {setValue:setScene, setError:setError, setLoading:setLoading};

    useEffect(()=>{
        //let initialPrompt = "who painted the Mona Lisa";//for testing purposes only
        const abouts = [null, 'software development plan', 'public health', 'pharmaceutical and drug development', 'logistics', 'urbanization of a sector of a city', 'community work', 'contingency plan against natural disasters', 'education program'];
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
            <main className="main">
              <ScenarioSection scene={scene}/>
              <InputSection scene={scene}/>
            </main>
          }
        </>
      );
}