import BaseLayout from '../../layouts/BaseLayout';
import { NextPageWithLayout } from '../../nextjsTypeExtensions/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return (
    <BaseLayout>
      <div>Hello</div>
    </BaseLayout>
  );
};

export default Home;
