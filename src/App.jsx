import axios from "axios";
import "./App.css";

function App() {
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
                text: "Explain how AI works",
              },
            ],
          },
        ],
      },
    });
    console.log(response);
  }
  return (
    <>
      <h1>AI CHATBOT</h1>
      <button onClick={generateAnswer}>generate Answer</button>
    </>
  );
}

export default App;
