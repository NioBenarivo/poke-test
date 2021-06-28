import { useState } from 'react';
import { useRouter } from 'next/router'
import { cx } from '@emotion/css';
import { useQuery } from "@apollo/client";
import Button from '@components/Button';
import Dialog from '@components/Dialog';
import Navigation from '@components/Navigation';
import ErrorPage from '@components/ErrorPage';
import Loader from '@components/Loader';
import useToggle from '@hooks/useToggle';
import { usePokemon, CAPTURE_POKEMON } from '@context/pokemonContext'
import { capitalizeFirstLetter, renderColorLabel, isCaptureSuccess } from '@utils/helpers';
import {
  detailsWrapper,
  dialogLabel, 
  dialogForm, 
  dialogHeader, 
  dialogInput, 
  dialogErrMsg, 
  dialogInputErr,
  flex,
  flexCol,
  notes,
  section,
  spaceBetween,
} from '@styles/pokemonStyles';
import { mr05, mr1 } from '@components/PokemonCard/styles';
import { QUERY_POKEMON_DETAILS } from '@queries/index';

export default function PokemonList() {
  const { dispatch, state: { capturedPokemon } } = usePokemon()
  const [disabled, toggle] = useToggle();
  const [showDialog, setShowDialog] = useState(false);
  const [showFailedMsg, setShowFailedMsg] = useState(false);
  const [capturedPokeName, setCapturedPokeName] = useState('');
  const [errForm, setErrForm] = useState('');
  const router = useRouter()

  const { id } = router.query
  const pkID = parseInt(id, 10)
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const { data, loading, error } = useQuery(QUERY_POKEMON_DETAILS, {
    variables: {
      id: pkID
    }
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error} />
  }

  // Generalize Data
  const result = data || {};
  const details = result.pokemon_v2_pokemon_by_pk || {};
  const pokemonName = details.name || '';
  const pokemonAbilities = details.pokemon_v2_pokemonabilities || [];
  const pokemonTypes = details.pokemon_v2_pokemontypes || [];
  const pokemonMoves = details.pokemon_v2_pokemonmoves || [];
  const pokemonLocation = details.pokemon_v2_encounters || [];
  const pokemonWeight = details.weight || 0;
  const pokemonHeight = details.height || 0;
  const capName = capitalizeFirstLetter(pokemonName);

  const checkNickNameUnique = nickname => {
    return capturedPokemon.some(el => el.nickname === nickname);
  }

  const handleClick = () => {
    toggle();
    setTimeout(() => {
        toggle();
      }, 500);

    if (!isCaptureSuccess() === false) {
      setShowFailedMsg(true);
    } else {
      setShowFailedMsg(false);
      setShowDialog(true)
    }

    return;
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
        pkID,
        name: pokemonName,
        nickname: capturedPokeName,
        types: pokemonTypes,
        moves: pokemonMoves,
        location: pokemonLocation,
        weight: pokemonWeight,
        height: pokemonHeight,
      }
    })

    setErrForm('');
    setCapturedPokeName('');
    setShowDialog(false);
  }

  const pokemonLimit = capturedPokemon.length >= 6;

  return (
    <div className={section}>
      <Navigation />
      <img
        src={imageURL}
        alt="pokemon-image"
        width={96}
        height={96}
      />
      <div className={detailsWrapper}>
        <h2>{capName}</h2>
        <div className={flex}>
          <div className={cx(flexCol, mr1)}>
            <label>Weight</label>
            <span>{pokemonWeight}</span>
          </div>
          <div className={cx(flexCol, mr1)}>
            <label>Height</label>
            <span>{pokemonHeight}</span>
          </div>
        </div>
        <div>
          <label>Types</label>
          <div className={flex}>
            {
              pokemonTypes.map((type, index) => {
                const pokeType = type.pokemon_v2_type.name || '';
                return <div className={mr05} key={`type-${index}`}>{renderColorLabel(pokeType)}</div>
              })
            }
          </div>
        </div>
        <div className={cx(flex, spaceBetween)}>
          <div className={flexCol}>
            <label>Abilities</label>
            {
              pokemonAbilities.map((ability, index) => {
                const pokeAbility = ability.pokemon_v2_ability || {};
                const pokeAbilityName = pokeAbility.name || '';

                return <span key={`ability-${index}`}>{pokeAbilityName}</span>
              })
            }
          </div>
          <div className={flexCol}>
            <label>Location:</label>
            {
              pokemonLocation.map((location, index) => {
                const area = location.pokemon_v2_locationarea || {};
                const areaName = area.name;

                return (
                  <span key={`area-${index}`}>{areaName}</span>
                )
              })
            }
          </div>
        </div>
        <div className={flexCol}>
          <label>Possible Moves</label>
          {
            pokemonMoves.map((move, index) => {
              const pokeMove = move.pokemon_v2_move || {};
              const pokeMoveAcc = pokeMove.accuracy || 0;
              const pokeMovePower = pokeMove.power || 0;
              const pokeMoveName = pokeMove.name || '';

              return (
                <div key={`moves-${index}`} className={flexCol}>
                  <p>{pokeMoveName}</p>
                  <div className={flex}>
                    <span>Acc: {pokeMoveAcc}</span>
                    <span>Power: {pokeMovePower}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        {showFailedMsg && <div className={notes}>Failed. Try Again!</div>}
        {pokemonLimit ? <div className={notes}>Release some pokemon first!</div> : ''}
        <Button disabled={disabled || pokemonLimit} onClick={handleClick}>Capture</Button>
      </div>
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
          <input className={cx(dialogInput, {[dialogInputErr]: !!errForm})}
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
