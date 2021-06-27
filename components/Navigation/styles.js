import { css } from '@emotion/css';

export const navigationWrapper = css`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 16px;
  padding: 16px;
  border: 1px solid rgba(49,53,59,0.12);
  border-radius: 8px;

  a.active {
    color: rgba(3, 172, 14, 1);
  }
`;
