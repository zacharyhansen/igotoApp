import {
  FunctionComponent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VoyAvatar from '../../components/muiStyled/VoyAvatar';
import marie from '../../assets/images/marie.jpg';
import Image from 'next/image';
import VoyBox from '../../components/muiStyled/VoyBox';
import { useCurrentUserContext } from '../../contexts/currentUserContext';
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
import { useUploadFile } from 'react-firebase-hooks/storage';
import { getStorage, ref } from 'firebase/storage';
import { storage } from 'config/firebase.config';
import VoyButton from 'components/muiStyled/VoyButton';

interface IProfileHeaderProps {}

const ProfileHeader: FunctionComponent<IProfileHeaderProps> = () => {
  const [tabsOrientation, setTabsOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal');
  const [tabValue, setTabValue] = useState<number>(0);
  const currentUser = useCurrentUserContext()?.currentUser;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const file = ref(storage, 'IMG_7420.jpeg');
  const [selectedFile, setSelectedFile] = useState<File>();

  const upload = async () => {
    console.log('Error: ', error, snapshot);
    if (selectedFile) {
      const result = await uploadFile(file, selectedFile);
    }
  };

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    const handleTabsOrientation = () => {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal');
    };

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener('resize', handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = useCallback(
    (event: SyntheticEvent<Element, Event>, newValue: number) =>
      setTabValue(newValue),
    []
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            `${linearGradient(
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
            <VoyAvatar
              // src="test"
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            >
              <Image
                src={currentUser?.photoURL || marie}
                alt="me"
                layout="fill"
              />
            </VoyAvatar>
          </Grid>
          <Grid item>
            <VoyBox height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {currentUser?.displayName}
              </Typography>
              <VoyTypography
                variant="button"
                color="textColor"
                fontWeight="medium"
              >
                {currentUser?.email}
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
          <Grid item>
            <VoyBox sx={{ flexGrow: 0 }}>
              <Tooltip title="Edit profile">
                <IconButton onClick={handleOpenUserMenu} sx={{}}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                // id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                // keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={'Profile Picture'} component="label">
                  Edit Profile Picture
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={e => {
                      const file = e.target.files
                        ? e.target.files[0]
                        : undefined;
                      setSelectedFile(file);
                    }}
                  />
                </MenuItem>
                <MenuItem
                  key={'Background'}
                  onClick={handleCloseUserMenu}
                  component="label"
                >
                  Edit Background
                  <input hidden accept="image/*" type="file" />
                </MenuItem>
              </Menu>
            </VoyBox>
          </Grid>
        </Grid>
      </Card>
      {error && <strong>Error: {error.message}</strong>}
      {uploading && <span>Uploading file...</span>}
      {snapshot && <span>Snapshot: {JSON.stringify(snapshot)}</span>}
      {selectedFile && <span>Selected file: {selectedFile.name}</span>}
      <VoyButton onClick={upload}>Upload</VoyButton>
    </VoyBox>
  );
};

export default ProfileHeader;
