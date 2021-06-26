import Button from '@components/Button';
import { overlayClass, dialogClass, actionWrapper } from './styles';

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
