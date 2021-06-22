import { css, cx } from '@emotion/css';

const btn = css`
  min-width: 140px;
  display: inline-block;
  position: relative;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-indent: initial;
  height: 40px;
  width: auto;
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

const btnPrimary = css`
  background-color: rgba(3, 172, 14, 1);
  color: rgb(255, 255, 255);
`;

const btnDisabled = css`
  background-color: rgba(19, 1, 1, 0.3);
  color: rgba(108, 114, 124, 1);
  cursor: not-allowed;
`;

const btnSecondary = css`
  background-color: rgba(0, 0, 0, 0);
  color: rgba(49, 53, 59, 0.96);
  border: 1px solid rgb(229, 231, 233);
`;

export default function Button({ children = '', disabled = false, secondary = false, onClick = () => {} }) {
  return (
    <button 
      className={cx(
        btn, 
        btnPrimary,
        {
          [btnDisabled]: disabled,
          [btnSecondary]: secondary
        }
      )}
      disabled={disabled}
      onClick={disabled ? () => {} : onClick}
    >
      {children}
    </button>
  )
}
