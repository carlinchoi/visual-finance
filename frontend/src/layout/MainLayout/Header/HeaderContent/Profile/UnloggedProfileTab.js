import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { EditOutlined, UserOutlined } from '@ant-design/icons';

const UnloggedProfileTab = () => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate(); // Use useNavigate

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 0) {
      // Navigate to the Login route
      navigate('/login');
    } else if (index === 1) {
      // Navigate to the Register route
      navigate('/register');
    }
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="Register New Account" />
      </ListItemButton>
    </List>
  );
};

UnloggedProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default UnloggedProfileTab;
