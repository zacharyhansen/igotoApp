import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer, { DrawerProps } from '@mui/material/Drawer';

interface DrawerTempory extends DrawerProps {
  onToggleDrawer: () => void;
}

const TemporaryDrawer = ({
  anchor,
  open,
  onToggleDrawer,
  variant,
  children
}: DrawerTempory) => {
  const handleToggleDrawer = React.useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      onToggleDrawer();
    },
    [onToggleDrawer]
  );

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={handleToggleDrawer(false)}
      variant={variant}
    >
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onKeyDown={handleToggleDrawer(false)}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default TemporaryDrawer;
