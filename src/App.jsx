import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [question, setquestion] = useState("");
  const [answer, setanwer] = useState("");

  async function generateAnswer() {
    console.log("Loading");
    const response = await axios({
      url: "",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      },
    });
    setanwer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <div className="chatbot-container">
      <h1 className="chatbot-heading">AI CHATBOT</h1>
      <textarea
        className="chatbot-textarea"
        value={question}
        onChange={(e) => setquestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default Enter key behavior (new line)
            generateAnswer(); // Trigger the generateAnswer function on Enter
          }
        }}
        placeholder="Type your question here..."
        cols={30}
        rows={10}
      ></textarea>
      <br />
      <button className="chatbot-button" onClick={generateAnswer}>
        Generate Answer
      </button>

      {/* Answer Box */}
      {answer && (
        <div className="answer-box">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
