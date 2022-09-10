import borders from 'theme/base/borders';
import boxShadows from 'theme/base/boxShadows';
import colors from 'theme/base/colors';
import functions from 'theme/base/functions';

const { grey, white } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs = {
  styleOverrides: {
    root: {
      position: 'relative' as 'relative',
      backgroundColor: grey[100],
      borderRadius: borderRadius.lg,
      minHeight: 'unset',
      padding: functions.pxToRem(4)
    },

    flexContainer: {
      height: '100%',
      position: 'relative' as 'relative',
      zIndex: 10
    },

    fixed: {
      overflow: 'unset !important' as 'unset',
      overflowX: 'unset !important' as 'unset'
    },

    vertical: {
      '& .MuiTabs-indicator': {
        width: '100%'
      }
    },

    indicator: {
      height: '100%',
      borderRadius: borderRadius.md,
      backgroundColor: white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: 'all 500ms ease'
    }
  }
};

export default tabs;
