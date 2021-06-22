import { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'
import { css, cx } from '@emotion/css';
import { useQuery, gql } from "@apollo/client";
import styles from '../../styles/Home.module.css'
import Button from '@components/Button';
import Dialog from '@components/Dialog';
import useToggle from '@hooks/useToggle';
import { usePokemon, CAPTURE_POKEMON } from '@context/pokemonContext'

const dialogInputErr = css`
  border-color: #EF144A;
`;

const dialogErrMsg = css`
  color: #EF144A;
  font-size: 12px;
  line-height: 18px;
  position: relative;
  margin: 4px 0px 0px;
  height: 18px;
`;

const dialogHeader = css`
  display: block;
  position: relative;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: rgba(49,53,59,0.96);
  text-decoration: initial;
  margin: 0px 0px 16px;
`;

const dialogForm = css`
  text-align: left;
  margin: 24px 0px;
`;

const dialogLabel = css`
  color: rgba(49,53,59,0.68);
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  display: inline-block;
  pointer-events: none;
  margin-bottom: 4px;
`;

const dialogInput = css`
  min-width: 0;
  min-height: 0;
  width: 100%;
  color: rgba(49,53,59,0.96);
  font-family: inherit;
  background-color: transparent;
  line-height: 22px;
  border: none;
  outline: none;
  height: auto;
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid #E5E7E9;
  border-radius: 8px;
`;

const QUERY = gql`
  query samplePokeAPIquery($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonmoves(limit: 5) {
        pokemon_v2_move {
          name
          accuracy
        }
      }
      pokemon_v2_pokemonsprites(limit: 1) {
        sprites
      }
      pokemon_v2_encounters(limit: 3) {
        pokemon_v2_locationarea {
          name
        }
      }
    }
  }
`;

export default function PokemonList() {
  const { dispatch, state: { capturedPokemon } } = usePokemon()
  const [disabled, toggle] = useToggle();
  const [showDialog, setShowDialog] = useState(false);
  const [capturedPokeName, setCapturedPokeName] = useState('');
  const [errForm, setErrForm] = useState('');
  const router = useRouter()
  const { id } = router.query
  const pkID = parseInt(id, 10)
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      id: pkID
    }
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  // Generalize Data
  const result = data || {};
  const details = result.pokemon_v2_pokemon_by_pk || {};
  const pokemonName = details.name || '';
  const pokemonTypes = details.pokemon_v2_pokemontypes || [];
  const pokemonMoves = details.pokemon_v2_pokemonmoves || [];

  const checkNickNameUnique = nickname => {
    return capturedPokemon.some(el => el.nickname === nickname);
  }

  const handleClick = () => {
    toggle();
    setTimeout(() => {
        toggle();
      }, 500);

    return setShowDialog(Math.random() > 0.5)
  }

  const handleChange = e => {
    e.preventDefault();
    setCapturedPokeName(e.target.value);
  }

  const savePoke = () => {
    if (capturedPokeName.length < 3) {
      setErrForm('Please give the name more than 3 characters')
      return;
    }

    if (checkNickNameUnique(capturedPokeName)) {
      setErrForm('Please be creative with the nickname!')
      return;
    }

    dispatch({
      type: CAPTURE_POKEMON,
      value: {
        name: pokemonName,
        nickname: capturedPokeName,
      }
    })

    setErrForm('');
    setCapturedPokeName('');
    setShowDialog(false);
  }

  return (
    <div className={styles.grid}>
      <Image
        src={imageURL}
        width={96}
        height={96}
      />
      <section>
        <div>
          <p>Name: {pokemonName}</p>
        </div>
        <div>
          Types:
          {
            pokemonTypes.map((type, index) => {
              const pokeType = type.pokemon_v2_type.name || '';
              return <p key={`type-${index}`}>{pokeType}</p>
            })
          }
        </div>
        <div>
          Moves:
          {
            pokemonMoves.map((move, index) => {
              const pokeMove = move.pokemon_v2_move || {};
              const pokeMoveAcc = pokeMove.accuracy || 0;
              const pokeMoveName = pokeMove.name || '';

              return (
                <p key={`moves-${index}`}>{pokeMoveName} - Acc: {pokeMoveAcc}</p>
              )
            })
          }
        </div>
        <Button disabled={disabled} onClick={handleClick}>Capture</Button>
      </section>
      <Dialog 
        display={showDialog} 
        onCancel={() => {
          setCapturedPokeName('')
          setShowDialog(false)
        }} 
        onAccept={() => savePoke()}
      >
        <h2 className={dialogHeader}>Congratulations on capturing {pokemonName}!</h2>
        <div className={dialogForm}>
          <label className={dialogLabel}>Pokemon Nickname</label>
          <input
            className={cx(
              dialogInput, 
              {
                [dialogInputErr]: !!errForm
              }
            )}
            type="text" 
            value={capturedPokeName} 
            onChange={e => handleChange(e)} 
          />
          <p className={dialogErrMsg}>{errForm}</p>
        </div>
      </Dialog>
    </div>
  );
}
