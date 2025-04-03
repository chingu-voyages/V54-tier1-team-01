import { useState } from "react";
import InputAreaBlock from "./InputAreaBlock";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";
import DESCRIPTION from "../data/InputDescriptionInfo";
import PROMPTS from "../data/geminiPromptDescriptionInfo";

/*Section 1*/

export default function InputSection(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const stateSetters = {setValue:props.setAssessmentFunc, setError:setError, setLoading:setLoading};
  
  let forAssessmentPrompt = PROMPTS.onSubmissionPrompt(props.scene); 

function handleEvaluation(event) {
    // Prevent the browser from reloading the page
     event.preventDefault();

    // Read the form data
    const form = event.currentTarget;
    console.log(form)
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    forAssessmentPrompt = PROMPTS.addPromptComponent(forAssessmentPrompt, ['Persona', 'Context', 'Task', 'Output', 'Constraints'], formJson);
    console.log(forAssessmentPrompt)
    responseGeminiAndStateSetting(forAssessmentPrompt, stateSetters);
  }

  function handleSubmit(event) {
     // Prevent the browser from reloading the page
     event.preventDefault();
     alert('get a response from Gemini from the prompt you just made, without additional evaluation')
  }

  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
      <form
        name='prompt-form'
        method='POST'
        onSubmit={handleEvaluation}
        className='p-10 md:p-20'
      >
        {DESCRIPTION.map((item, index) => (
          <InputAreaBlock
            key={index}
            id={index}
            fieldName={item.label}
            fieldText={item.text}
          />
        ))}
        <button
          type='submit'
          name='action'
          value='evaluate'
          className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'
        >
          Evaluate your Prompt
        </button>
        <button
          type='button'
          name='action'
          value='submit'
          onClick={handleSubmit}
          className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'
        >
          Submit your Prompt
        </button>
      </form>
     
    </>
  );
}