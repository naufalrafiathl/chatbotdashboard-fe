import { useState, useEffect } from 'react';
import { getChatBotById } from './getChatbots';

const useChatbotData = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChatbots = async () => {
      try {
        const chatbotData = await getChatBotById(id);
        setData(chatbotData);
      } catch (error) {
        console.error('Error fetching chatbots:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchChatbots();
    }
  }, [id]);

  return { data, loading };
};

export default useChatbotData;
