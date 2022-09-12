import { useCurrentUserContext } from '../../contexts/currentUserContext';
import BaseLayout from '../../layouts/BaseLayout';
import { NextPageWithLayout } from '../../nextjsTypeExtensions/NextPageWithLayout';
import ProfileLayout from '../../layouts/ProfileLayout';

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
