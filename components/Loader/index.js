import React from 'react';
import { loaderStyles } from './styles';

function Loader() {
  return (
    <div className={loaderStyles}>Loading...</div>
  )
}

export default React.memo(Loader)
