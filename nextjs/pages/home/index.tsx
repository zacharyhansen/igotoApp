import type { NextPage } from "next";
import { auth } from "../../config/firebase.config";
import BaseLayout from "../../layouts/BaseLayout";

const Home: NextPage = () => {
  const { currentUser } = auth;

  return (
    <BaseLayout>
      <div>Hello</div>
    </BaseLayout>
  );
};

export default Home;
