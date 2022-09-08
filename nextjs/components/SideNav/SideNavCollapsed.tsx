import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText
} from './styles/sidenavCollapsed';
import VoyBox from '../muiStyled/VoyBox';
import { useUIController } from '../../contexts/uiContext';

interface ISideNavCollapseProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'dark';
  icon?: JSX.Element;
  name?: string;
  children?: JSX.Element | JSX.Element[];
  active?: boolean;
  noCollapse?: boolean;
  open?: boolean;
}

const SideNavCollapsed = ({
  color = 'info',
  icon,
  name,
  children,
  active = false,
  noCollapse = false,
  open = false,
  ...rest
}: ISideNavCollapseProps) => {
  const { state } = useUIController();
  const { miniSidenav } = state;

  return (
    <>
      <ListItem component="li">
        <VoyBox {...rest} sx={theme => collapseItem(theme, active)}>
          <ListItemIcon sx={theme => collapseIconBox(theme, active, color)}>
            {typeof icon === 'string' ? (
              <Icon sx={theme => collapseIcon(theme, active)}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>
          <ListItemText
            primary={name}
            sx={theme => collapseText(theme, miniSidenav, active)}
          />
        </VoyBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
};

export default SideNavCollapsed;
