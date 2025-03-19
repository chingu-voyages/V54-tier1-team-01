import { useState } from "react";
import InputAreaBlock from "./InputAreaBlock";
<<<<<<< HEAD
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";
import DESCRIPTION from "../data/InputDescriptionInfo";
import PROMPTS from "../data/geminiPromptDescriptionInfo";

/*Section 1*/
export default function InputSection(props) {
  //state setters
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let [assessment, setAssessment] = useState(null);
  
  //state setters collection
  const stateSetters = {setValue:setAssessment, setError:setError, setLoading:setLoading};

  // prompt
  let forAssessmentPrompt = PROMPTS.onSubmissionPrompt(props.scene);  

  /*Form handling function*/
  const handleSubmit = (event) => {
=======
import ResultBlock from "./ResultBlock";
import {printFetchedAssessment} from "../js/apis/api";

/*Section 1*/

export default function InputSection(props) {

function handleSubmit(event) {
    // Prevent the browser from reloading the page
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)
    event.preventDefault();

    // Read the form data
    const form = event.currentTarget;
    const formData = new FormData(form);
<<<<<<< HEAD
   
    //convert to JS object for easy extraction
    const formJson = Object.fromEntries(formData.entries());

    //complete prompt with data submitted by user
    forAssessmentPrompt = forAssessmentPrompt+ +' Persona: '+formJson['Persona']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Context: '+formJson['Context']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Task: '+formJson['Task']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Output: '+formJson['Output']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Constraints: '+formJson['Constraints']+'.\n';

    // make request to Gemini and set the states
    //responseGeminiAndStateSetting(prompt, stateSetters)
  };
=======
    if(formData){
      const formJson = Object.fromEntries(formData.entries());
      console.log("formJson", formJson);
      printFetchedAssessment(props.scene);
    }
  }
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)

  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
<<<<<<< HEAD
      <form
        name='prompt-form'
        method='POST'
        onSubmit={handleSubmit}
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
          className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'
        >
          Submit
        </button>
=======
      <form method="post" onSubmit={handleSubmit} className='p-10 md:p-20'>
        <InputAreaBlock id='1' name='Person:' text='Explain your role...' />
        <InputAreaBlock id='2' name='Context:' text='Provide background information...'/>
        <InputAreaBlock id='3' name='Task:' text='Define what information you need...'/>
        <InputAreaBlock id='4' name='Output:' text='Define the format and details of the response...'/>
        <InputAreaBlock id='5' name='Constraints:' text='Limitations and guidelines that should be considered...'/>
        <input type='submit' value='submit' className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer' />
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)
      </form>
      <ResultBlock />
    </>
  );
}
