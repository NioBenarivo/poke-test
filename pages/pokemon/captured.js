import { usePokemon, RELEASE_POKEMON } from '@context/pokemonContext'
import Navigation from '@components/Navigation';
import PokemonCard from '@components/PokemonCard'
import { pokemonWrapper, section } from '@styles/pokemonStyles';

export default function PokemonList() {
  const { dispatch, state: { capturedPokemon } } = usePokemon()

  const handleRelease = pokemon => {
    dispatch({
      type: RELEASE_POKEMON,
      value: pokemon
    })
  }

  return (
    <div className={section}>
      <Navigation />
      <div className={pokemonWrapper}>
        {capturedPokemon.map((pokemon, index) => {
          return (
            <PokemonCard 
              key={`pokemon-${index}`}
              data={pokemon}
              onRelease={() => handleRelease(pokemon)}
            />  
          )
        })}
      </div>
    </div>
  );
}