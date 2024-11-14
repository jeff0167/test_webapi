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
   }, []);

  function d(){
    setYo(yo + 1);
  }

  // VERY IMPORTANT
  // add the question mark before mapping, it might be null/undefined before trying to map
  function MyComponent() {
    return (
      <div>
        {data.entities?.map((entity, index) => (
          <div key={index}>
            <h2>{entity.primaryTitle}</h2>
            <p>{entity.titleType}</p>
            <img src={entity.posterUrl} alt={entity.primaryTitle} />
          </div>
        ))}
      </div>
    );
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

         <p>{data.currentPage}</p> 
         <p>{data.nextPage}</p> 
         <p>{data.previousPage}</p> 
         <p>{data.numberOfPages}</p> 
         <p>{data.numberOfEntities}</p> 

          <p>looke here</p>
          <div>
            {MyComponent()} 
          </div>
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
