import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, InputAdornment, OutlinedInput, Button, Select, MenuItem } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SendIcon from '@mui/icons-material/Send';
import { connect } from 'react-redux';
import { setSearchTicker } from '../store/actions/financialStatementActions';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setSearchTicker }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('Search By Ticker');
  const navigate = useNavigate();
  const options = ['Search By Ticker', 'Search By Company Name'];

  const handleSearch = () => {
    const uppercaseValue = searchValue.toUpperCase();
    setSearchTicker(uppercaseValue);
    navigate('/dashboard/default');
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
            placeholder={selectedOption === 'Search By Ticker' ? 'Search for Stock Ticker' : 'Search for Company Name'}
            value={searchValue}
            onChange={handleChange}
          />
        </FormControl>
        <Select value={selectedOption} onChange={handleOptionChange} sx={{ marginRight: 1 }} size="small">
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
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
