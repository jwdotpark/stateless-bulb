import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Eun() {
  const initialState = {
    1: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    2: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    3: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    4: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    5: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    6: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    7: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    8: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    9: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    10: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    11: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    12: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    13: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    14: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    15: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    16: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    17: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    18: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    19: { x: 0, y: 0, isClicked: false, clickNum: 0 },
    20: { x: 0, y: 0, isClicked: false, clickNum: 0 },
  };

  const { setEunMessage, clickReset } = useContext(MessageContext);

  const [eun, setEun] = useState(initialState);
  const [message] = useState("");

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
    setEunMessage(message);
  }, [eun, setEunMessage]);

  useEffect(() => {
    setEun(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickReset]);

  return (
    <Center>
      <Box w="1100px" zIndex={3}>
        <Flex direction="row" wrap="wrap">
          {eun_link.map((link, index) => {
            return (
              <Box key={index} w="55px" h="450px" mx="-1.5px">
                <Rnd
                  onDragStop={(e, d) => {
                    if (d.y < -800) {
                      setEun({
                        ...eun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: eun_alt[index],
                          isClicked: eun[index + 1].isClicked,
                          clickNum: eun[index + 1].clickNum,
                        },
                      });
                    } else {
                      setEun({
                        ...eun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: "",
                          isClicked: eun[index + 1].isClicked,
                          clickNum: eun[index + 1].clickNum,
                        },
                      });
                    }
                  }}
                  enableResizing={true}
                  lockAspectRatio={true}
                  default={{
                    x: 0,
                    y: 0,
                    width: 75,
                    // height: 175,
                  }}
                  position={{
                    x: eun[index + 1].x,
                    y: eun[index + 1].y,
                  }}
                >
                  <Box>
                    <motion.div
                      // whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        cursor: "grab",
                      }}
                      animate={{
                        rotate: eun[index + 1].isClicked
                          ? eun[index + 1].clickNum % 4 === 0
                            ? -20
                            : eun[index + 1].clickNum % 4 === 1
                            ? 20
                            : eun[index + 1].clickNUm % 4 === 2
                            ? 0
                            : -20
                          : 0,
                      }}
                      onDoubleClick={() => {
                        setEun({
                          ...eun,
                          [index + 1]: {
                            x: eun[index + 1].x,
                            y: eun[index + 1].y,
                            alt: eun[index + 1].alt,
                            isClicked: !eun[index + 1].isClicked,
                            clickNum: eun[index + 1].clickNum + 1,
                          },
                        });
                      }}
                    >
                      {eun_link[index] ===
                      "https://uploads-ssl.webflow.com/61281e78cb914a06ecd1031c/61c030b96ee1497d12c79725_40.png" ? (
                        <Image
                          src={`${link}`}
                          draggable="false"
                          loading="lazy"
                          w="50px"
                        />
                      ) : (
                        <Image
                          src={`${link}`}
                          draggable="false"
                          loading="lazy"
                        />
                      )}

                      {/* {JSON.stringify(eun_link[9])} */}
                    </motion.div>
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
