import { FunctionComponent } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';

export enum ItemIconType {
  icon,
  avatar
}

export interface IItem {
  primaryText: string;
  primaryIcon?: JSX.Element;
  primaryIconType?: ItemIconType;
  primaryAction?: VoidFunction;
  secondaryText?: string;
  secondaryIcon?: JSX.Element;
  link?: string;
}

interface IItemProps {
  listItem: IItem;
  asButton?: boolean;
}

const Item: FunctionComponent<IItemProps> = ({
  listItem,
  asButton = false
}) => {
  const { link } = listItem;

  return link ? (
    <Link href={link}>
      <a>
        <ItemBase listItem={listItem} asButton={asButton} />
      </a>
    </Link>
  ) : (
    <ItemBase listItem={listItem} asButton={asButton} />
  );
};

const ItemBase: FunctionComponent<IItemProps> = ({
  listItem,
  asButton = false
}) => {
  const {
    primaryText,
    primaryIcon,
    primaryIconType = ItemIconType.icon,
    secondaryIcon,
    secondaryText,
    primaryAction,
    link
  } = listItem;
  return asButton ? (
    <ListItemButton onClick={primaryAction}>
      {primaryIcon ? (
        primaryIconType === ItemIconType.icon ? (
          <ListItemIcon>{primaryIcon}</ListItemIcon>
        ) : (
          <ListItemAvatar>
            <Avatar>{primaryIcon}</Avatar>
          </ListItemAvatar>
        )
      ) : null}
      <ListItemText
        primary={primaryText}
        secondary={secondaryText ? secondaryText : null}
      />
    </ListItemButton>
  ) : (
    <ListItem
      secondaryAction={
        secondaryIcon ? (
          <IconButton edge="end" aria-label="delete">
            {secondaryIcon}
          </IconButton>
        ) : null
      }
    >
      {primaryIcon ? (
        primaryIconType === ItemIconType.icon ? (
          <ListItemIcon>{primaryIcon}</ListItemIcon>
        ) : (
          <ListItemAvatar>
            <Avatar>{primaryIcon}</Avatar>
          </ListItemAvatar>
        )
      ) : null}
      <ListItemText
        primary={primaryText}
        secondary={secondaryText ? secondaryText : null}
      />
    </ListItem>
  );
};

export default Item;
