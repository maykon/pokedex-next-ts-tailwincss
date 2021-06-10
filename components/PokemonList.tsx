import React from "react";
import tw from "tailwind-styled-components"
import PokemonItem, { IPokemon } from "./PokemonItem";

const Grid = tw.div`
grid
grid-cols-320
gap-4
w-full
`
type Props = {
  pokemons: IPokemon[]
}

const PokemonList = ({ pokemons }: Props) => 
(<Grid>
  {pokemons.map(({id, name, types}, index) => (
    <PokemonItem
      key={index}
      id={id}
      name={name}
      types={types}
    />
  ))}
</Grid>);

export default PokemonList;