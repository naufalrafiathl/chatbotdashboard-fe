import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ChromePicker } from 'react-color';
import useFormData from '../hooks/useFormData';

const ChatbotForm = ({ isEdit = false, initialValues = {}, onUpdate, onPreview }) => {
  const defaultValues = {
    name: '',
    bgColor: '#ffffff',
    buttonTextColor: '#000000',
    buttonText: 'Chat Now',
    logoBgColor: '#ffffff',
    senderTextColor: '#2563EB',
    storeName: 'Your Store',
    popupColorPrimary: '#ffffff',
    popupColorSecondary: '#2563EB',
    sendButtonColor: '#3B82F6',
  };

  const {
    formData,
    showColorPicker,
    handleChange,
    handleColorChange,
    toggleColorPicker,
  } = useFormData(defaultValues, initialValues);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit 
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/chatbot/customize/${initialValues.id}` 
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/chatbot/create`;
    const method = isEdit ? 'put' : 'post';

    try {
      const token = localStorage.getItem('token');
      await axios({
        method,
        url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      });
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreview = (e) => {
    e.preventDefault();
    if (onPreview) {
      onPreview(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[50%] bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">{isEdit ? 'Edit Chatbot' : 'Create Chatbot'}</h2>
      {Object.keys(formData).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
          {key.includes('Color') ? (
            <div className="flex items-center">
              <input
                type="text"
                name={key}
                className="w-full p-2 border border-gray-300 rounded"
                value={formData[key] || ''}
                onChange={handleChange}
              />
              <button 
                type="button" 
                onClick={() => toggleColorPicker(key)} 
                className="ml-2 bg-blue-500 text-white p-2 rounded"
              >
                Pick
              </button>
              {showColorPicker[key] && (
                <ChromePicker
                  color={formData[key]}
                  onChangeComplete={(color) => handleColorChange(key, color)}
                />
              )}
            </div>
          ) : (
            <input
              type="text"
              name={key}
              className="w-full p-2 border border-gray-300 rounded"
              value={formData[key] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          {isEdit ? 'Update' : 'Create'}
        </button>
        <button onClick={handlePreview} className="bg-gray-600 text-white p-2 rounded">
          Preview
        </button>
      </div>
    </form>
  );
};

export default ChatbotForm;
