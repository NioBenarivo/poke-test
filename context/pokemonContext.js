import * as React from 'react'

const CAPTURE_POKEMON = 'CAPTURE_POKEMON';
const RELEASE_POKEMON = 'RELEASE_POKEMON';
const ADD_OFFSET = 'ADD_OFFSET';
const ADD_POKEMON_LIST = 'ADD_POKEMON_LIST';

const PokemonContext = React.createContext()
const initialState = {
  offsetPage: 0,
  pokemonList: [],
  capturedPokemon: [],
}

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_OFFSET: {
      return {
        ...state,
        offsetPage: state.offsetPage + action.value
      }
    }
    case ADD_POKEMON_LIST: {
      return {
        ...state,
        pokemonList: [
          ...state.pokemonList,
          ...action.value
        ]
      }
    }
    case CAPTURE_POKEMON: {
      return {
        ...state,
        capturedPokemon: [
          ...state.capturedPokemon,
          action.value
        ]
      }
    }
    case RELEASE_POKEMON: {
      const filteredArray = state.capturedPokemon.filter(poke => poke.nickname !== action.value.nickname);
      return {
        ...state,
        capturedPokemon: [
          ...filteredArray
        ]
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function PokemonProvider({children}) {
  const [state, dispatch] = React.useReducer(pokemonReducer, getLocalStorage("pokemon", initialState))

  React.useEffect(() => {
    setLocalStorage("pokemon", state);
  }, [state]);
  
  const value = {state, dispatch}
  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
}

function usePokemon() {
  const context = React.useContext(PokemonContext)
  if (context === undefined) {
    throw new Error('usePokemon must be used within a PokemonProvider')
  }
  return context
}

export {
  PokemonProvider, 
  usePokemon,
  CAPTURE_POKEMON,
  RELEASE_POKEMON,
  ADD_OFFSET,
  ADD_POKEMON_LIST
}
