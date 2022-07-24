import axios from "axios";
const baseUrl = "https://the-trivia-api.com/api/questions";
const read = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const apiCall = { read };

export default apiCall;
