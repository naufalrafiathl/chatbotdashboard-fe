import { useState } from "react";
import { useRouter } from "next/router";
import useChatbotData from "../../hooks/useChatbotData";
import ChatbotForm from "../../components/ChatbotForm";
import ChatWidget from "../../components/ChatWidget";

const CustomizeChatbot = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: initialValues, loading } = useChatbotData(id);
  const [previewValues, setPreviewValues] = useState(null);
  const [isShowChat, setShowChat] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  if (loading) return <p>Loading...</p>;

  const handleUpdate = (updatedValues) => {
    setPreviewValues(updatedValues);
  };

  const handlePreview = (updatedValues) => {
    setPreviewValues(updatedValues);
    setShowPreview(true);
  };

  const toggleShowChat = () => {
    setShowChat(!isShowChat);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ChatbotForm
        isEdit
        initialValues={initialValues}
        onUpdate={handleUpdate}
        onPreview={handlePreview}
      />
      {showPreview && (
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

export default CustomizeChatbot;
