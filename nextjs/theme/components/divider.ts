import colors from 'theme/base/colors';
import functions from '../base/functions';

const { dark, transparent, white } = colors;

const divider = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${functions.rgba(
        dark.main,
        0
      )}, ${functions.rgba(dark.main, 0.5)}, ${functions.rgba(
        dark.main,
        0
      )}) !important`,
      height: functions.pxToRem(1),
      margin: `${functions.pxToRem(16)} 0`,
      borderBottom: 'none',
      opacity: 0.25
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${functions.rgba(
        dark.main,
        0
      )}, ${functions.rgba(dark.main, 0.5)}, ${functions.rgba(
        dark.main,
        0
      )}) !important`,
      width: functions.pxToRem(1),
      height: '100%',
      margin: `0 ${functions.pxToRem(16)}`,
      borderRight: 'none'
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${functions.rgba(
        white.main,
        0
      )}, ${functions.rgba(white.main, 0.5)}, ${functions.rgba(
        white.main,
        0
      )}) !important`,

      '&.MuiDivider-vertical': {
        backgroundImage: `linear-gradient(to bottom, ${functions.rgba(
          white.main,
          0
        )}, ${functions.rgba(white.main, 0.5)}, ${functions.rgba(
          white.main,
          0
        )}) !important`
      }
    }
  }
};

export default divider;
