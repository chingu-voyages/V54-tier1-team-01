import { useState, useEffect } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import ScenarioSection from "./components/ScenarioSection";
import InputSection from "./components/InputSection";
import generateGeminiContent from "./js/apis/api";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let [scene, setScene] = useState(null);
  let initialPrompt = `
  You are a teacher teaching a student to learn how to make prompts in the pentagram framework. Pentagram framework for making a prompt should consists in 5 parts: Persona (the role that the AI has to assume), a Task, the Context of the task, a desired Output format and some Constraints to the output. Your audience is users who are learning prompt engineering who don't know how to make requests based on the pentagram framework. Your task is to provide those students a either case or an scenario for which they should make either a full prompt or just a component of a prompt that must be made under the pentagram framework. The resulting prompt based on the scenario provided by you would then be sent to an AI which in turn will provide advice about the quality of that prompt. So it is a training that goes in that order:
  1. you provide the scenario and ask to make either one, several or a full prompt for that scenario based on pentagram framework
  2. the user follows your instructions, make the prompt and send that to you
  3. you provide a review, like a teacher, of the quality of the prompt based on the pentagram framework
  Do the step one mentioned above. Present the result in markdown format.
  `


  useEffect(()=>{
    //let initialPrompt = "who painted the Mona Lisa";
    const responseGemini = async function(prompt){
      try{
        let response = await generateGeminiContent(prompt);
        setScene(response());
      }catch(e){
        setError(true)
      }finally{
        setLoading(false);
      }
    };
    responseGemini(initialPrompt);
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
