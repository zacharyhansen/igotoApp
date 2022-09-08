import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import functions from '../../base/functions';
import typography from '../../base/typography';

const { white, textColor, info, secondary } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: functions.pxToRem(40),
    color: textColor.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${functions.pxToRem(12)} ${functions.pxToRem(24)}`,

    '&:hover': {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf
    },

    '&:focus': {
      boxShadow: buttonBoxShadow.stateOf
    },

    '&:active, &:active:focus, &:active:hover': {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf
    },

    '&:disabled': {
      boxShadow: buttonBoxShadow.main
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${functions.pxToRem(16)} !important`
    }
  },

  small: {
    minHeight: functions.pxToRem(32),
    padding: `${functions.pxToRem(8)} ${functions.pxToRem(32)}`,
    fontSize: size.xs,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${functions.pxToRem(12)} !important`
    }
  },

  large: {
    minHeight: functions.pxToRem(47),
    padding: `${functions.pxToRem(14)} ${functions.pxToRem(64)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${functions.pxToRem(22)} !important`
    }
  },

  primary: {
    backgroundColor: info.main,

    '&:hover': {
      backgroundColor: info.main
    },

    '&:focus:not(:hover)': {
      backgroundColor: info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },

  secondary: {
    backgroundColor: secondary.main,

    '&:hover': {
      backgroundColor: secondary.main
    },

    '&:focus:not(:hover)': {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};

export default contained;
