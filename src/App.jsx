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
        <h2>Nos rouges :</h2>
        <div>
          {wines
            .filter((element) => element.type === "Rouge")
            .map((filterWine) => (
              <Card
                vin={filterWine}
                key={filterWine.id}
                updateWines={updateWines}
                wines={wines}
              />
            ))}
        </div>
        <h2>Nos Blancs:</h2>
        <div>
          {wines
            .filter((element) => element.type === "Blanc")
            .map((filterWine) => (
              <Card
                vin={filterWine}
                key={filterWine.id}
                updateWines={updateWines}
                wines={wines}
              />
            ))}
        </div>
        <h2>Nos rosés:</h2>
        <div>
          {wines
            .filter((element) => element.type === "Rosé")
            .map((filterWine) => (
              <Card
                vin={filterWine}
                key={filterWine.id}
                updateWines={updateWines}
                wines={wines}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
