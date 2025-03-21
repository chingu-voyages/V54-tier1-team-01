import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINIAPI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateGeminiContent(prompt) {
  const result = await model.generateContent(prompt);
  //console.log(result.response.text()); //E: it is a function :( 
  return result.response.text; // return the response
}

export default async function responseGemini(prompt, stateSetters){
    let {setValue, setError, setLoading} = {...stateSetters} 
    try{
        let response = await generateGeminiContent(prompt);
        setValue(response());
      }catch(e){
        setError(true)
      }finally{
        setLoading(false);
      }
    };