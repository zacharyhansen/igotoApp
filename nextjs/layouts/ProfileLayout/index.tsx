import { Card, Grid } from '@mui/material';
import { FunctionComponent, Fragment } from 'react';
import VoyBox from '../../components/muiStyled/VoyBox';
import ProfileHeader from './ProfileHeader';

interface IProfileLayoutProps {}

const ProfileLayout: FunctionComponent<IProfileLayoutProps> = () => {
  return (
    <VoyBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: 'relative',
        [breakpoints.up('xl')]: {
          // marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard
          })
        }
      })}
    >
      <ProfileHeader />
      <VoyBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            {/* <PlatformSettings /> */}
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            {/* <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: 'Alec M. Thompson',
                mobile: '(44) 123 1234 123',
                email: 'alecthompson@mail.com',
                location: 'USA'
              }}
              social={[
                {
                  link: 'https://www.facebook.com/CreativeTim/',
                  icon: <FacebookIcon />,
                  color: 'facebook'
                },
                {
                  link: 'https://twitter.com/creativetim',
                  icon: <TwitterIcon />,
                  color: 'twitter'
                },
                {
                  link: 'https://www.instagram.com/creativetimofficial/',
                  icon: <InstagramIcon />,
                  color: 'instagram'
                }
              ]}
              action={{ route: '', tooltip: 'Edit Profile' }}
            /> */}
          </Grid>
          <Grid item xs={12} xl={4}>
            {/* <ProfilesList title="conversations" profiles={profilesListData} /> */}
          </Grid>
        </Grid>
      </VoyBox>
      <VoyBox mb={3}>
        <Card>
          <VoyBox pt={2} px={2}>
            <VoyBox mb={0.5}>
              {/* <SoftTypography variant="h6" fontWeight="medium">
                Projects
              </SoftTypography> */}
            </VoyBox>
            <VoyBox mb={1}>
              {/* <SoftTypography
                variant="button"
                fontWeight="regular"
                color="text"
              >
                Architects design houses
              </SoftTypography> */}
            </VoyBox>
          </VoyBox>
          <VoyBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                {/* <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: 'internal',
                    route: '/pages/profile/profile-overview',
                    color: 'info',
                    label: 'view project'
                  }}
                  authors={[
                    { image: team1, name: 'Elena Morison' },
                    { image: team2, name: 'Ryan Milly' },
                    { image: team3, name: 'Nick Daniel' },
                    { image: team4, name: 'Peterson' }
                  ]}
                /> */}
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                {/* <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: 'internal',
                    route: '/pages/profile/profile-overview',
                    color: 'info',
                    label: 'view project'
                  }}
                  authors={[
                    { image: team3, name: 'Nick Daniel' },
                    { image: team4, name: 'Peterson' },
                    { image: team1, name: 'Elena Morison' },
                    { image: team2, name: 'Ryan Milly' }
                  ]}
                /> */}
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                {/* <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: 'internal',
                    route: '/pages/profile/profile-overview',
                    color: 'info',
                    label: 'view project'
                  }}
                  authors={[
                    { image: team4, name: 'Peterson' },
                    { image: team3, name: 'Nick Daniel' },
                    { image: team2, name: 'Ryan Milly' },
                    { image: team1, name: 'Elena Morison' }
                  ]}
                /> */}
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                {/* <PlaceholderCard
                  title={{ variant: 'h5', text: 'New project' }}
                  outlined
                /> */}
              </Grid>
            </Grid>
          </VoyBox>
        </Card>
      </VoyBox>
    </VoyBox>
  );
};

export default ProfileLayout;
