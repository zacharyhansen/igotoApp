import borders from 'theme/base/borders';
import colors from 'theme/base/colors';
import functions from 'theme/base/functions';

const { borderRadius } = borders;
const { light } = colors;

const linearProgress = {
  styleOverrides: {
    root: {
      height: functions.pxToRem(3),
      borderRadius: borderRadius.md.replace
    },

    colorPrimary: {
      backgroundColor: light.main
    },

    colorSecondary: {
      backgroundColor: light.main
    },

    bar: {
      borderRadius: borderRadius.sm,
      transition: 'width 0.6s ease !important'
    }
  }
};

export default linearProgress;
