// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const SearchBar = () => (
  <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
    <FormControl sx={{ width: { xs: '100%', md: 770 } }}>
      <OutlinedInput
        size="small"
        id="search bar"
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
      />
    </FormControl>
  </Box>
);

export default SearchBar;
