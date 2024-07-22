import { useState, useEffect } from 'react';
import { getChatbots } from './getChatbots';

const useChatbots = () => {
  const [chatbots, setChatbots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatbots = async () => {
      try {
        const data = await getChatbots();
        setChatbots(data.chatbots);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChatbots();
  }, []);

  return { chatbots, loading, error };
};

export default useChatbots;
