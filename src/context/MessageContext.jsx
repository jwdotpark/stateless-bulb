import { createContext, useState } from "react";

const MessageContext = createContext([]);

// create a message context that accumulates the input
const MessageProvider = ({ children }) => {
  const [namsoMessage, setNamsoMessage] = useState([]);
  const [eunMessage, setEunMessage] = useState([]);
  const [hyunMessage, setHyunMessage] = useState([]);

  const [namsoMSGArr, setNamsoMSGArr] = useState([]);
  const [eunMSGArr, setEunMSGArr] = useState([]);
  const [hyunMSGArr, setHyunMSGArr] = useState([]);

  const [combinedMSG, setCombinedMSG] = useState([]);

  const [basePos, setBasePos] = useState(false);
  const [clickReset, setClickReset] = useState(false);

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
        clickReset,
        setClickReset,
        namsoMSGArr,
        setNamsoMSGArr,
        eunMSGArr,
        setEunMSGArr,
        hyunMSGArr,
        setHyunMSGArr,
        combinedMSG,
        setCombinedMSG,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
