import { useCurrentUserContext } from '../../../contexts/currentUserContext';
import BaseLayout from '../../../layouts/BaseLayout';
import { NextPageWithLayout } from '../../../nextjsTypeExtensions/NextPageWithLayout';
import { VoyAvatar } from '../../../components/Avatars/VoyAvatar/VoyAvatarStyled';
import marie from '../../../assets/images/marie.jpg';
import Image from 'next/image';

const Profile: NextPageWithLayout = () => {
  const currentUser = useCurrentUserContext()?.currentUser;
  return (
    <div>
      {/* {currentUser ? <UserCard user={currentUser} /> : null} */}
      {/* <div>{JSON.stringify(currentUser)}</div> */}
      <VoyAvatar alt="profile-image" variant="rounded" size="xl" shadow="sm">
        <Image src={marie} alt={'test'} layout="fill" />
      </VoyAvatar>
    </div>
  );
};

Profile.PageLayout = BaseLayout;

export default Profile;
