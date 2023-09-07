import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import HomeText from 'components/cards/HomeText';
import SearchBar from 'components/SearchBar';
import MainCard from 'components/MainCard';
import HomeNews from 'components/cards/HomeNews';
import HomeExample from 'components/cards/HomeExample';
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const HomePage = () => {
  // Use useSelector to access the user data from Redux state
  const user = useSelector((state) => state.auth.user);

  // Use useEffect to display the alert when user data is available
  useEffect(() => {
    if (user) {
      console.log('User data:', user);

      // Display the alert
      console.log('Login successful');
      setOpen(true);
    }
  }, [user]);

  // State to control the alert visibility
  const [open, setOpen] = React.useState(false);

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '80px' }}>
      {/* Display the alert when open is true */}
      {open && (
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      // Close the alert
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Login successful!
              </Alert>
            </Collapse>
          </Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <HomeText />
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <MainCard sx={{ mt: 2 }}>
            <SearchBar />
          </MainCard>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
        <Grid item xs={5}>
          <HomeNews />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
        <Grid item xs={12}>
          <HomeExample />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
