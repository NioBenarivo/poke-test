import { gql } from "@apollo/client";

export const QUERY_POKEMON_DETAILS = gql`
  query samplePokeAPIquery($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemontypes(limit: 2) {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonmoves(limit: 3) {
        pokemon_v2_move {
          name
          accuracy
          power
        }
      }
      pokemon_v2_pokemonsprites(limit: 1) {
        sprites
      }
      pokemon_v2_encounters(distinct_on: location_area_id, limit: 3, order_by: {location_area_id: asc}) {
        pokemon_v2_locationarea {
          name
        }
      }
      weight
      height
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export const QUERY_POKEMON_LIST = gql`
  query samplePokeAPIquery($offset: Int!, $limit: Int!) {
    pokemon_v2_pokemon(offset: $offset, limit: $limit) {
      id
      name
      pokemon_v2_pokemontypes(limit: 2) {
        pokemon_v2_type {
          name
        }
      }
      weight
      height
    }
  }
`;