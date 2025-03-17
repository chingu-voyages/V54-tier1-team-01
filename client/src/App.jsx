import "./App.css";
<<<<<<< HEAD
import InputSection from "./components/InputSection";
=======
import InputAreaBlock from "./components/InputAreaBlock";
import Navbar from "./components/Navbar";
>>>>>>> 6a48cce3930867beed768115b5bd9a15556ee267

function App() {
  return (
    <>
<<<<<<< HEAD
      <InputSection />
=======
      <Navbar />
      <InputAreaBlock />
      <div>
        <h1 class='text-3xl font-bold underline'>Hello world!</h1>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 6a48cce3930867beed768115b5bd9a15556ee267
    </>
  );
}

export default App;
