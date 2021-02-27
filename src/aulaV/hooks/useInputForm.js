import { useState } from 'react';
export const useInputForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
};
