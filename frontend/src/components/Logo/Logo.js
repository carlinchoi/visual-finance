import React from 'react';
import { useDispatch } from 'react-redux';
import { resetSearchTicker } from '../../store/actions/financialStatementActions';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const ResetHome = () => {
    dispatch(resetSearchTicker());
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(resetSearchTicker());
    }
  };

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div
        role="button"
        tabIndex={0}
        onClick={ResetHome}
        onKeyDown={handleKeyDown}
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
