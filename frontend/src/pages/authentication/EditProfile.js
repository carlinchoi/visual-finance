import React from 'react';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { editProfile, SET_EDIT_STATUS } from 'store/actions/auth';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Alert,
  Collapse
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import AnimateButton from 'components/transitions-animations/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showPassword, setShowPassword] = useState(false);
  const [level, setLevel] = useState();
  const editStatus = useSelector((state) => state.auth.editStatus);
  const [open, setOpen] = useState(false);

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (editStatus) {
      // Display the alert
      setOpen(true);
      dispatch({ type: SET_EDIT_STATUS, payload: false });
      setTimeout(() => {
        setOpen(false);
      }, 5000); // Adjust the timeout duration as needed
    }
  }, [editStatus, dispatch]); // Include dispatch in the dependency array

  return (
    <div>
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
                  dispatch({ type: SET_EDIT_STATUS, payload: false });
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Changes Saved!
          </Alert>
        </Collapse>
      </Box>
      <h1>Edit Profile</h1>
      <Formik
        initialValues={{
          email: user?.user?.email || '', // Provide a default value or an empty string
          password: user?.user?.password || '', // Provide a default value or an empty string
          firstName: user?.user?.firstName || '', // Provide a default value or an empty string
          lastName: user?.user?.lastName || '', // Provide a default value or an empty string
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().max(255).required('First Name is required'),
          lastName: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(true); // Set this to true while the request is in progress.
            const { email, password, firstName, lastName } = values;
            // Only include the password in the request if it has been modified.
            const requestData = {
              email,
              firstName,
              lastName
            };
            if (password && password.trim() !== '') {
              requestData.password = password;
            }
            console.log(requestData.email, requestData.password, requestData.firstName, requestData.lastName);
            dispatch(editProfile(requestData, user));
            dispatch({ type: SET_EDIT_STATUS, payload: true });
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstName-signup">First Name*</InputLabel>
                  <OutlinedInput
                    id="firstName-login"
                    type="firstName"
                    value={values.firstName}
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstName && errors.firstName)}
                  />
                  {touched.firstName && errors.firstName && (
                    <FormHelperText error id="helper-text-firstName-signup">
                      {errors.firstName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastName-signup">Last Name*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastName && errors.lastName)}
                    id="lastName-signup"
                    type="lastName"
                    value={values.lastName}
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Doe"
                    inputProps={{}}
                  />
                  {touched.lastName && errors.lastName && (
                    <FormHelperText error id="helper-text-lastName-signup">
                      {errors.lastName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Save changes
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
