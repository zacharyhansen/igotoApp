import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DrawerTemporary from '../../components/Drawers/DrawerTempory';
import ListItems from '../../components/ListItems/ListItems';
import LogoutIcon from '@mui/icons-material/Logout';
import { firebaseSignOut } from '../../config/firebase.config';
import CloseIcon from '@mui/icons-material/Close';
import SideNav from 'components/SideNav';
import { useRouter } from 'next/router';
import VoyBox from 'components/muiStyled/VoyBox';
import { setLayout, useUIController } from 'contexts/uiContext';
import NavBarDashboard from 'components/NavBarDashboard';

interface BaseLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = useRouter().pathname;
  const { state, dispatch } = useUIController();

  const handleSettingsToggle = useCallback(() => {
    setSettingsOpen(!settingsOpen);
  }, [settingsOpen]);

  useEffect(() => {
    setLayout(dispatch, 'dashboard');
  }, [pathname]);

  return (
    <VoyBox>
      <SideNav />
      <DrawerTemporary
        title="Settingsw Drawer"
        anchor="right"
        open={settingsOpen}
        onToggleDrawer={handleSettingsToggle}
        variant="persistent"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          pt={2}
          pb={0.8}
          px={2}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h5">Settings</Typography>
          </Box>

          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={handleSettingsToggle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <ListItems
          asButtons={true}
          listItems={[
            {
              primaryText: 'Sign out',
              primaryIcon: <LogoutIcon />,
              primaryAction: firebaseSignOut()
            }
          ]}
        />
      </DrawerTemporary>
      <VoyBox
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          px: 2,
          py: 1,
          position: 'relative',

          [breakpoints.up('xl')]: {
            marginLeft: state.miniSidenav ? pxToRem(120) : pxToRem(274),
            transition: transitions.create(['margin-left', 'margin-right'], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard
            })
          }
        })}
      >
        <NavBarDashboard handleSettingsToggle={handleSettingsToggle} />
        {children}
      </VoyBox>
    </VoyBox>
  );
};

export default BaseLayout;
