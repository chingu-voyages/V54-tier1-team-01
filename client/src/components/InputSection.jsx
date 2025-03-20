import { useState } from "react";
import InputAreaBlock from "./InputAreaBlock";
import ResultBlock from "./ResultBlock";
import generateGeminiContent from "../js/apis/api";

/*Section 1*/

export default function InputSection(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let [assessment, setAssessment] = useState(null);
  let forAssessmentPrompt = `
  You have been previously asked to formulate the following task and scenario for a student: ${props.scene}.
  Now it is time to evaluate the prompts made by the student. Provide a concise evaluation in markdown format of no more than 3 sentences per component of the Pentagram prompt framework given by the student:
  `

function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Read the form data
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    forAssessmentPrompt = forAssessmentPrompt+ +' Persona: '+formJson['Persona']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Context: '+formJson['Context']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Task: '+formJson['Task']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Output: '+formJson['Output']+'.\n';
    forAssessmentPrompt = forAssessmentPrompt+ +' Constraints: '+formJson['Constraints']+'.\n';
    const responseGemini = async function(prompt){
      try{
        let response = await generateGeminiContent(prompt);
        setAssessment(response());
      }catch(e){
        setError(true)
      }finally{
        setLoading(false);
      }
    };
    console.log(forAssessmentPrompt)
    responseGemini(forAssessmentPrompt);
    // if(formData){
    //   const formJson = Object.fromEntries(formData.entries());
    //   console.log("formJson", formJson);
    //   //printFetchedAssessment(props.scene);
    // }
  }

  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
      <form method="post" onSubmit={handleSubmit} className='p-10 md:p-20'>
        <InputAreaBlock id='1' name='Persona' text='Explain your role...' />
        <InputAreaBlock id='2' name='Context' text='Provide background information...'/>
        <InputAreaBlock id='3' name='Task' text='Define what information you need...'/>
        <InputAreaBlock id='4' name='Output' text='Define the format and details of the response...'/>
        <InputAreaBlock id='5' name='Constraints' text='Limitations and guidelines that should be considered...'/>
        <input type='submit' value='submit' className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer' />
      </form>
      <ResultBlock assessment={assessment}/>
    </>
  );
}
