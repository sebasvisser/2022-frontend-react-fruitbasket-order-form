import React, {
  useState
} from 'react';
import './App.css';
import FruitBlock
  from "./Components/FruitBlock";


function App() {
  // States of the Fruit
  const [strawberryValue, setStrawberryValue] = useState(0);
  const [bananaValue, setBananaValue] = useState(0);
  const [appleValue, setAppleValue] = useState(0);
  const [kiwiValue, setKiwiValue] = useState(0);

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
