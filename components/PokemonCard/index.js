import React from 'react';
import { cx } from '@emotion/css';
import Button from '@components/Button';
import { capitalizeFirstLetter, renderColorLabel } from '@utils/helpers';
import { 
  cardWrapper, 
  cardContent,
  cardHeading,
  cardNickname,
  statsWrapper,
  flex,
  flexCol,
  flexWrap,
  contentSectionWrapper,
  moveName,
  mr1,
  mr05,
  mb05,
  ownedStyles
} from './styles';

function Card({ data = {}, list, owned, onClick = () => {}, onRelease }) {
  const pkID = data.pkID || 0;
  const name = data.name || '';
  const nickname = data.nickname || '';
  const weight = data.weight || 0;
  const height = data.height || 0;
  const moves = data.moves || [];
  const types = data.types || [];
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkID}.png`;
  const capName = capitalizeFirstLetter(name);
  
  return (
    <div className={cx(cardWrapper, list ? 'list' : '')} onClick={onClick}>
      <img
        src={imageURL}
        alt="Pokemon Image"
        width={96}
        height={96}
      />
      <div className={cardContent}>
        <div className={cx(flex, mb05)}>
          <h2 className={cx(cardHeading, mr05)}>{capName}</h2>
          {nickname ? <p className={cardNickname}># {nickname}</p> : ''}
        </div>
        <div className={statsWrapper}>
          <div className={flexCol}>
            <label>Weight</label>
            <span>{weight}</span>
          </div>
          <div className={flexCol}>
            <label>Height</label>
            <span>{height}</span>
          </div>
        </div>
        <div className={contentSectionWrapper}>
          <label>Types</label>
          <div className={cx(flex, flexWrap)}>
            {
              types.map((type, index) => {
                const pokeType = type.pokemon_v2_type.name || '';
                return <div className={mr05} key={`type-${index}`}>{renderColorLabel(pokeType)}</div>
              })
            }
          </div>
        </div>
        {
          moves.length > 0 ? 
          (
            <div className={contentSectionWrapper}>
              <label>Possible Moves</label>
              {
                moves.map((move, index) => {
                  const pokeMove = move.pokemon_v2_move || {};
                  const pokeMoveAcc = pokeMove.accuracy || 0;
                  const pokeMovePower = pokeMove.power || 0;
                  const pokeMoveName = pokeMove.name || '';

                  return (
                    <div key={`moves-${index}`} className={flexCol}>
                      <p className={moveName}>{pokeMoveName}</p>
                      <div className={flex}>
                        <span className={mr1}>acc: {pokeMoveAcc}</span>
                        <span>power: {pokeMovePower}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ) : ''
        }
        
      </div>
      {!!owned && <p className={ownedStyles}>You owned <strong>{owned}</strong> of this Pokemon!</p>}
      {!!onRelease ? <Button secondary onClick={onRelease}>Remove</Button> : ''}
    </div>
  )
}

export default React.memo(Card);