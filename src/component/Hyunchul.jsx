import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Hyunchul() {
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
  };

  const { setHyunMessage, clickReset } = useContext(MessageContext);

  const [hyun, setHyun] = useState(initialState);

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

  useEffect(() => {
    setHyun(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickReset]);

  return (
    <Center>
      <Box w="1100px" zIndex={3}>
        <Flex direction="row" wrap="wrap">
          {hyun_link.map((link, index) => {
            return (
              <Box key={index} w="120px" h="550px" mx="-.5rem">
                <Rnd
                  onDragStop={(e, d) => {
                    if (d.y < -1200) {
                      setHyun({
                        ...hyun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: hyun_alt[index],
                          isClicked: hyun[index + 1].isClicked,
                          clickNum: hyun[index + 1].clickNum,
                        },
                      });
                    } else {
                      setHyun({
                        ...hyun,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: "",
                          isClicked: hyun[index + 1].isClicked,
                          clickNum: hyun[index + 1].clickNum,
                        },
                      });
                    }
                  }}
                  enableResizing={true}
                  lockAspectRatio={true}
                  default={{
                    x: 0,
                    y: 0,
                    width: 120,
                    // height: 175,
                  }}
                  position={{
                    x: hyun[index + 1].x,
                    y: hyun[index + 1].y,
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
                        rotate: hyun[index + 1].isClicked
                          ? hyun[index + 1].clickNum % 4 === 0
                            ? -20
                            : hyun[index + 1].clickNum % 4 === 1
                            ? 20
                            : hyun[index + 1].clickNUm % 4 === 2
                            ? 0
                            : -20
                          : 0,
                      }}
                      onDoubleClick={() => {
                        setHyun({
                          ...hyun,
                          [index + 1]: {
                            x: hyun[index + 1].x,
                            y: hyun[index + 1].y,
                            alt: hyun[index + 1].alt,
                            isClicked: !hyun[index + 1].isClicked,
                            clickNum: hyun[index + 1].clickNum + 1,
                          },
                        });
                      }}
                    >
                      <Image src={`${link}`} draggable="false" loading="lazy" />
                    </motion.div>
                  </Box>
                </Rnd>
              </Box>
            );
          })}
        </Flex>
        {/* {JSON.stringify(hyun)} */}
        <Box position="absolute" m="4rem" sx={{ top: "500px", left: 0 }}></Box>
      </Box>
    </Center>
  );
}

export default Hyunchul;
