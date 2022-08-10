import { FunctionComponent } from 'react';
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
import NavBarDashboard from '../../components/NavBarDashboard/NavBarDashboard';
interface IProfileHeaderProps {}

const ProfileHeader: FunctionComponent<IProfileHeaderProps> = () => {
  const currentUser = useCurrentUserContext()?.currentUser;
  return (
    <VoyBox position="relative">
      <NavBarDashboard absolute light />
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
          backdropFilter: `saturate(200%) blur(30px)`,
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
              src="test"
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            >
              <Image src={marie} alt={'test'} layout="fill" />
            </VoyAvatar>
          </Grid>
          <Grid item>
            <VoyBox height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {currentUser?.displayName}
              </Typography>
              <VoyTypography variant="button" color="text" fontWeight="medium">
                {currentUser?.email}
              </VoyTypography>
            </VoyBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}></Grid>
        </Grid>
      </Card>
    </VoyBox>
  );
};

export default ProfileHeader;
