import borders from '../../base/borders';
import functions from '../../base/functions';
import typography from '../../base/typography';

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

const root = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.md,
  padding: `${functions.pxToRem(12)} ${functions.pxToRem(24)}`,
  lineHeight: 1.4,
  textAlign: 'center' as 'center',
  textTransform: 'uppercase' as 'uppercase',
  userSelect: 'none' as 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: `all 150ms ease-in`,

  '&:hover': {
    transform: 'scale(1.02)'
  },

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65
  },

  '& .material-icons': {
    fontSize: functions.pxToRem(15),
    marginTop: functions.pxToRem(-2)
  }
};

export default root;
