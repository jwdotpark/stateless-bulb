import { createContext, useState } from "react";

const MessageContext = createContext([]);

// create a message context that accumulates the input
const MessageProvider = ({ children }) => {
  const [globalMessage, setGlobalMessage] = useState([""]);

  const addMessage = (message) => {
    setGlobalMessage([...globalMessage, message]);
  };

  return (
    <MessageContext.Provider
      value={{
        globalMessage,
        setGlobalMessage,
        addMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
