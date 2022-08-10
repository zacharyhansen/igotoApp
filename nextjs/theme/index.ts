import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles';
import borders, { IBorders } from './base/borders';
import boxShadows, { IBoxShadows } from './base/boxShadows';
import colors, { validGradient, IGradient } from './base/colors';
import functions, { IFunctions } from './base/functions';
import typography from './base/typography';
import avatar from './components/avatar';
import card from './components/card';
import cardContent from './components/cardContent';
import cardMedia from './components/cardMedia';
import globals from './base/globals';
import container from './components/container';
import breakpoints from './base/breakpoints';
import inputBase from './components/inputBase';

interface MyThemeExtensions {
  functions: IFunctions;
  borders: IBorders;
  boxShadows: IBoxShadows;
}

interface MyPaletteExtensions {
  white: SimplePaletteColorOptions;
  black: SimplePaletteColorOptions;
  text: SimplePaletteColorOptions;
  light: SimplePaletteColorOptions;
  dark: SimplePaletteColorOptions;
  transparent: { main: string };
  gradients: { [key in validGradient]: IGradient };
  inputColors: {
    borderColor: {
      main: string;
      focus: string;
    };
    boxShadow: string;
    error: string;
    success: string;
  };
}

interface MyTypographyExtensions {
  size: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme extends MyThemeExtensions {}
  interface ThemeOptions extends MyThemeExtensions {}
  interface Palette extends MyPaletteExtensions {}
  interface PaletteOptions extends MyPaletteExtensions {}
  // Typograpghy object is structured differently so we add additonal exentions under variants
  interface TypographyVariants extends MyTypographyExtensions {}
  interface TypographyVariantsOptions extends MyTypographyExtensions {}
}

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  borders: { ...borders },
  functions: { ...functions },
  boxShadows: { ...boxShadows },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container
      }
    },
    // MuiDrawer: { ...sidenav },
    // MuiList: { ...list },
    // MuiListItem: { ...listItem },
    // MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    // MuiButton: { ...button },
    // MuiIconButton: { ...iconButton },
    MuiInputBase: { ...inputBase },
    // MuiMenu: { ...menu },
    // MuiMenuItem: { ...menuItem },
    // MuiSwitch: { ...switchButton },
    // MuiDivider: { ...divider },
    // MuiTableContainer: { ...tableContainer },
    // MuiTableHead: { ...tableHead },
    // MuiTableCell: { ...tableCell },
    // MuiLinearProgress: { ...linearProgress },
    // MuiBreadcrumbs: { ...breadcrumbs },
    // MuiSlider: { ...slider },
    MuiAvatar: { ...avatar }
    // MuiTooltip: { ...tooltip },
    // MuiAppBar: { ...appBar },
    // MuiTabs: { ...tabs },
    // MuiTab: { ...tab },
    // MuiStepper: { ...stepper },
    // MuiStep: { ...step },
    // MuiStepConnector: { ...stepConnector },
    // MuiStepLabel: { ...stepLabel },
    // MuiStepIcon: { ...stepIcon },
    // MuiSelect: { ...select },
    // MuiFormControlLabel: { ...formControlLabel },
    // MuiFormLabel: { ...formLabel },
    // MuiCheckbox: { ...checkbox },
    // MuiRadio: { ...radio },
    // MuiAutocomplete: { ...autocomplete },
    // MuiInput: { ...input },
    // MuiOutlinedInput: { ...input },
    // MuiFilledInput: { ...input },
    // MuiPopover: { ...popover },
    // MuiButtonBase: { ...buttonBase },
    // MuiIcon: { ...icon },
    // MuiSvgIcon: { ...svgIcon },
    // MuiLink: { ...link }
  }
});
