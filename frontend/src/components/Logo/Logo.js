import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <div style={{ color: theme.palette.primary.dark, fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
      <img src="/assets/images/icons/ProjectLogo.webp" alt="Logo" style={{ maxHeight: '40px' }} />
      Visual Finance
    </div>
  );
};

export default Logo;
