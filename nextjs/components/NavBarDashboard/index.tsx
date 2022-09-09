import React, {
  useState,
  useEffect,
  FunctionComponent,
  useCallback
} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import VoyBox from '../muiStyled/VoyBox';
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu
} from './styles';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import { useRouter } from 'next/router';
import { Settings } from '@mui/icons-material';
import { setMiniSidenav, useUIController } from 'contexts/uiContext';
import Image from 'next/image';
import logoSVG from 'assets/svgs/logo.svg';
import functions from 'theme/base/functions';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

export interface INavBarDashboardProps {
  handleSettingsToggle: () => void;
  absolute?: boolean;
  light?: boolean;
}

const NavBarDashboard: FunctionComponent<INavBarDashboardProps> = ({
  handleSettingsToggle,
  absolute = false,
  light = false
}) => {
  const [transparentNavbar, setTransparentNavbar] = useState<boolean>(true);
  const { state, dispatch } = useUIController();
  const routes = useRouter().pathname.split('/').slice(1);

  useEffect(() => {
    // A function that sets the transparent state of the navbar.
    const handleTransparentNavbar = () => {
      setTransparentNavbar(window.scrollY === 0);
    };

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener('scroll', handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleTransparentNavbar);
  }, []);

  const handleMiniSideNavToggle = useCallback(() => {
    setMiniSidenav(dispatch, !state.miniSidenav);
  }, [dispatch, state.miniSidenav]);

  return (
    <AppBar
      position={absolute ? 'absolute' : 'sticky'}
      color="inherit"
      sx={theme => navbar(theme, transparentNavbar, absolute, light)}
    >
      <Toolbar sx={theme => navbarContainer(theme)}>
        <VoyBox mb={{ xs: 1, md: 0 }} sx={theme => navbarRow(theme)}>
          <Breadcrumbs
            icon={
              <Image
                src={logoSVG}
                width={functions.pxToRem(330)}
                height={functions.pxToRem(330)}
              />
            }
            route={routes}
            light={light}
          />
        </VoyBox>
        <VoyBox
          sx={{
            display: 'flex',
            flexWrap: 'nowrap'
          }}
        >
          <IconButton
            size="small"
            color="inherit"
            sx={navbarMobileMenu}
            onClick={handleMiniSideNavToggle}
          >
            <Icon className={light ? 'text-white' : 'text-dark'}>
              {state.miniSidenav ? <MenuOpenIcon /> : <MenuIcon />}
            </Icon>
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            sx={navbarIconButton}
            onClick={handleSettingsToggle}
          >
            <Settings />
          </IconButton>
        </VoyBox>
      </Toolbar>
    </AppBar>
  );
};
export default NavBarDashboard;
