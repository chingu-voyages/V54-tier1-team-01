import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scenarioData, setScenarioData] = useState(null);
  const [fetchedData, setFetchedData] = useState('');

  // function fecthFunc(form, setting){
  //   return new Promise(resolve => setTimeout(() => {
  //                 console.log("in the fecth");
  //                 // Or you can work with it as a plain object:
  //                 setting("This is the assessment to the prompt");
  //                 return 1;
  //               }, 2000));

  // }

  async function asyncCheckFetch() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    const pikachuJSON = await response.json();
  
    return (
      `Look mum, no callbacks! ` +
      `Pokémon #${pikachuJSON.id} is ${pikachuJSON.name}`
    );
  }

  async function printFecthedMessage() {
    const fetchedMessage = await asyncCheckFetch();

    // Prints "Look mum, no callbacks! Pokémon #25 is pikachu"
    console.log(fetchedMessage);
}

  
  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    //fetch('/some-api', { method: form.method, body: formData });
    if(formData){
      const formJson = Object.fromEntries(formData.entries());
     //console.log(form);
      console.log("formJson", formJson);
      //let gottenData = await fecthFunc(formData, setFetchedData);
      //let gottenN = await gottenData;
      //console.log(gottenN);
      printFecthedMessage();
    }
    console.log(11111);
  }

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    setLoading(true);

    // Mocked async API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      setScenarioData(`Data for option: ${option}`);
      setLoading(false);
    } catch (error) {
      console.error("API call failed:", error);
      setLoading(false);
      setScenarioData("Error fetching data.");
    }
  };

  const handleBackClick = () => {
    setSelectedOption(null);
    setScenarioData(null);
  };

  if (selectedOption && scenarioData) {
    return (
      <div>
        <p>{scenarioData}</p>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Text input:
          </label>
          <InputArea /> 
          {fetchedData && <p>{fetchedData}</p>}
          <button type="reset">Reset form</button>
          <button type="submit">Submit form</button>
        </form>
        <button onClick={handleBackClick}>Back</button>
      </div>
    );
    //<input name="myInput" defaultValue="Some initial value" />
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !selectedOption && (
        <div>
          <button onClick={() => handleOptionClick('Scenario for prompting Personas')}>Practice making Personas</button>
          <button onClick={() => handleOptionClick('Scenario for prompting Context')}>Practice Making Contexts</button>
          <button onClick={() => handleOptionClick('Scenario for prompting Tasks')}>Practice Making Tasks</button>
        </div>
      )}
    </div>
  );
}

export default App;
