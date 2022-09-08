import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Icon from '@mui/material/Icon';
import SidenavCollapsed from './SideNavCollapsed';
import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from '../../theme/components/sideNav/sidenav';
import VoyBox from '../muiStyled/VoyBox';
import VoyTypography from '../muiStyled/VoyTypography';
import { setMiniSidenav, useUIController } from '../../contexts/uiContext';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'mui-image';

const routes = [
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
    route: '/profile',
    noCollapse: true
  }
];

interface ISideNavProps {}

const Sidenav: FunctionComponent<ISideNavProps> = props => {
  const { state, dispatch } = useUIController();
  const { miniSidenav } = state;
  const collapseName = useRouter().pathname.split('/').slice(1)[0];
  const closeSidenav = useCallback(() => setMiniSidenav(dispatch, true), []);

  useEffect(() => {
    const handleMiniSidenav = () =>
      setMiniSidenav(dispatch, window.innerWidth < 1200);

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener('resize', handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, []);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(
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
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </VoyTypography>
        </VoyBox>
        <Link href="/">
          <VoyBox display="flex" alignItems="center">
            {/* <Image src={'assets/images/logo-ct.png'} /> */}
            <VoyBox sx={theme => sidenavLogoLabel(theme, miniSidenav)}>
              <VoyTypography variant="button" fontWeight="medium">
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
