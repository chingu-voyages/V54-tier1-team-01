import InputAreaBlock from "./InputAreaBlock";
import responseGeminiAndStateSetting from "../js/apis/geminiAPI";
import DESCRIPTION from "../data/InputDescriptionInfo";
import PROMPTS from "../data/geminiPromptDescriptionInfo";

/*Section 1*/
export default function InputSection() {
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
    event.preventDefault();

    // Read the form data
    const form = event.currentTarget;
    const formData = new FormData(form);
   
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

  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
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
      </form>
    </>
  );
}
