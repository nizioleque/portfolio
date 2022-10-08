import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';

interface IconListItemProps {
  icon: ReactNode;
  text: string;
}

function IconListItem({ icon, text }: IconListItemProps) {
  return (
    <ListItem sx={{ py: 0, '& > .MuiListItemIcon-root': { minWidth: 48 } }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default IconListItem;
