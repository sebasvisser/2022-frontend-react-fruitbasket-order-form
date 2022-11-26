import React
 from 'react';
import './App.css';
import FruitBlock
  from "./Components/FruitBlock";

function App() {

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <main>
        <section>
      {/*Fruitmand*/}
          <FruitBlock />
        </section>

        <section>
      {/*formulier*/}
        </section>
      </main>
    </>
  );
}

export default App;
