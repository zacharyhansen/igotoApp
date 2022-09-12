import {
  ChangeEvent,
  FunctionComponent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VoyAvatar, { stringAvatar } from '../../components/muiStyled/VoyAvatar';
import VoyBox from '../../components/muiStyled/VoyBox';
import curved0 from '../../assets/images/curved0.jpg';
import VoyTypography from '../../components/muiStyled/VoyTypography';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import breakpoints from 'theme/base/breakpoints';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Edit from '@mui/icons-material/AppRegistration';
import { getDownloadURL, ref } from 'firebase/storage';
import useFireBaseStorage from 'hooks/firebaseStorage/useUserStorage';
import { storage } from 'config/firebase.config';
import FirebaseStoragePaths from 'config/FirebaseStoragePaths';
import { User } from 'firebase/auth';

interface IProfileHeaderProps {
  // User whos profile is being viewed
  user: User;
  // Current Authed user if there is one
  currentUser?: User;
}

const ProfileHeader: FunctionComponent<IProfileHeaderProps> = ({
  user,
  currentUser
}) => {
  const [profileImage, setProfileImage] = useState<string>();
  // Background image of null means it was not found so the component should fill it with the default
  const [backgroundImage, setBackgroundImage] = useState<string | null>();
  const [tabsOrientation, setTabsOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal');
  const { profileUpload, backgroundUpload } = useFireBaseStorage(user);
  const [tabValue, setTabValue] = useState<number>(0);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // Upload the new profile image then download and set state as profile image
  const handleProfileUpload = (e: ChangeEvent<HTMLInputElement>) =>
    profileUpload(e).then(snapshot =>
      getDownloadURL(snapshot.ref)
        .then(url => setProfileImage(url))
        .catch(err => {})
    );

  // Upload the new background image then download and set state as background image
  const handleBackgroundUpload = (e: ChangeEvent<HTMLInputElement>) =>
    backgroundUpload(e).then(snapshot =>
      getDownloadURL(snapshot.ref)
        .then(url => setBackgroundImage(url))
        .catch(err => {})
    );

  useEffect(() => {
    getDownloadURL(ref(storage, FirebaseStoragePaths.profileImage(user.uid)))
      .then(url => setProfileImage(url))
      .catch(err => {
        // If it doesnt exist thats ok
      });
    getDownloadURL(ref(storage, FirebaseStoragePaths.backgroundImage(user.uid)))
      .then(url => setBackgroundImage(url))
      .catch(() => {
        setBackgroundImage(null);
      })
      .catch(err => {
        // If it doesnt exist thats ok
      });
  });

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    const handleTabsOrientation = () => {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal');
    };
    //  The event listener that's calling the handleTabsOrientation function when resizing the window.
    window.addEventListener('resize', handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener('resize', handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = useCallback(
    (e: SyntheticEvent<Element, Event>, newValue: number) =>
      setTabValue(newValue),
    []
  );

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    []
  );

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  return (
    <VoyBox position="relative">
      <VoyBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients }
          }) =>
            backgroundImage !== null
              ? `url(${backgroundImage})`
              : `${linearGradient(
                  rgba(gradients.info.main, 0.6),
                  rgba(gradients.info.state, 0.6)
                )}, url(${curved0.src})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          overflow: 'hidden'
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(20px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
            rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: 'relative',
          mt: -8,
          mx: 3,
          py: 2,
          px: 2
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            {profileImage ? (
              <VoyAvatar
                src={profileImage}
                alt="profile-image"
                variant="rounded"
                size="xl"
                shadow="sm"
              />
            ) : (
              <VoyAvatar
                variant="rounded"
                size="xl"
                shadow="sm"
                {...stringAvatar('zach hansen')}
              />
            )}
          </Grid>
          <Grid item>
            <VoyBox height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {user?.displayName || ''}
              </Typography>
              <VoyTypography
                variant="button"
                color="textColor"
                fontWeight="medium"
              >
                {user?.email || ''}
              </VoyTypography>
            </VoyBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: 'transparent' }}
              >
                <Tab label="App" />
                <Tab label="Message" />
              </Tabs>
            </AppBar>
          </Grid>
          {currentUser?.uid === user?.uid ? (
            <Grid item>
              <VoyBox sx={{ flexGrow: 0 }}>
                <Tooltip title="Edit profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{}}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    key={'Profile Picture'}
                    component="label"
                    onClick={handleCloseUserMenu}
                  >
                    Edit Profile Picture
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleProfileUpload}
                    />
                  </MenuItem>
                  <MenuItem
                    key={'Background'}
                    component="label"
                    onClick={handleCloseUserMenu}
                  >
                    Edit Background
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleBackgroundUpload}
                    />
                  </MenuItem>
                </Menu>
              </VoyBox>
            </Grid>
          ) : null}
        </Grid>
      </Card>
    </VoyBox>
  );
};

export default ProfileHeader;
