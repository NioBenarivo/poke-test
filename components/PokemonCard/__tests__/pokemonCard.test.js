import PokemonCard from '../index';
import { render, fireEvent } from "../../../test-utils";

it('should render without error', () => {
  const mockProps = {
    "name": "bulbasaur",
    "nickname": "hijau",
    "types": [
      {
        "pokemon_v2_type": {
          "name": "grass"
        }
      },
      {
        "pokemon_v2_type": {
          "name": "poison"
        }
      }
    ],
    "moves": [
      {
        "pokemon_v2_move": {
          "name": "swords-dance",
          "accuracy": null,
          "power": null
        }
      },
      {
        "pokemon_v2_move": {
          "name": "cut",
          "accuracy": 95,
          "power": 50
        }
      },
      {
        "pokemon_v2_move": {
          "name": "vine-whip",
          "accuracy": 100,
          "power": 45
        }
      }
    ],
    "location": [
      {
        "pokemon_v2_locationarea": {
          "name": "cerulean-city-area"
        }
      },
      {
        "pokemon_v2_locationarea": {
          "name": "pallet-town-area"
        }
      },
      {
        "pokemon_v2_locationarea": {
          "name": "lumiose-city-area"
        }
      }
    ],
    "weight": 69,
    "height": 7
  }

  const { getByText } = render(
    <PokemonCard data={mockProps} />
  );

  const name = getByText(/Bulbasaur/i);
  const nickname = getByText(/hijau/i);
  const type = getByText(/grass/i);
  const move = getByText(/swords-dance/i);
  const weight = getByText(/69/i);
  const height = getByText(/7/i);
  
  expect(name).toBeInTheDocument();
  expect(nickname).toBeInTheDocument();
  expect(type).toBeInTheDocument();
  expect(move).toBeInTheDocument();
  expect(weight).toBeInTheDocument();
  expect(height).toBeInTheDocument();
});
