import axios from "axios";
const API_KEY = "cgpe8ehr01qo64fgi3p0cgpe8ehr01qo64fgi3pg";
const BASE_URL = "https://.finnhub.io/api/v1";

const stocksApi = {
  getStocks: async () => {
    const response = await axios.get(
      `${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`
    );
    return response.data;
  },
};

export default stocksApi;
