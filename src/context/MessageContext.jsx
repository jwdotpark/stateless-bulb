import { createContext, useState } from "react";

const MessageContext = createContext([]);

// create a message context that accumulates the input
const MessageProvider = ({ children }) => {
  const [namsoMessage, setNamsoMessage] = useState("");
  const [eunMessage, setEunMessage] = useState("");
  const [hyunMessage, setHyunMessage] = useState("");
  const [basePos, setBasePos] = useState(false);
  return (
    <MessageContext.Provider
      value={{
        namsoMessage,
        setNamsoMessage,
        eunMessage,
        setEunMessage,
        hyunMessage,
        setHyunMessage,
        basePos,
        setBasePos,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
