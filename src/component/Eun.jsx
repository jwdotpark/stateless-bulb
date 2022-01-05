import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import assets from "../assets/assets";

function Eun() {
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
    11: { x: 0, y: 0 },
    12: { x: 0, y: 0 },
    13: { x: 0, y: 0 },
    14: { x: 0, y: 0 },
    15: { x: 0, y: 0 },
    16: { x: 0, y: 0 },
    17: { x: 0, y: 0 },
    18: { x: 0, y: 0 },
    19: { x: 0, y: 0 },
    20: { x: 0, y: 0 },
  };

  const { globalMessage, setGlobalMessage, addMessage } =
    useContext(MessageContext);

  const [eun, setEun] = useState(initialState);
  const [message, setMessage] = useState("");

  const eun_link = [];
  const eun_alt = [];

  for (let i in eun) {
    eun_link.push(assets.eun[i].link);
    eun_alt.push(assets.eun[i].alt);
  }

  useEffect(() => {
    let message = "";
    for (let i in eun) {
      if (eun[i].alt) {
        message += `${eun[i].alt} `;
      }
    }
    // setMessage(message);
    setGlobalMessage(message);
  }, [eun]);

  return (
    <Center>
      <Box w="1100px" h="1200px" zIndex={3}>
        <Flex direction="row" wrap="wrap">
          {eun_link.map((link, index) => {
            return (
              <Box key={index} w="90px" h="550px" mx=".5rem">
                <Rnd
                  onDragStop={(e, d) => {
                    if (d.y < -800) {
                      setEun({
                        ...eun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: eun_alt[index],
                        },
                      });
                    } else {
                      setEun({
                        ...eun,
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
                    width: 90,
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
        {/* {JSON.stringify(eun)} */}
        <Box position="absolute" m="4rem" sx={{ top: "500px", left: 0 }}>
          <Text fontSize="xl">{message}</Text>
        </Box>
      </Box>
    </Center>
  );
}

export default Eun;
