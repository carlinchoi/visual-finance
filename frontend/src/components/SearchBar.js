import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, InputAdornment, OutlinedInput, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { connect } from 'react-redux';
import { setSearchTicker } from '../store/actions/financialStatementActions';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = ({ setSearchTicker }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const uppercaseValue = searchValue.toUpperCase();
      setSearchTicker(uppercaseValue);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, width: '100%' }}>
        <FormControl sx={{ flex: 1, marginRight: 1 }}>
          <OutlinedInput
            size="small"
            id="search-bar"
            startAdornment={
              <InputAdornment position="start" sx={{ marginRight: -0.5 }}>
                <SearchOutlined />
              </InputAdornment>
            }
            aria-describedby="search-bar-text"
            inputProps={{
              'aria-label': 'weight',
              onKeyDown: handleSearch
            }}
            placeholder="Search for Stock Ticker"
            value={searchValue}
            onChange={handleChange}
          />
        </FormControl>
        <Button variant="contained" endIcon={<SendIcon />} sx={{ marginLeft: -1 }}>
          Search
        </Button>
      </Box>
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
