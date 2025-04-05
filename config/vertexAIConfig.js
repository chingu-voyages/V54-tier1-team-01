/* Firebase and VertexAI configuration (instructions on the Firebase Console) */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getVertexAI, getGenerativeModel } from "firebase/vertexai"; //vertexAI

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe5RtI_RULOgTWBG3PeKMYZKFI3BlF8bk",
  authDomain: "geminisecuritychingu54-1-1-a.firebaseapp.com",
  projectId: "geminisecuritychingu54-1-1-a",
  storageBucket: "geminisecuritychingu54-1-1-a.firebasestorage.app",
  messagingSenderId: "905864925753",
  appId: "1:905864925753:web:de3b8943550c811e33b3e8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize the Vertex AI service
const vertexAI = getVertexAI(firebaseApp);

// Initialize the generative model with a model that supports your use case
export const vertexAIModel = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });
