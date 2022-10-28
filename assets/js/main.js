const pokemonNumber = document.querySelector('.number');
const pokemonImage = document.querySelector('.image');
const pokemonName = document.querySelector('.name');



const fetchPokemon = async (pokemon) => {
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await apiResponse.json();
  return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonNumber.innerHTML = `#${data.id}`;
    pokemonName.innerHTML = `Name: ${data.name}`;
    pokemonImage.src = data['sprites']['other']['dream_world']['front_default'];
}

renderPokemon('7');