import functions from 'theme/base/functions';

const icon = {
  defaultProps: {
    baseClassName: 'material-icons-round',
    fontSize: 'inherit' as 'inherit'
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: 'inherit !important'
    },

    fontSizeSmall: {
      fontSize: `${functions.pxToRem(20)} !important`
    },

    fontSizeLarge: {
      fontSize: `${functions.pxToRem(36)} !important`
    }
  }
};

export default icon;
