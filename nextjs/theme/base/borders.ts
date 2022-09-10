import colors from './colors';
import functions from './functions';

const { grey } = colors;

export interface IBorders {
  borderColor: string;
  borderWidth: { [key: number]: string };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    section: string;
  };
}

const borders: IBorders = {
  borderColor: grey[300],

  borderWidth: {
    0: '0',
    1: functions.pxToRem(1),
    2: functions.pxToRem(2),
    3: functions.pxToRem(3),
    4: functions.pxToRem(4),
    5: functions.pxToRem(5)
  },

  borderRadius: {
    xs: functions.pxToRem(2),
    sm: functions.pxToRem(4),
    md: functions.pxToRem(8),
    lg: functions.pxToRem(12),
    xl: functions.pxToRem(16),
    xxl: functions.pxToRem(24),
    section: functions.pxToRem(160)
  }
};

export default borders;
