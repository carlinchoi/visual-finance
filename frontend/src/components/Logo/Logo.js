import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div
        role="button"
        tabIndex={0}
        style={{
          cursor: 'pointer',
          color: theme.palette.primary.dark,
          fontSize: '24px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img src="/assets/images/icons/ProjectLogo.webp" alt="Logo" style={{ maxHeight: '40px' }} />
        Visual Finance
      </div>
    </Link>
  );
};

export default Logo;
