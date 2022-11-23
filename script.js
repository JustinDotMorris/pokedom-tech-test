import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
// const backgroundColour = document.querySelector("$color-foreground")

const renderCard = (pokemonArray) => { 
    let htmlString = "";

    pokemonArray.forEach((pokemon) => {
        htmlString += `
        <section>
            <img src="${pokemon.sprite}" >    
            <h1>${pokemon.name}</h1>
            <p>${pokemon.types}</p>
        </section>
        `;
    });

    cardContainer.innerHTML = htmlString;
    document.getElementById(renderCard).style.color="blue";

};
function changeCard() {
    
}
renderCard(pokemonArray);