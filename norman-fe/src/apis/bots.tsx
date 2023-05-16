import axios from "axios";

import Bot from "../types/Bot";

const API_URL = "http://0.0.0.0:8000";

export const getBots = async () => {
  const { data } = await axios.get(`${API_URL}/api/bots`);

  return data;
};

export const createBot = async (bot: Bot) => {
  const { data } = await axios.post(`${API_URL}/api/bots/create`, bot);

  return data;
};
