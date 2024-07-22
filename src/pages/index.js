import React from "react";
import Link from "next/link";
import useChatbots from "../../hooks/useChatbots";
import { generateScript } from "../../utils/scriptUtils";

const Index = () => {
  const { chatbots, loading, error } = useChatbots();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching chatbots: {error.message}</p>;

  const handleCopyScript = (chatbot) => {
    const script = generateScript(chatbot);
    navigator.clipboard.writeText(script).then(() => {
      alert("Script copied to clipboard!");
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Chatbots</h1>
      {chatbots.length === 0 ? (
        <p>No chatbots found.</p>
      ) : (
        <ul className="space-y-4">
          {chatbots.map((chatbot) => (
            <li
              key={chatbot.id}
              className="flex justify-between bg-white p-4 rounded shadow"
            >
              <div>
                <h2 className="text-xl">{chatbot.name}</h2>
                <p>Background Color: {chatbot.bgColor}</p>
                <p>Button Text: {chatbot.buttonText}</p>
                <p>Store Name: {chatbot.storeName}</p>
              </div>
              <div className="flex justify-evenly ">
                <button
                  onClick={() => handleCopyScript(chatbot)}
                  className="mx-1 p-5 bg-green-500 my-auto text-white rounded-xl"
                >
                  Get iframe script!
                </button>
                <Link href="#">
                  <p className="mx-1 p-5 cursor-not-allowed bg-gray-400 my-auto text-gray-500 rounded-xl">
                    Configure Chat Data
                  </p>
                </Link>
                <Link href={`/customize?id=${chatbot.id}`}>
                  <p className="mx-1 p-5 bg-blue-700 my-auto text-white rounded-xl">
                    Edit
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;
