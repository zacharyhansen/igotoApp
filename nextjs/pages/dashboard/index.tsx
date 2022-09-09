import NavBarDashboard from 'components/NavBarDashboard';
import BaseLayout from '../../layouts/BaseLayout';
import { NextPageWithLayout } from '../../nextjsTypeExtensions/NextPageWithLayout';
import { Card, Grid } from '@mui/material';
import VoyBox from 'components/muiStyled/VoyBox';

const DashBoard: NextPageWithLayout = () => {
  return (
    <Card>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
      <VoyBox p={10}></VoyBox>
    </Card>
  );
};

DashBoard.PageLayout = BaseLayout;

export default DashBoard;
