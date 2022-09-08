import borders from '../base/borders';
import colors from '../base/colors';
import functions from '../base/functions';
import typography from '../base/typography';

const { white } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: functions.pxToRem(250),
      whiteSpace: 'nowrap' as 'nowrap',
      border: 'none'
    },

    paper: {
      width: functions.pxToRem(250),
      backgroundColor: functions.rgba(white.main, 0.8),
      backdropFilter: `saturate(200%) blur(${functions.pxToRem(30)})`,
      height: `calc(100vh - ${functions.pxToRem(32)})`,
      margin: functions.pxToRem(16),
      borderRadius: borderRadius.xl,
      border: 'none' as 'none'
    },

    paperAnchorDockedLeft: {
      borderRight: 'none'
    }
  }
};

export default sidenav;
