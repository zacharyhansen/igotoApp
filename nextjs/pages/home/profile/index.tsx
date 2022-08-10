import { useCurrentUserContext } from '../../../contexts/currentUserContext';
import BaseLayout from '../../../layouts/BaseLayout';
import { NextPageWithLayout } from '../../../nextjsTypeExtensions/NextPageWithLayout';
import VoyAvatar from '../../../components/muiStyled/VoyAvatar';
import marie from '../../../assets/images/marie.jpg';
import Image from 'next/image';
import ProfileLayout from '../../../layouts/ProfileLayout';

const Profile: NextPageWithLayout = () => {
  const currentUser = useCurrentUserContext()?.currentUser;
  return (
    <div>
      <ProfileLayout />
    </div>
  );
};

Profile.PageLayout = BaseLayout;

export default Profile;
