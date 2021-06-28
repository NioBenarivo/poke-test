import { css } from '@emotion/css';

export const dialogClass = css`
  display: block;
  z-index: 1110;
  opacity: 1;
  min-width: 240px;
  max-width: 480px;
  background-color: #FFFFFF;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  transition: opacity 0.2s ease 0s;
  box-shadow: 0px 1px 6px var(--color-shadow,rgba(49,53,59,0.12));
  font-size: 16px;
`;

export const overlayClass = css`
  width: 100%;
  height: 100%;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1100;
  background-color: rgba(49, 53, 59, 0.68);
`;

export const actionWrapper = css`
  display: flex;
  justify-content: space-evenly;
`;