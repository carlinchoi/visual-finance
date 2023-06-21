import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return <div style={{ color: theme.palette.primary.dark, fontSize: '24px', fontWeight: 'bold' }}>Visual Finance</div>;
};

export default Logo;
 