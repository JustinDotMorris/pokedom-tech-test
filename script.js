import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

// console.log(pokemonArray);

const renderCard = (pokemonArray) => { 
    let htmlString = "";

    pokemonArray.forEach((pokemon) => {
        htmlString += `
        <section>
            <img>${pokemon.sprite}</img>    
            <h1>${pokemon.name}</h1>
        </section>
        
        `;
    });

    cardContainer.innerHTML = htmlString;

};
renderCard(pokemonArray);