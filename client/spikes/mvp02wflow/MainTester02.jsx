import { useState } from "react";
import ScenarioSection from "./ScenarioSection";
import InputSection from "./InputSection";
import TypedStringComponent from "./TypedString";
import PROMPTS from "../data/geminiPromptDescriptionInfo";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";

export default function MainTesterComponent(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [scene, setScene] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const stateSetters = {setValue:setScene, setError:setError, setLoading:setLoading};

   function handleSubmitScenarioAbout(e) {
      e.preventDefault();
      setLoading(true);
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
      let initialPrompt = PROMPTS.onMountScenarioPrompt(formJson['sceneAbout']);
      console.log(initialPrompt);
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
                <InputSection scene={scene}/>
              </>
            }
          </>
        );
    }
    /* otherwise, return the first input area to get the scenario topic from the user */
    return (<>
      {loading && <p>Loading...</p>}
      {!loading && !scene &&
    (<div>
        <h1>Welcome, prompt engineer!</h1>
        <p>There is no best way to learn than doing. This is what this app is about! With this app you will be learn by trying to make a Pentagram prompt for an scenario created by the AI agent. You will be asked to create prompts based on the Pentagram framework for that scenario, and the AI will tell you how good your prompt is!</p>
        <p>It is simple:</p>
          <ul>
            <li>Select a topic for the scenario (keep it empty if you want a random one)</li>
            <li>Once you get the scenario, read it carefully!</li>
            <li>Suggest some possible prompts for each of the components of the Pentagram framework</li>
            <li>Submit and get an evaluation for the same AI!</li>
          </ul>
        <p>Let's us know what your scenario should be about...</p>
        <br />
        <TypedStringComponent />
        <form method="post" onSubmit={handleSubmitScenarioAbout}>
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