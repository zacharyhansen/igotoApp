import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '../../components/Drawer';

interface HeaderPropsInterface {
  open: boolean;
}

const Header = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<HeaderPropsInterface>(({ theme, open }) => {
  return {
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  };
});

export default Header;
