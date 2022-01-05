import "./App.css";
import Main from "./main";
import { MessageProvider } from "./context/MessageContext";

function App() {
  return (
    <MessageProvider>
      <div className="App">
        <Main />
      </div>
    </MessageProvider>
  );
}

export default App;
