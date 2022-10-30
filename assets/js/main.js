const pokemonNumber = document.querySelector('.number');
const pokemonImage = document.querySelector('.image');
const pokemonName = document.querySelector('.name');
const pokemonType = document.querySelector('.type');
const pokemonWeight = document.querySelector('.weight');
const buttonPrev = document.querySelector('#iconLeft');
const buttonNext = document.querySelector('#iconRight');
let searchPokemon = 1;






const fetchPokemon = async (pokemon) => {
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await apiResponse.json();
  return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonNumber.innerHTML = `#${data.id}`;
    pokemonName.innerHTML = `Name: ${data.name}`.toLocaleUpperCase();
    pokemonImage.src = data['sprites']['other']['dream_world']['front_default'];
    pokemonType.innerHTML = `Type: ${data['types'][0]['type']['name']}`.toLocaleUpperCase();
    pokemonWeight.innerHTML = `Weight: ${data.weight}`.toLocaleUpperCase();
    
}


buttonPrev.addEventListener('click', () => {
  searchPokemon -= 1;
  renderPokemon(searchPokemon);
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);


