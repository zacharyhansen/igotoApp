import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

interface ISidenavRootProps extends DrawerProps {
  miniSidenav: boolean;
}

export default styled(Drawer, {
  shouldForwardProp: prop => prop !== 'miniSidenav'
})<ISidenavRootProps>(({ theme, miniSidenav }) => {
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const sidebarWidth = 250;
  const { white } = palette;
  const { xxl } = boxShadows;
  const { pxToRem } = functions;

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    transform: 'translateX(0)',
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter
    }),

    [breakpoints.up('xl')]: {
      backgroundColor: white.main,
      boxShadow: xxl,
      marginBottom: 'inherit',
      left: '0',
      width: sidebarWidth,
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen
      })
    }
  });

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter
    }),

    [breakpoints.up('xl')]: {
      backgroundColor: white.main,
      boxShadow: xxl,
      marginBottom: 'inherit',
      left: '0',
      width: pxToRem(96),
      overflowX: 'hidden',
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter
      })
    }
  });

  return {
    '& .MuiDrawer-paper': {
      boxShadow: xxl,
      border: 'none',
      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles())
    }
  };
});
