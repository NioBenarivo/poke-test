import { coloredLabel } from './helperStyles';

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const renderColorLabel = (type = 'default') => {
  return <span className={`${coloredLabel} ${type}`}>{type}</span>
}

export const isCaptureSuccess = () => Math.random() > 0.5;
