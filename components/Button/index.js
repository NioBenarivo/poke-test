import { cx } from '@emotion/css';
import { 
  btn, 
  btnDisabled, 
  btnPrimary, 
  btnSecondary 
} from './styles';


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
