import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const loggedIn = useSelector((state) => state.auth.user);

  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        if (item.id === 'authentication' && loggedIn) {
          return null;
        }
        if (item.id === 'portfolio' && !loggedIn) {
          return null;
        }
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
