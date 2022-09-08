import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import functions from '../../base/functions';
import typography from '../../base/typography';

const { transparent, light, info, secondary } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const outlined = {
  base: {
    minHeight: functions.pxToRem(42),
    color: light.main,
    borderColor: light.main,
    padding: `${functions.pxToRem(12)} ${functions.pxToRem(24)}`,

    '&:hover': {
      opacity: 0.75,
      backgroundColor: transparent.main
    },

    '&:focus:not(:hover)': {
      boxShadow: buttonBoxShadow.stateOfNotHover
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${functions.pxToRem(16)} !important`
    }
  },

  small: {
    minHeight: functions.pxToRem(34),
    padding: `${functions.pxToRem(8)} ${functions.pxToRem(32)}`,
    fontSize: size.xs,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${functions.pxToRem(12)} !important`
    }
  },

  large: {
    minHeight: functions.pxToRem(49),
    padding: `${functions.pxToRem(14)} ${functions.pxToRem(64)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${functions.pxToRem(22)} !important`
    }
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,

    '&:hover': {
      backgroundColor: transparent.main
    },

    '&:focus:not(:hover)': {
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    '&:hover': {
      backgroundColor: transparent.main
    },

    '&:focus:not(:hover)': {
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};

export default outlined;
