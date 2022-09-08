import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import { useUIController } from '../../contexts/uiContext';
import {
  cardContent,
  cardIconBox,
  cardIcon,
  card
} from '../../theme/components/sideNav/sidenavCard';
import VoyBox from '../muiStyled/VoyBox';

function SidenavCard() {
  const { state } = useUIController();
  const { miniSidenav, sidenavColor } = state;

  return (
    <Card sx={theme => card(theme, miniSidenav)}>
      <CardContent sx={theme => cardContent(theme)}>
        <VoyBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={theme => cardIcon(theme)}>
            star
          </Icon>
        </VoyBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
