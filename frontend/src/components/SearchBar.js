import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, InputAdornment, OutlinedInput, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SendIcon from '@mui/icons-material/Send';
import { connect } from 'react-redux';
import { setSearchTicker } from '../store/actions/financialStatementActions';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setSearchTicker }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const uppercaseValue = searchValue.toUpperCase();
    setSearchTicker(uppercaseValue);
    navigate('/dashboard/default');
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5, width: '100%' }}>
        <FormControl sx={{ flex: 1 }}>
          <OutlinedInput
            size="small"
            id="search-bar"
            startAdornment={
              <InputAdornment position="start" sx={{ marginRight: -0.5 }}>
                <SearchOutlinedIcon />
              </InputAdornment>
            }
            aria-describedby="search-bar-text"
            inputProps={{
              'aria-label': 'weight',
              onKeyDown: (event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }
            }}
            value={searchValue}
            onChange={handleChange}
            placeholder="Search by Ticker (e.g. MSFT, AAPL)"
          />
        </FormControl>

        <Button variant="contained" endIcon={<SendIcon />} sx={{ marginLeft: -1 }} onClick={handleSearch}>
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
