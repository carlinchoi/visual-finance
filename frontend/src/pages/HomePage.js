import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector to access Redux state
import HomeText from 'components/cards/HomeText';
import SearchBar from 'components/SearchBar';
import MainCard from 'components/MainCard';
import HomeNews from 'components/cards/HomeNews';
import HomeExample from 'components/cards/HomeExample';
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SET_LOGGED_IN } from 'store/actions/auth';

const HomePage = () => {
  // Use loggedIn to control alert rendering
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch(); // Get the dispatch function

  // Access the loggedIn state from Redux
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  // Use useEffect to display the alert when loggedIn is true
  useEffect(() => {
    if (loggedIn) {
      // Display the alert
      setOpen(true);
      dispatch({ type: SET_LOGGED_IN, payload: false });
      setTimeout(() => {
        setOpen(false);
      }, 8000); // Adjust the timeout duration as needed
    }
  }, [loggedIn, dispatch]); // Include dispatch in the dependency array

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '80px' }}>
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
                      setOpen(false);
                      // Dispatch an action to set loggedIn to false when the alert is closed
                      dispatch({ type: SET_LOGGED_IN, payload: false });
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
