import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { connect } from 'react-redux';
import { setSearchTicker } from '../store/reducers/financialStatementReducer';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const SearchBar = ({ setSearchTicker }) => {
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTicker(searchValue);
  };

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 770 } }}>
        <OutlinedInput
          size="small"
          id="search-bar"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="search-bar-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder="Search for Stock Ticker"
          onChange={handleSearch} // Call handleSearch on input change
        />
      </FormControl>
    </Box>
  );
};

SearchBar.propTypes = {
  setSearchTicker: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTicker: (ticker) => dispatch(setSearchTicker(ticker))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
