import { useState, useEffect } from 'react';

const useFormData = (defaultValues, initialValues) => {
  const [formData, setFormData] = useState({ ...defaultValues, ...initialValues });
  const [showColorPicker, setShowColorPicker] = useState({});

  useEffect(() => {
    setFormData({ ...defaultValues, ...initialValues });
    const showPickerState = {};
    Object.keys(defaultValues).forEach(key => {
      if (key.includes('Color')) {
        showPickerState[key] = false;
      }
    });
    setShowColorPicker(showPickerState);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (name, color) => {
    setFormData(prev => ({ ...prev, [name]: color.hex }));
  };

  const toggleColorPicker = (key) => {
    setShowColorPicker(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return {
    formData,
    showColorPicker,
    handleChange,
    handleColorChange,
    toggleColorPicker,
  };
};

export default useFormData;
