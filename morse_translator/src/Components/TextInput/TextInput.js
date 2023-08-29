import './TextInput.css';

function TextInput({ textData, handleTextInput }) {
  return (
    <div>
      <textarea placeholder="Enter your message here" value={textData} maxlength={250} onChange={(e) => handleTextInput(e)}>

      </textarea>
    </div>
  );
}

export default TextInput;
