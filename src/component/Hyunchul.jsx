import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import assets from "../assets/assets";

function Hyunchul() {
  const initialState = {
    1: { x: 0, y: 0 },
    2: { x: 0, y: 0 },
    3: { x: 0, y: 0 },
    4: { x: 0, y: 0 },
    5: { x: 0, y: 0 },
    6: { x: 0, y: 0 },
    7: { x: 0, y: 0 },
    8: { x: 0, y: 0 },
    9: { x: 0, y: 0 },
    10: { x: 0, y: 0 },
  };

  const { setHyunMessage } = useContext(MessageContext);

  const [hyun, setHyun] = useState(initialState);
  const [message] = useState("");

  const hyun_link = [];
  const hyun_alt = [];

  for (let i in hyun) {
    hyun_link.push(assets.hyunchul[i].link);
    hyun_alt.push(assets.hyunchul[i].alt);
  }

  useEffect(() => {
    let message = "";
    for (let i in hyun) {
      if (hyun[i].alt) {
        message += `${hyun[i].alt} `;
      }
    }
    setHyunMessage(message);
  }, [hyun, setHyunMessage]);

  return (
    <Center>
      <Box w="1100px" h="1200px" zIndex={3}>
        <Flex direction="row" wrap="wrap">
          {hyun_link.map((link, index) => {
            return (
              <Box key={index} w="120px" h="550px" mx="-.5rem">
                <Rnd
                  onDragStop={(e, d) => {
                    if (d.y < -1700) {
                      setHyun({
                        ...hyun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: hyun_alt[index],
                        },
                      });
                    } else {
                      setHyun({
                        ...hyun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: "",
                        },
                      });
                    }
                  }}
                  enableResizing={true}
                  default={{
                    x: 0,
                    y: 0,
                    width: 120,
                    height: 175,
                  }}
                >
                  <Box>
                    <Image src={`${link}`} draggable="false" />
                  </Box>
                </Rnd>
              </Box>
            );
          })}
        </Flex>
        {JSON.stringify(hyun)}
        <Box position="absolute" m="4rem" sx={{ top: "500px", left: 0 }}>
          <Text fontSize="xl">{message}</Text>
        </Box>
      </Box>
    </Center>
  );
}

export default Hyunchul;
