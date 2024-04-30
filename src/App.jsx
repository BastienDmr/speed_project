import "./App.css";
import Header from "./components/Header";
import data from "./assets/data/data";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [wines, setWines] = useState(data);

  const updateWines = (updatedWines) => {
    setWines(updatedWines);
  };

  return (
    <>
      <Header wines={wines} />
      <section className="Container">
        {wines.map((element) => (
          <Card
            vin={element}
            key={element.id}
            updateWines={updateWines}
            wines={wines}
          />
        ))}
      </section>
    </>
  );
}

export default App;
