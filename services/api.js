const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const getAllPokemons = async () => {
  const pokemonPromises = () =>
    Array(150)
      .fill()
      .map((_, index) =>
        fetch(getPokemonUrl(index + 1)).then((response) => response.json())
      );

  const pokemonList = (pokemons) =>
    pokemons.map(({ id, name, types }) => ({
      id,
      name,
      types: types.map((t) => t.type.name),
    }));

  return Promise.all(pokemonPromises()).then(pokemonList);
};

export default getAllPokemons;
