import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import useStore from './Store';

function App() {
   const [yo, setYo] = useState(0);

   const { bears, person, data, getData, increasePopulation } = useStore((state) => state); // get whole state
   // const increasePopulation = useStore(state => state.increasePopulation); // get single state
   // when state updates, any component that is subscribed to it, like here, that component will rerender, so be aware of that for performance
 
   useEffect(() => {
     getData();
     console.log(data);
   }, []);

  function d(){
    setYo(yo + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={d}>click me</button>
        <p>{yo}</p>

        <p>{data[0]}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
