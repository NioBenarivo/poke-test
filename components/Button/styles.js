import { css } from '@emotion/css';

export const btn = css`
  min-width: 140px;
  display: block;
  position: relative;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-indent: initial;
  height: 40px;
  width: 100%;
  cursor: pointer;
  padding: 0px 16px;
  background-position: center center;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 8px;
  outline: none;
  transition: background 0.4s ease 0s;
`;

export const btnPrimary = css`
  background-color: rgba(3, 172, 14, 1);
  color: rgb(255, 255, 255);
`;

export const btnDisabled = css`
  background-color: rgba(19, 1, 1, 0.3);
  color: rgba(108, 114, 124, 1);
  cursor: not-allowed;
`;

export const btnSecondary = css`
  background-color: rgba(0, 0, 0, 0);
  color: rgba(49, 53, 59, 0.96);
  border: 1px solid rgb(229, 231, 233);
`;
