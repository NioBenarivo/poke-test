import { MockedProvider } from '@apollo/client/testing';
import Details from '../pages/pokemon/[id]';
import { pokemonDetailsMock, errorMock } from '../__data_mocks__';
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
    <MockedProvider mocks={pokemonDetailsMock} addTypename={false}>
      <PokemonProvider>
        <Details />
      </PokemonProvider>
    </MockedProvider>,
  );

  await waitFor(() => getByText(/Loading.../i))
  
  await waitFor(() => {
    const title = getAllByText(/Bulbasaur/i)[0];
    expect(title).toBeInTheDocument();
  })
});

it('should render error page when given wrong variables', async () => {
  const { getByText } = render(
    <MockedProvider mocks={errorMock} addTypename={false}>
      <PokemonProvider>
        <Details />
      </PokemonProvider>
    </MockedProvider>,
  );

  await waitFor(() => getByText(/Loading.../i))
    
  await waitFor(() => {
    const errorText = getByText(/A network error occured/i);
    expect(errorText).toBeInTheDocument();
  })
})