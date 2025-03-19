import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import ScenarioComponent from "./components/Scenario";
import InputSection from "./components/InputSection";


function App() {
  const [loading, setLoading] = useState(false);  

  return (
    <>
      <HeaderComponent />
      <InputSection />
    </>
  );
}

export default App;
