import React
 from 'react';
import './App.css';
import FruitBlock
  from "./Components/FruitBlock";
import Form
    from "./Components/Form";

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
            <Form />
        </section>
      </main>
    </>
  );
}

export default App;
