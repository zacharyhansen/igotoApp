import borders from '../base/borders';
import functions from '../base/functions';

const { borderRadius } = borders;

const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${functions.pxToRem(16)} ${functions.pxToRem(16)} 0`
    },

    media: {
      width: 'auto'
    }
  }
};

export default cardMedia;
