import backgroundImage from 'assets/images/curved-images/white-curved.jpeg';
import { Theme } from '@mui/material';

const card = (theme: Theme, miniSidenav: boolean) => {
  const { borders, functions, transitions, breakpoints } = theme;

  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    minWidth: 'auto',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    borderRadius: borderRadius.xl,
    boxShadow: 'none',

    [breakpoints.up('xl')]: {
      maxHeight: miniSidenav ? pxToRem(64) : pxToRem(192),
      transition: transitions.create('max-height', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard
      })
    }
  };
};

const cardContent = (theme: Theme) => {
  const { palette, functions, borders } = theme;

  const { white, dark, gradients } = palette;
  const { linearGradient } = functions;
  const { borderRadius } = borders;

  return {
    color: white.main,
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    p: 2,

    '&::after': {
      content: '""',
      backgroundImage: linearGradient(
        gradients.secondary.main,
        gradients.secondary.state
      ),
      display: 'block',
      height: '100%',
      width: '100%',
      borderRadius: borderRadius.xl,
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.65,
      zIndex: -1
    },

    '& .MuiButton-root': {
      color: dark.main
    },

    '&:last-child': {
      pb: 2
    }
  };
};

const cardIconBox = {
  display: 'grid',
  placeItems: 'center',
  // @ts-ignore
  transition: ({ transitions }) =>
    transitions.create('margin', {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard
    })
};

const cardIcon = (theme: Theme) => {
  const { palette } = theme;
  const { transparent } = palette;
  return {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: transparent.main
  };
};

export { card, cardContent, cardIconBox, cardIcon };
