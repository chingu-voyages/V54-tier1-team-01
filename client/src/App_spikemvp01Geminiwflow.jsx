import { useState, useEffect } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import ScenarioSection from "./components/ScenarioSection";
import InputSection from "./components/InputSection";
import PROMPTS from "./data/geminiPromptDescriptionInfo";
import responseGemini from "./js/apis/api";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let [scene, setScene] = useState(null);
  
  const stateSetters = {setValue:setScene, setError:setError, setLoading:setLoading};
  
  let initialPrompt = PROMPTS.onMountScenarioPrompt();


  useEffect(()=>{
    //let initialPrompt = "who painted the Mona Lisa";

    responseGemini(initialPrompt, stateSetters);
  },
  []);

  return (
    <>
      <HeaderComponent />
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

export default App;
