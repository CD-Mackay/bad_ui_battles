import './TextInput.css';

function TextInput({ textData, handleTextInput }) {
  return (
    <div>
      <textarea placeholder="Enter your message here" value={textData} maxLength={250} cols={60} rows={5} onChange={(e) => handleTextInput(e)}>

      </textarea>
    </div>
  );
}

export default TextInput;
