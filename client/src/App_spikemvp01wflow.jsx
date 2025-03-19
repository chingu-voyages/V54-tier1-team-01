import { useState, useEffect } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import ScenarioComponent from "./components/Scenario";
import InputSection from "./components/InputSection";
import printFecthedScenario from "./js/apis/api";


function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  let [scene, setScene] = useState(null);

  useEffect(()=>{
    setLoading(true);
    printFecthedScenario().then((result) =>{
      const {apiData, error} = result;
      if(apiData && !error){
        setScene(apiData);
        setError(false);
      }

    }).catch((e) => {
      setError(true)
    }
    ).finally(()=>{
      setLoading(false)
    })
  },[]);

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
          <ScenarioComponent scene={scene}/>
          <InputSection />
        </>
      }
    </>
  );
}

export default App;
