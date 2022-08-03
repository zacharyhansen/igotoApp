import { NextPage } from 'next';
import { useCallback, useEffect } from 'react';
import { auth } from '../../config/firebase.config';
import { uiConfig } from '../../config/firebaseAuthUI.config';
import 'firebaseui/dist/firebaseui.css';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Typography from '@mui/material/Typography';

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Login: NextPage = () => {
  // We async load this component since it requires the window object
  // i.e. we force it to load in browser rather than in the nextjs server
  const loadFirebaseui = useCallback(async () => {
    const firebaseui = await import('firebaseui');
    const firebaseUi =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    firebaseUi.start('#firebaseui-auth-container', uiConfig);
  }, []);

  useEffect(() => {
    loadFirebaseui();
  }, []);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random/?travel)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            mb: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <TravelExploreIcon />
          </Avatar>
          <Typography variant="h4">Voyame</Typography>
          <div id="firebaseui-auth-container" />
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
