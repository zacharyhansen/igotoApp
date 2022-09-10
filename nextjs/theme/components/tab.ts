import borders from 'theme/base/borders';
import colors from 'theme/base/colors';
import functions from 'theme/base/functions';
import typography from 'theme/base/typography';

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { dark } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row' as 'row',
      flex: '1 1 auto',
      textAlign: 'center' as 'center',
      maxWidth: 'unset !important' as 'unset',
      minWidth: 'unset !important' as 'unset',
      minHeight: 'unset !important' as 'unset',
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: 'none' as 'none',
      lineHeight: 'inherit',
      padding: functions.pxToRem(4),
      borderRadius: borderRadius.md,
      color: `${dark.main} !important`,
      opacity: '1 !important',

      '& .material-icons, .material-icons-round': {
        marginBottom: '0 !important',
        marginRight: functions.pxToRem(4)
      },

      '& svg': {
        marginBottom: '0 !important',
        marginRight: functions.pxToRem(6)
      }
    },

    labelIcon: {
      paddingTop: functions.pxToRem(4)
    }
  }
};

export default tab;
