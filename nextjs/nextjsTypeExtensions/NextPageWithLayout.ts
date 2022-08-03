import type { NextPage } from "next";
import { PageLayoutComponentInterface } from "../pages/_app";

// We extend the base NextPage component here to allow attaching layouts via component
// without needing to write the functional equivalent - see https://nextjs.org/docs/basic-features/layouts
export type NextPageWithLayout = NextPage & {
  PageLayout?: React.ComponentType<PageLayoutComponentInterface>;
};
