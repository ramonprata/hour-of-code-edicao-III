import { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState();

  const handleBlur = (event) => {
    console.log('onBlur called!', event);
  };

  const handleTyping = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="input-container">
      <label for="type-input">Type here</label>
      <p>{text}</p>
      <input
        type="text"
        id="type-input"
        name="type-input"
        onBlur={(e) => handleBlur(e)}
        onChange={handleTyping}
      ></input>
    </div>
  );
};

export default TextInput;
