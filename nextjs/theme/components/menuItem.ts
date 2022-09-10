import borders from 'theme/base/borders';
import colors from 'theme/base/colors';
import functions from 'theme/base/functions';
import typography from 'theme/base/typography';

const { light, textColor, dark } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: functions.pxToRem(160),
      minHeight: 'unset',
      padding: `${functions.pxToRem(4.8)} ${functions.pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: textColor.main,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus':
        {
          backgroundColor: light.main,
          color: dark.main
        }
    }
  }
};

export default menuItem;
