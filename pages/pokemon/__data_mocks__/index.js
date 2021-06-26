import { QUERY_POKEMON_DETAILS, QUERY_POKEMON_LIST } from '../graphql';

export const pokemonListMock = [
  {
    request: {
      query: QUERY_POKEMON_LIST,
      variables: {
        offset: 0,
        limit: 10
      }
    },
    result: {
      data: {
        "pokemon_v2_pokemon": [
          {
            "id": 1,
            "name": "bulbasaur",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                    "name": "grass",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              },
              {
                "pokemon_v2_type": {
                    "name": "poison",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 69,
            "height": 7,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 2,
            "name": "ivysaur",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                    "name": "grass",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              },
              {
                "pokemon_v2_type": {
                    "name": "poison",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 130,
            "height": 10,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 3,
            "name": "venusaur",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                    "name": "grass",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              },
              {
                "pokemon_v2_type": {
                    "name": "poison",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 1000,
            "height": 20,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 4,
            "name": "charmander",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                  "name": "fire",
                  "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 85,
            "height": 6,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 5,
            "name": "charmeleon",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                  "name": "fire",
                  "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 190,
            "height": 11,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 6,
            "name": "charizard",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                  "name": "fire",
                  "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              },
              {
                "pokemon_v2_type": {
                  "name": "flying",
                  "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 905,
            "height": 17,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 7,
            "name": "squirtle",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                    "name": "water",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 90,
            "height": 5,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 8,
            "name": "wartortle",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                    "name": "water",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 225,
            "height": 10,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 9,
            "name": "blastoise",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                    "name": "water",
                    "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 855,
            "height": 16,
            "__typename": "pokemon_v2_pokemon"
          },
          {
            "id": 10,
            "name": "caterpie",
            "pokemon_v2_pokemontypes": [
              {
                "pokemon_v2_type": {
                  "name": "bug",
                  "__typename": "pokemon_v2_type"
                },
                "__typename": "pokemon_v2_pokemontype"
              }
            ],
            "weight": 29,
            "height": 3,
            "__typename": "pokemon_v2_pokemon"
          }
        ]
      },
    },
  },
];

export const pokemonDetailsMock = [
  {
    request: {
      query: QUERY_POKEMON_DETAILS,
      variables: {
        id: 1
      }
    },
    result: {
      data: {
        "pokemon_v2_pokemon_by_pk": {
          "id": 1,
          "name": "bulbasaur",
          "pokemon_v2_pokemontypes": [
            {
              "pokemon_v2_type": {
                "name": "grass",
                "__typename": "pokemon_v2_type"
              },
              "__typename": "pokemon_v2_pokemontype"
            },
            {
              "pokemon_v2_type": {
                  "name": "poison",
                  "__typename": "pokemon_v2_type"
              },
              "__typename": "pokemon_v2_pokemontype"
            }
          ],
          "pokemon_v2_pokemonmoves": [
            {
              "pokemon_v2_move": {
                "name": "swords-dance",
                "accuracy": null,
                "power": null,
                "__typename": "pokemon_v2_move"
              },
              "__typename": "pokemon_v2_pokemonmove"
            },
            {
              "pokemon_v2_move": {
                "name": "cut",
                "accuracy": 95,
                "power": 50,
                "__typename": "pokemon_v2_move"
              },
              "__typename": "pokemon_v2_pokemonmove"
            },
            {
              "pokemon_v2_move": {
                "name": "vine-whip",
                "accuracy": 100,
                "power": 45,
                "__typename": "pokemon_v2_move"
              },
              "__typename": "pokemon_v2_pokemonmove"
            }
          ],
          "pokemon_v2_pokemonsprites": [
            {
              "sprites": "{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null}, \"yellow\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null}}, \"generation-ii\": {\"crystal\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"gold\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"silver\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iii\": {\"emerald\": {\"front_default\": null, \"front_shiny\": null}, \"firered-leafgreen\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}, \"ruby-sapphire\": {\"front_default\": null, \"front_shiny\": null, \"back_default\": null, \"back_shiny\": null}}, \"generation-iv\": {\"diamond-pearl\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"heartgold-soulsilver\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}, \"platinum\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}, \"generation-v\": {\"black-white\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"animated\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null}}}, \"generation-vi\": {\"omegaruby-alphasapphire\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"x-y\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}}, \"generation-vii\": {\"ultra-sun-ultra-moon\": {\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null}, \"icons\": {\"front_default\": null, \"front_female\": null}}, \"generation-viii\": {\"icons\": {\"front_default\": null, \"front_female\": null}}}}",
              "__typename": "pokemon_v2_pokemonsprites"
            }
          ],
          "pokemon_v2_encounters": [
            {
              "pokemon_v2_locationarea": {
                "name": "cerulean-city-area",
                "__typename": "pokemon_v2_locationarea"
              },
              "__typename": "pokemon_v2_encounter"
            },
            {
              "pokemon_v2_locationarea": {
                "name": "pallet-town-area",
                "__typename": "pokemon_v2_locationarea"
              },
              "__typename": "pokemon_v2_encounter"
            },
            {
              "pokemon_v2_locationarea": {
                "name": "lumiose-city-area",
                "__typename": "pokemon_v2_locationarea"
              },
              "__typename": "pokemon_v2_encounter"
            }
          ],
          "weight": 69,
          "height": 7,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "chlorophyll",
                "__typename": "pokemon_v2_ability"
              },
              "__typename": "pokemon_v2_pokemonability"
            },
            {
              "pokemon_v2_ability": {
                "name": "overgrow",
                "__typename": "pokemon_v2_ability"
              },
              "__typename": "pokemon_v2_pokemonability"
            }
          ],
        }, 
      }
    },
  },
];

export const errorMock = [
  {
    request: {
      query: QUERY_POKEMON_DETAILS,
      variables: { id: '1' },
    },
    error: [
      {
        "extensions": {
            "path": "$.selectionSet.pokemon_v2_pokemon_by_pk.args.id",
            "code": "validation-failed"
        },
        "message": "expected a 32-bit integer for type \"Int\", but found a string"
      }
    ]
  }
]