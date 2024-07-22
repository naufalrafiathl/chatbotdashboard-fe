import { useState } from "react";
import ChatbotForm from "../../components/ChatbotForm";
import ChatWidget from "../../components/ChatWidget";

const CreateChatbot = () => {
  const [previewValues, setPreviewValues] = useState(null);
  const [isShowChat, setShowChat] = useState(false);

  const handleUpdate = (updatedValues) => {
    setPreviewValues(updatedValues);
  };

  const handlePreview = (updatedValues) => {
    setPreviewValues(updatedValues);
    setShowChat(true);
  };

  const toggleShowChat = () => {
    setShowChat(!isShowChat);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ChatbotForm onUpdate={handleUpdate} onPreview={handlePreview} />
      {previewValues && (
        <div className="mt-8">
          <ChatWidget
            themes={previewValues}
            isShowChat={isShowChat}
            toggleShowChat={toggleShowChat}
          />
        </div>
      )}
    </div>
  );
};

export default CreateChatbot;
