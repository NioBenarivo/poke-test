import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from "@apollo/client";
import { usePokemon } from '@context/pokemonContext';
import Button from '@components/Button';
import PokemonCard from '@components/PokemonCard';
import Navigation from '@components/Navigation';
import ErrorPage from '@components/ErrorPage';
import Loader from '@components/Loader';
import { section, pokemonWrapper } from '@styles/pokemonStyles';
import { QUERY_POKEMON_LIST } from '@queries/index';

export default function PokemonList() {
  const { state: { capturedPokemon } } = usePokemon();
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  const { data = {}, loading, error, fetchMore } = useQuery(QUERY_POKEMON_LIST, {
    variables: {
      offset: 0,
      limit,
    }
  });

  if (error) {
    return <ErrorPage error={error} />
  }

  const pokemonArr = data.pokemon_v2_pokemon || [];

  const ownedTotal = val => {
    return capturedPokemon.filter(obj => obj.name === val).length;
  }

  const handleIncrementOffset = () => {
    const pokemonLength = pokemonArr.length;
    fetchMore({
      variables: {
        offset: pokemonLength,
        limit: 10,
      },
    }).then(fetchMoreResult => {
      setLimit(pokemonLength + fetchMoreResult.data.pokemon_v2_pokemon.length);
    });
  }

  return (
    <div className={section}>
      <Navigation />
      <div className={pokemonWrapper}>
        {loading && <Loader />}
        {pokemonArr.length > 0 && pokemonArr.map((pokemon, index) => {
          const pkID = pokemon.id || 0;
          const pokemonName = pokemon.name || '';
          const pokemonTypes = pokemon.pokemon_v2_pokemontypes || [];
          const pokemonWeight = pokemon.weight || 0;
          const pokemonHeight = pokemon.height || 0;
          const owned = ownedTotal(pokemonName);
          const dataProps = {
            pkID,
            name: pokemonName,
            types: pokemonTypes,
            weight: pokemonWeight,
            height: pokemonHeight,
          }
          return (
            <PokemonCard 
              key={`pokemon-${index}`}
              data={dataProps}
              owned={owned}
              list
              onClick={() => router.push(`/pokemon/${pkID}`)}
            />
          )
        })}
      </div>
      <Button onClick={() => handleIncrementOffset()}>Next Pokemon</Button> 
    </div>
  );
}
