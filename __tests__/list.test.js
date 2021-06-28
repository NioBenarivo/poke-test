import { MockedProvider } from '@apollo/client/testing';
import List from '../pages/pokemon/list';
import { pokemonListMock } from '../__data_mocks__';
import { PokemonProvider } from '@context/pokemonContext';
import { render, waitFor } from "../test-utils";

jest.mock("next/router", () => ({
  useRouter() {
    return {
        route: "/pokemon/",
        pathname: "",
        query: {
          id: '1'
        },
        asPath: "",
    };
  },
}));

it('should render without error', async () => {
  const { getByText, getAllByText } = render(
    <MockedProvider mocks={pokemonListMock} addTypename={false}>
      <PokemonProvider>
        <List />
      </PokemonProvider>
    </MockedProvider>,
  );

  await waitFor(() => getByText(/Loading.../i))
  
  await waitFor(() => {
    const title = getAllByText(/Bulbasaur/i)[0];
    expect(title).toBeInTheDocument();
  })
});