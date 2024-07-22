import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getChatbots = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/chatbot`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getChatBotById = async (id) => {
  if (id) {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/chatbot/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.chatbot;
  }
};
