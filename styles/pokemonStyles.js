import { css } from '@emotion/css';

export const mr05 = css`
  margin-right: 0.5rem;
`;

export const flex = css`
  display: flex;
`;

export const spaceBetween = css`
  justify-content: space-between;
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const dialogInputErr = css`
  border-color: #EF144A;
`;

export const dialogErrMsg = css`
  color: #EF144A;
  font-size: 12px;
  line-height: 18px;
  position: relative;
  margin: 4px 0px 0px;
  height: 18px;
`;

export const dialogHeader = css`
  display: block;
  position: relative;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: rgba(49,53,59,0.96);
  text-decoration: initial;
  margin: 0px 0px 16px;
`;

export const dialogForm = css`
  text-align: left;
  margin: 24px 0px;
`;

export const dialogLabel = css`
  color: rgba(49,53,59,0.68);
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  display: inline-block;
  pointer-events: none;
  margin-bottom: 4px;
`;

export const dialogInput = css`
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

export const pokemonWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 16px;
  max-width: 1200px;

  & > div {
    flex: 1;
    width: 100%;
    min-width: 30%;
    max-width: 30%;
    margin: 4px;

    @media (max-width: 425px) {
      min-width: 100%;
      width: 100%;
    }
  }
`;

export const listWrapper = css`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  max-width: 540px;
`;

export const listItem = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0 1px 6px 0 rgba(49,53,59,0.12);
  margin-bottom: 1rem;
  min-width: 120px;
  cursor: pointer;

  p {
    margin: 0;
  }

  p.pokeName {
    font-size: 20px;
    
  }
`;

export const section = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding: 16px;
`;

export const detailsWrapper = css`
  display: flex;
  flex-direction: column;

  h2, p {
    margin: 4px 0;
    color: rgba(49,53,59,0.96);
  }

  & > div {
    margin: 8px 0;
  }

  label {
    display: block;
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: rgba(49,53,59,0.96);
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    color: rgba(49,53,59,0.68);
  }
`;

export const notes = css`
  padding: 0px 16px;
  border: 0px;
  border-radius: 8px;
  font-weight: 700;
  background-color: rgb(243, 244, 245);
  height: 40px;
  margin-bottom: 8px;
  position: relative;
  display: flex;
  align-items: center;
`;