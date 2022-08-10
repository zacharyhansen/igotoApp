import React, { useState, useEffect, FunctionComponent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import VoyBox from '../muiStyled/VoyBox';
import PublicIcon from '@mui/icons-material/Public';
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu
} from './NavBarDashboardStyles';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import { useRouter } from 'next/router';
import VoyTypography from '../muiStyled/VoyTypography';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Dashboard, Settings } from '@mui/icons-material';

export interface INavBarDashboardProps {
  absolute: boolean;
  light: boolean;
  isMini?: boolean;
}

const NavBarDashboard: FunctionComponent<INavBarDashboardProps> = ({
  absolute = false,
  light = false,
  isMini = false
}) => {
  const [transparentNavbar, setTransparentNavbar] = useState<boolean>(true);
  const routes = useRouter().pathname.split('/').slice(1);
  console.log('routes', routes);
  // TODO: this var handlers the mobile phone layout and needs to be immpmeneted for this layout
  const miniSidenav = false;
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

  return (
    <AppBar
      position={absolute ? 'absolute' : 'sticky'}
      color="inherit"
      sx={theme => navbar(theme, transparentNavbar, absolute, light)}
    >
      <Toolbar sx={theme => navbarContainer(theme)}>
        <VoyBox mb={{ xs: 1, md: 0 }} sx={theme => navbarRow(theme, isMini)}>
          <Breadcrumbs icon={<PublicIcon />} route={routes} light={light} />
        </VoyBox>
        {isMini ? null : (
          <VoyBox sx={theme => navbarRow(theme, isMini)}>
            <VoyBox pr={1}>
              <TextField
                placeholder="Type here..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </VoyBox>
            <VoyBox color={light ? 'white' : undefined}>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                // onClick={handleMiniSidenav}
              >
                <Icon className={light ? 'text-white' : 'text-dark'}>
                  {miniSidenav ? 'menu_open' : 'menu'}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                // onClick={handleConfiguratorOpen}
              >
                <Settings />
              </IconButton>
            </VoyBox>
          </VoyBox>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBarDashboard;
