import { Theme } from '@mui/material';

export default function sidenavLogoLabel(theme: Theme, miniSidenav: boolean) {
  const { functions, typography, breakpoints } = theme;
  const { pxToRem } = functions;
  const { fontWeightMedium } = typography;

  return {
    ml: 1,
    fontWeight: fontWeightMedium,
    wordSpacing: pxToRem(-1),
    [breakpoints.up('xl')]: {
      opacity: miniSidenav ? 0 : 1
    }
  };
}
