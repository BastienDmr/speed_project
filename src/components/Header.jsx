import React from "react";
import "./Header.css";

function Header({ wines }) {
  const bottles = wines.reduce(
    (total, wine) => total + wine.nb * wine.price,
    0
  );

  return (
    <header>
      <a href="">Panier&ensp;{bottles}€</a>
      <h1>Maison Bastien & Co</h1>
      <p>Votre spécialiste vin depuis 1970</p>
    </header>
  );
}

export default Header;
