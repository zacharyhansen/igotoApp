import { useCallback, useEffect, useMemo } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Icon from '@mui/material/Icon';
import SidenavCollapsed from './SideNavCollapsed';
import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from './styles/sidenav';
import VoyBox from '../muiStyled/VoyBox';
import VoyTypography from '../muiStyled/VoyTypography';
import { setMiniSidenav, useUIController } from '../../contexts/uiContext';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import logoSVG from 'assets/svgs/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import { useCurrentUserContext } from 'contexts/currentUserContext';
import { routes } from 'constants/routes';

interface ISideNavProps {}

const Sidenav: FunctionComponent<ISideNavProps> = props => {
  const { state, dispatch } = useUIController();
  const { miniSidenav } = state;
  const pathname = useRouter().pathname;
  const collapseName = pathname.split('/').slice(1)[0];
  const closeSidenav = useCallback(() => setMiniSidenav(dispatch, true), []);
  const currentUser = useCurrentUserContext()?.currentUser;
  const routeOptions = useMemo(
    () => [
      {
        type: 'link',
        name: 'Dashboard',
        key: 'dashboard',
        route: '/dashboard',
        noCollapse: true
      },
      {
        type: 'link',
        name: 'Tables',
        key: 'tables',
        route: '/tables',
        noCollapse: true
      },
      { type: 'title', title: 'Account Pages', key: 'account-pages' },
      {
        type: 'link',
        name: 'Profile',
        key: 'profile',
        route: `${routes.PROFILE}/${currentUser?.uid}`,
        noCollapse: true
      }
    ],
    [currentUser?.uid]
  );
  useEffect(() => {
    const handleMiniSidenav = () => {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    };

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener('resize', handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, pathname]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routeOptions.map(
    ({ type, name, title, noCollapse, key, route }) => {
      if (type === 'link') {
        return (
          <Link href={route!} key={key}>
            <SidenavCollapsed
              // color={color}
              key={key}
              name={name}
              icon={<AdbIcon />}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        );
      } else if (type === 'title') {
        return (
          <VoyTypography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            opacity={0.6}
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </VoyTypography>
        );
      }
      return <Divider key={key} />;
    }
  );

  return (
    <SidenavRoot {...props} variant="permanent" miniSidenav={miniSidenav}>
      <VoyBox pt={3} pb={1} px={4} textAlign="center">
        <VoyBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: 'pointer' }}
        >
          <VoyTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}>
              <CloseIcon />
            </Icon>
          </VoyTypography>
        </VoyBox>
        <Link href="/">
          <VoyBox display="flex" alignItems="center">
            <Image src={logoSVG} height="25rem" width="25rem" />
            <VoyBox sx={theme => sidenavLogoLabel(theme, miniSidenav)}>
              <VoyTypography
                component="h6"
                variant="button"
                fontWeight="medium"
              >
                Voyame
              </VoyTypography>
            </VoyBox>
          </VoyBox>
        </Link>
      </VoyBox>
      <Divider />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
};

export default Sidenav;
