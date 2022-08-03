import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Header from './Header';
import Drawer from '../../components/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Dashboard,
  Layers,
  ShoppingCart,
  People,
  BarChart,
  ChevronLeft,
  Menu,
  Notifications,
  Settings
} from '@mui/icons-material';
import DrawerTemporary from '../../components/DrawerTempory';
interface BaseLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleSettingsToggle = React.useCallback(() => {
    setSettingsOpen(!settingsOpen);
  }, [settingsOpen]);

  return (
    <React.Fragment>
      <DrawerTemporary
        anchor="right"
        open={settingsOpen}
        onToggleDrawer={handleSettingsToggle}
        variant="persistent"
      />
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
          <List component="nav">
            <React.Fragment>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Customers" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Layers />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
              </ListItemButton>
            </React.Fragment>
          </List>
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
    </React.Fragment>
  );
};

export default BaseLayout;
