import UserCard from '../../../components/Cards/UserCard';
import { auth } from '../../../config/firebase.config';
import BaseLayout from '../../../layouts/BaseLayout';
import { NextPageWithLayout } from '../../../nextjsTypeExtensions/NextPageWithLayout';

const Profile: NextPageWithLayout = () => {
  const { currentUser } = auth;

  return (
    <div>
      {currentUser ? <UserCard user={currentUser} /> : null}
      <div>{JSON.stringify(currentUser)}</div>
    </div>
  );
};

Profile.PageLayout = BaseLayout;

export default Profile;
