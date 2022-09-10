import borders from 'theme/base/borders';
import boxShadows from 'theme/base/boxShadows';
import colors from 'theme/base/colors';
import functions from 'theme/base/functions';
import typography from 'theme/base/typography';

const { lg } = boxShadows;
const { size } = typography;
const { textColor, white } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true
  },

  styleOverrides: {
    paper: {
      minWidth: functions.pxToRem(160),
      boxShadow: lg,
      padding: `${functions.pxToRem(8)} ${functions.pxToRem(8)}`,
      fontSize: size.sm,
      color: textColor.main,
      textAlign: 'left' as 'left',
      backgroundColor: `${white.main} !important`,
      borderRadius: `${borderRadius.md}  !important`
    }
  }
};

export default menu;
