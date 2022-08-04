import { FunctionComponent } from 'react';
import List from '@mui/material/List';
import Item, { IItem } from './Item';

export interface IListItemsProps {
  listItems: IItem[];
  dense?: boolean;
  asButtons?: boolean;
}

const ListItems: FunctionComponent<IListItemsProps> = ({
  listItems,
  dense = false,
  asButtons = false
}) => {
  return (
    <List dense={dense}>
      {listItems.map(listItem => (
        <Item
          key={listItem.primaryText}
          listItem={listItem}
          asButton={asButtons}
        />
      ))}
    </List>
  );
};

export default ListItems;
