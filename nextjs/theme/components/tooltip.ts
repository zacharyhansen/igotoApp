import borders from 'theme/base/borders';
import colors from 'theme/base/colors';
import typography from 'theme/base/typography';
import Fade from '@mui/material/Fade';
import functions from 'theme/base/functions';

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade
  },

  styleOverrides: {
    tooltip: {
      maxWidth: functions.pxToRem(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: 'center' as 'center',
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${functions.pxToRem(5)} ${functions.pxToRem(
        8
      )} ${functions.pxToRem(4)}`
    },

    arrow: {
      color: black.main
    }
  }
};

export default tooltip;
