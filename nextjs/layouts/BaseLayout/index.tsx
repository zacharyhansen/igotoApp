import { useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Header from './Header';
import Drawer from '../../components/Drawers/Drawer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dashboard, Notifications, Settings } from '@mui/icons-material';
import DrawerTemporary from '../../components/Drawers/DrawerTempory';
import ListItems from '../../components/ListItems/ListItems';
import LogoutIcon from '@mui/icons-material/Logout';
import { firebaseSignOut } from '../../config/firebase.config';
import CloseIcon from '@mui/icons-material/Close';
import { routes } from '../../constants/routes';

interface BaseLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsToggle = useCallback(() => {
    setSettingsOpen(!settingsOpen);
  }, [settingsOpen]);

  return (
    <Fragment>
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
      <Box sx={{ display: 'flex' }}>
        <Header position="absolute" open={true}>
          <Toolbar
            sx={{
              pr: '24px' // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton onClick={handleSettingsToggle} color="inherit">
              <Badge color="secondary">
                <Settings />
              </Badge>
            </IconButton>
          </Toolbar>
        </Header>
        <Drawer id="1" variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          ></Toolbar>
          <Divider />
          <ListItems
            asButtons={true}
            listItems={[
              {
                primaryText: 'Dashboard',
                primaryIcon: <Dashboard />,
                link: routes.DASHBOARD
              },
              {
                primaryText: 'Profile',
                primaryIcon: <AccountCircleIcon />,
                link: routes.PROFILE
              }
            ]}
          />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <main>{children}</main>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default BaseLayout;
