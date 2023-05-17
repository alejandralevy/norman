import axios from "axios";

const API_URL = "http://0.0.0.0:8000";

export const getMessages = async (botId: string) => {
  const { data } = await axios.get(`${API_URL}/api/bots/${botId}/messages`);

  return data;
};

export const newMessage = async (botId: string, message: any) => {
  const { data } = await axios.post(`${API_URL}/api/bots/${botId}/messages`, message);

  return data;
};
