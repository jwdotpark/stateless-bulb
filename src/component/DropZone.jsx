import { useEffect, useState, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Center, Text } from "@chakra-ui/react";

function DropZone() {
  const { namsoMessage, eunMessage, hyunMessage } = useContext(MessageContext);

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
    console.log(charCount());
  });

  const [fontSize, setFontSize] = useState("");

  // helper function that returns a font size based on charCount()
  const adjustFontSize = () => {
    console.log("adjustfontsize fired");
    if (fontSize < 100) {
      return "6xl";
    } else if (fontSize < 200) {
      return "5xl";
    } else {
      return "4xl";
    }
  };

  return (
    <>
      <Center>
        <Box
          my="9rem"
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
            color="#fff"
            h="auto"
            fontSize={adjustFontSize()}
            align="justify"
            color="rgba(248, 245, 239, 0.6)"
            css={{
              fontFamily: "Nanum Myeongjo",
            }}
          >
            {fontSize}
            {namsoMessage}
            {eunMessage}
            {hyunMessage}
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
