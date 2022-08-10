import borders from '../base/borders';
import boxShadows from '../base/boxShadows';
import colors from '../base/colors';
import functions from '../base/functions';

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { xxl } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      position: 'relative' as 'relative',
      minWidth: 0,
      wordWrap: 'break-word' as 'break-word',
      backgroundColor: white.main,
      backgroundClip: 'border-box' as 'border-box',
      border: `${borderWidth[0]} solid ${functions.rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: xxl
    }
  }
};

export default card;
