import Head from 'next/head'
import { useQuery, gql } from "@apollo/client";
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'


const QUERY = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemon(offset: 0, limit: 10) {
      id
      name
    }
  }
`;

export default function PokemonList() {
  const router = useRouter()
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const pokemon = data.pokemon_v2_pokemon;
  console.log(pokemon)

  return (
    <div className={styles.grid}>
      <ul>
        {
          pokemon.map((pokemon, index) => {
            const pokemonName = pokemon.name || 'No Name';
            const pokemonID = pokemon.id || 0;
            return (
              <li key={`${pokemon}-${index}`} onClick={() => router.push(`/pokemon/${pokemonID}`)}>
                {pokemonName} - {pokemonID}
              </li>  
            )
          })
        }
      </ul>
    </div>
  );
}

// import { gql } from "@apollo/client";
// import client from "../../apollo-client";

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query samplePokeAPIquery {
//         pokemon_v2_pokemon(offset: 0, limit: 10) {
//           id
//           name
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       pokemonList: data.pokemon_v2_pokemon,
//     },
//  };
// }

// export default function Home({ pokemonList }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Pokemon List</title>
//         <meta name="description" content="Pokemon List" />
//       </Head>
//       <section>
        // <ul>
        // {
        //   pokemonList.map((pokemon, index) => {
        //     const pokemonName = pokemon.name || 'No Name';
        //     const pokemonID = pokemon.id || 0;
        //     return (
        //       <li key={`${pokemon}-${index}`}>
        //         {pokemonName} - {pokemonID}
        //       </li>  
        //     )
        //   })
        // }
        // </ul>
//       </section>
//     </div>
//   )
// }
