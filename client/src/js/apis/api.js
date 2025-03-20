import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateGeminiContent(prompt) {
  const result = await model.generateContent(prompt);
  //console.log(result.response.text()); //E: it is a function :( 
  return result.response.text; // return the response
}

// async function printGeminiContent(prompt) {
//     try{
//         const fetchedScenario = await generateGeminiContent(prompt);
//         console.log(fetchedScenario);
//         return fetchedScenario;
//     }catch (e){
//         return e;
//     }
// }