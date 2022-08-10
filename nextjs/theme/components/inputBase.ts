import borders from '../base/borders';
import colors from '../base/colors';
import functions from '../base/functions';
import typography from '../base/typography';

const { dark, white, grey, inputColors } = colors;
const { size, fontWeightRegular } = typography;
const { borderWidth, borderRadius } = borders;

const inputBase = {
  styleOverrides: {
    root: {
      display: 'grid !important',
      placeItems: 'center !important',
      width: '100% !important',
      height: 'auto !important',
      padding: `${functions.pxToRem(8)} ${functions.pxToRem(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: '1.4 !important',
      color: `${grey[700]} !important`,
      backgroundColor: `${white.main} !important`,
      backgroundClip: 'padding-box !important',
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      // appearance: 'none !important' ,
      borderRadius: borderRadius.md,
      transition:
        'box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important'
    },

    input: {
      width: '100% !important',
      height: `${functions.pxToRem(22)}`,
      padding: '0 !important',

      '&::-webkit-input-placeholder': {
        color: `${dark.main} !important`
      }
    }
  }
};

export default inputBase;
