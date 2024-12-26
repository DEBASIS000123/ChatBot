import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [question, setquestion] = useState("");

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
    console.log(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }
  return (
    <>
      <h1>AI CHATBOT</h1>
      <textarea
        value={question}
        onChange={(e) => setquestion(e.target.value)}
        name=""
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <br />
      <button onClick={generateAnswer}>generate Answer</button>
    </>
  );
}

export default App;
