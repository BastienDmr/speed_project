import "./Card.css";

function Card({ vin, updateWines, wines }) {
  const handleWine = () => {
    const updatedWines = wines.map((wine) =>
      wine.id === vin.id ? { ...wine, nb: wine.nb + 1 } : wine
    );
    updateWines(updatedWines);
  };

  return (
    <article>
      <img src={vin.photo} alt={vin.name} />
      <p>{vin.name}</p>
      <p>Prix: {vin.price}€</p>
      <button onClick={handleWine}>Ajouter au panier</button>
      <p>{vin.nb}</p>
    </article>
  );
}

export default Card;
