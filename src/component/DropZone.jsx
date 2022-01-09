import { useEffect, useState, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Center } from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";

function DropZone() {
  const { namsoMessage, eunMessage, hyunMessage, basePos } =
    useContext(MessageContext);

  // dynamic font size
  const textVolume = [];

  const charCount = () => {
    let charCount = 0;
    for (let i in textVolume) {
      charCount += textVolume[i].length;
    }
    return charCount;
  };

  useEffect(() => {
    const textBox = document.getElementById("text-box");
    textVolume.push(textBox.textContent);
  });

  const [fontSize, setFontSize] = useState("");

  // helper function that returns a font size based on charCount()

  const adjustFontSize = () => {
    if (fontSize < 100) {
      return "3rem";
    } else if (fontSize < 150) {
      return "2.75rem";
    } else if (fontSize > 200) {
      return "2.5rem";
    } else {
      return "3rem";
    }
  };

  const combinedMessage = namsoMessage + eunMessage + hyunMessage;
  // namsoMessage + eunMessage + hyunMessage;

  return (
    <>
      <Center>
        <Box
          mt="5rem"
          zIndex="2"
          maxW="690px"
          minW="420px"
          // minH="600px"
          maxH="900px"
          h="50%"
          align="center"
          id="textBoxContainer"
          onMouseEnter={() => {
            setFontSize(charCount());
          }}
        >
          <Box
            position="absolute"
            zIndex="999"
            left="120px"
            h="720px"
            w="1100px"
            onMouseEnter={() => {
              setFontSize(charCount());
            }}
          ></Box>
          <Box
            border="1px"
            id="text-box"
            w="690px"
            h="600px"
            fontSize={adjustFontSize}
            // fontSize="6xl"
            align="justify"
            color="rgba(248, 245, 239, 0.75)"
            css={{
              fontFamily: "Nanum Myeongjo",
            }}
            onMouseEnter={() => {
              setFontSize(charCount());
            }}
            // noOfLines={10}
          >
            {basePos && (
              <TextTransition
                onMouseEnter={() => {
                  setFontSize(charCount());
                }}
                text={combinedMessage}
                springConfig={presets.molasses}
              />
            )}
          </Box>
        </Box>
      </Center>
      <Center>
        <Box w="1100px" h="800px"></Box>
      </Center>
    </>
  );
}

export default DropZone;
