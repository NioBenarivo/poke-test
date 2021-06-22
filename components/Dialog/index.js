import { css, cx } from '@emotion/css';
import Button from '../Button';

const dialogClass = css`
  display: block;
  z-index: 1110;
  opacity: 1;
  min-width: 480px;
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

const overlayClass = css`
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

const actionWrapper = css`
  display: flex;
  justify-content: space-evenly;
`;

export default function Dialog({ 
  children = '', 
  display = false, 
  onAccept = () => {}, 
  onCancel = () => {}
}) {
  if (!display) {
    return null
  }

  return (
    <>
      <div className={overlayClass}></div>
      <div className={dialogClass}>
        {children}
        <div className={actionWrapper}>
          <Button secondary onClick={() => onCancel()}>Cancel</Button>
          <Button onClick={() => onAccept()}>Confirm</Button>
        </div>
      </div>
    </>
  )
}
