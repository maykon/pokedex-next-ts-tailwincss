import React from "react"
import Container from "../components/Container"
import PokemonList from "../components/PokemonList"
import Title from "../components/Title"
import getAllPokemons from "../services/api";

const Pokedex = ({pokemons}) => (
  <Container>
    <Title>Pokedex</Title>
    <PokemonList 
      pokemons={pokemons}
    />
  </Container>
)

export async function getStaticProps() {
  const pokemons = await getAllPokemons();
  return {
    props: {
      pokemons,
    },
  } 
}

export default Pokedex
