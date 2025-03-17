import { useState } from "react";
import "./App.css";
import InputAreaBlock from "./components/InputAreaBlock";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    setLoading(true);

    // Mocked async API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      setApiData(`Data for option: ${option}`);
      setLoading(false);
    } catch (error) {
      console.error("API call failed:", error);
      setLoading(false);
      setApiData("Error fetching data.");
    }
  };

  const handleBackClick = () => {
    setSelectedOption(null);
    setApiData(null);
  };

  if (selectedOption && apiData) {
    return (
      <div>
        <p>{apiData}</p>
        <InputAreaBlock />
        <button onClick={handleBackClick}>Back</button>
      </div>
    );
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
