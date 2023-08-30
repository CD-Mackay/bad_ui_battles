
function MorseInput({ morseData, handleMorseInput }) {
  return (
    <div>
      <textarea
        placeholder="Enter your message here"
        value={morseData}
        maxLength={250}
        cols={60}
        rows={5}
        onChange={(e) => handleMorseInput(e)}
      ></textarea>
    </div>
  );
}

export default MorseInput;
