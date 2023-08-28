import './TextInput.css';

function TextInput({ textData, handleTextInput }) {
  return (
    <div>
      <textarea placeholder="Enter your message here" value={textData} onChange={(e) => handleTextInput(e)}>

      </textarea>
    </div>
  );
}

export default TextInput;
