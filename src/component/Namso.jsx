import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import assets from "../assets/assets";

function Namso() {
  const { globalMessage, setGlobalMessage, addMessage } =
    useContext(MessageContext);

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

  const [namso, setNamso] = useState(initialState);
  const [message, setMessage] = useState("");

  const namso_link = [];
  const namso_alt = [];

  for (let i in namso) {
    namso_link.push(assets.namso[i].link);
    namso_alt.push(assets.namso[i].alt);
  }

  useEffect(() => {
    let message = "";
    for (let i in namso) {
      if (namso[i].alt) {
        message += `${namso[i].alt} `;
      }
    }
    setGlobalMessage(message);
  }, [namso]);

  return (
    <Center>
      <Box
        w="1100px"
        h="400px"
        zIndex={3}
        border="1px"
        borderColor="#000"
        borderStyle="dotted"
      >
        <Flex direction="row" wrap="wrap">
          {namso_link.map((link, index) => {
            return (
              <Box key={index} w="125px" h="225px" mx="-0.5rem">
                <Rnd
                  onDragStop={(e, d) => {
                    if (d.y < -300) {
                      setNamso({
                        ...namso,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: namso_alt[index],
                        },
                      });
                    } else {
                      setNamso({
                        ...namso,
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
                    width: 125,
                    height: 225,
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
        {/* {JSON.stringify(namso)} */}
        <Center>
          <Box position="absolute" sx={{ top: "600px", left: 0 }}>
            <Text fontSize="xl">{message}</Text>
          </Box>
        </Center>
      </Box>
    </Center>
  );
}

export default Namso;
