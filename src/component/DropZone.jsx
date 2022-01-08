import { useEffect, useState, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Center, Text } from "@chakra-ui/react";
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
      return fontSize + "px";
    } else if (fontSize < 150) {
      return "4rem";
    } else if (fontSize > 200) {
      return "2.5rem";
    } else {
      return "4.5rem";
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
          h="50%"
          align="center"
          id="textBoxContainer"
          onMouseEnter={() => {
            setFontSize(charCount());
          }}
        >
          <Text
            id="text-box"
            h="auto"
            fontSize={adjustFontSize}
            align="justify"
            color="rgba(248, 245, 239, 0.75)"
            css={{
              fontFamily: "Nanum Myeongjo",
            }}
          >
            {basePos && (
              <TextTransition
                text={combinedMessage}
                springConfig={presets.molasses}
              ></TextTransition>
            )}
          </Text>
        </Box>
      </Center>
      <Center>
        <Box w="1100px" h="800px"></Box>
      </Center>
    </>
  );
}

export default DropZone;
