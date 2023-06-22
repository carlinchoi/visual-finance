// import axios from '../boot/axios.js';

const fetchFinancialData = async (ticker) => {
  try {
    // const response = await axios.get('/financial-data', {
    //   params: {
    //     ticker: ticker
    //   }
    // });

    // // Handle the response, update the state, etc.
    // console.log(response.data);
    console.log(ticker);
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};

// Example usage
const handleSearch = (ticker) => {
  fetchFinancialData(ticker);
};

// Call the function with the desired ticker from user input
handleSearch('AAPL'); // Example: Passing 'AAPL' as the ticker

export default handleSearch;
