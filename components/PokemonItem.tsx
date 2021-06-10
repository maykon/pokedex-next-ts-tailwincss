import tw from "tailwind-styled-components"
import Image from 'next/image'

const Pokemon = tw.div`
rounded-md
flex
flex-col
items-center
justify-center
justify-items-center
p-4
text-gray-600
text-center
cursor-pointer
hover:animate-pulse
`

const PokemonName = tw.h2`
text-xl
font-extrabold
uppercase
mt-4
`

const PokemonType = tw.p`
semibold
`

const PokemonImage = tw.div`
  bg-white  
  bg-opacity-70
  rounded-full
  h-36
  w-36
  flex
  items-center
  justify-center
`;

export interface IPokemon {
  id: number;
  name: string;
  types: string[];
}

const PokemonItem = ({ id, name, types }: IPokemon) => {
  const allTypes = types.map(t=> t.toLowerCase()).join(' | ');
  const baseType = types[0].toLowerCase();
  return (<Pokemon className={baseType}>    
    <PokemonImage>
      <Image 
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={name}
        width={150}
        height={150} />
      </PokemonImage>
      <PokemonName>{String(id).padStart(2, '0')}. {name}</PokemonName>
      <PokemonType>{allTypes}</PokemonType>
  </Pokemon>)
};

export default PokemonItem;

