import axios from "axios";
const baseUrl = " http://localhost:3001/api/questions";
const read = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const apiCall = { read };

export default apiCall;
