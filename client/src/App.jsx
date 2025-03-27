import "./App.css";
import HeaderComponent from "./components/Header";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <>  
      <HeaderComponent />
      <main>
        <MainComponent />
      </main>
      <FooterComponent />
    </>

  );
}

export default App;
