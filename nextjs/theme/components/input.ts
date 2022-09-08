import borders from '../base/borders';
import colors from '../base/colors';
import functions from '../base/functions';

const { inputColors } = colors;
const { borderWidth, borderRadius } = borders;

const input = {
  styleOverrides: {
    root: {
      display: 'flex !important',
      padding: `${functions.pxToRem(8)} ${functions.pxToRem(
        28
      )} ${functions.pxToRem(8)} ${functions.pxToRem(12)} !important`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,

      '& fieldset': {
        border: 'none'
      }
    },

    input: {
      height: functions.pxToRem(22),
      width: 'max-content !important'
    },

    inputSizeSmall: {
      height: functions.pxToRem(14)
    }
  }
};

export default input;
