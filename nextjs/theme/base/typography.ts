import colors from './colors';
import functions from './functions';

const { dark } = colors;

export const baseProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: functions.pxToRem(10.4),
  fontSizeXS: functions.pxToRem(12),
  fontSizeSM: functions.pxToRem(14),
  fontSizeMD: functions.pxToRem(16),
  fontSizeLG: functions.pxToRem(18),
  fontSizeXL: functions.pxToRem(20)
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: functions.pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties
  },

  h2: {
    fontSize: functions.pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties
  },

  h3: {
    fontSize: functions.pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties
  },

  h4: {
    fontSize: functions.pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties
  },

  h5: {
    fontSize: functions.pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties
  },

  h6: {
    fontSize: functions.pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.5,
    textTransform: 'uppercase' as const
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25
  },

  overline: {
    fontFamily: baseProperties.fontFamily
  },

  d1: {
    fontSize: functions.pxToRem(80),
    ...baseDisplayProperties
  },

  d2: {
    fontSize: functions.pxToRem(72),
    ...baseDisplayProperties
  },

  d3: {
    fontSize: functions.pxToRem(64),
    ...baseDisplayProperties
  },

  d4: {
    fontSize: functions.pxToRem(56),
    ...baseDisplayProperties
  },

  d5: {
    fontSize: functions.pxToRem(48),
    ...baseDisplayProperties
  },

  d6: {
    fontSize: functions.pxToRem(40),
    ...baseDisplayProperties
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2
  }
};

export default typography;
