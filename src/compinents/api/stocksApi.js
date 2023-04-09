import axios from "axios";
const API_KEY = "cgpe8ehr01qo64fgi3p0cgpe8ehr01qo64fgi3pg";
const BASE_URL = "https://finnhub.io/api/v1";
// curl "https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=cgpe8ehr01qo64fgi3p0cgpe8ehr01qo64fgi3pg"

// curl "https://finnhub.io/api/v1/quote?symbol=AAPL&token=cgpe8ehr01qo64fgi3p0cgpe8ehr01qo64fgi3pg"

const stocksApi = {
  getStocks: async () => {
    const response = await axios.get(
      `${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`
    );
    return response.data;
  },
  getProfile: (symbol) =>
    axios.get(`${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`),

  getPrice: (symbol) =>
    axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`),
};

export default stocksApi;
