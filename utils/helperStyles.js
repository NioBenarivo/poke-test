import { css } from '@emotion/css';

export const coloredLabel = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  min-width: 120px;
  padding: 4px 0;

  &.fire {
    background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background-color: #fd7d24;
    color: #fff;
  }

  &.normal {
    background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background-color: #a4acaf;
    color: #212121;
  } 
  
  &.ice {
    background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background-color: #51c4e7;
    color: #212121;
  }

  &.ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121;
  }

  &.psychic {
    background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background-color: #f366b9;
    color: #fff;
  } 
  
  &.ghost {
    background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background-color: #7b62a3;
    color: #fff;
  }

  &.dark {
    background: linear-gradient(180deg, #707070 50%, #707070 50%);
    background-color: #707070;
    color: #fff;
  }

  &.dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
  }

  &.steel {
    background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
    color: #212121;
  }

  &.fighting {
    background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background-color: #d56723;
    color: #fff;  
  }

  &.grass {
    background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background-color: #9bcc50;
    color: #fff;
  }

  &.poison {
    background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background-color: #b97fc9;
    color: #fff;
  }

  &.physic {
    background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background-color: #f366b9;
    color: #fff;
  }

  &.flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #fff;
  }

  &.fairy {
    background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background-color: #fdb9e9;
    color: #212121;
  }

  &.water {
    background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background-color: #4592c4;
    color: #fff;
  }

  &.bug {
    background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background-color: #729f3f;
    color: #fff;
  }

  &.electric {
    background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background-color: #eed535;
    color: #212121;
  }

  &.rock {
    background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background-color: #a38c21;
    color: #fff;
  }

  &.default {
    color: #333333;
  }
`;