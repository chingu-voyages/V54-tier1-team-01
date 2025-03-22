/* call vertexAI safeguarded by Firebase to protect (limit) the use of the gemini api */
import { vertexAIModel } from '../../../config/vertexAIConfig';

async function generateGeminiContent(prompt) {

  const result = await vertexAIModel.generateContent(prompt); // use vertexAI model to ask for responses instead of directly calling gemini
  return result.response.text; // return the response; OBS: text is a FUNC
}

export default async function responseGeminiAndStateSetting(prompt, stateSetters){
    let {setValue, setError, setLoading} = {...stateSetters} //unpack stateSetters
    try{
        let response = await generateGeminiContent(prompt); //call Gemini to get a response
        setValue(response()); //if a response, set value
      }catch(e){
        setError(true); //handle error 
      }finally{
        setLoading(false); //always stop loading animation
      }
    };