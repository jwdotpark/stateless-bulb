import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Namso() {
  const { setNamsoMessage, clickReset } = useContext(MessageContext);

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

  const [namso, setNamso] = useState(initialState);

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
    setNamsoMessage(message);
  }, [namso, setNamsoMessage]);

  useEffect(() => {
    setNamso(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickReset]);

  return (
    <Center>
      <Box w="1100px" h="350px" zIndex={3} mt="6rem">
        <Flex direction="row" wrap="wrap">
          {namso_link.map((link, index) => {
            return (
              <Box key={index} w="125px" h="300px" mx="-0.5rem">
                <Rnd
                  onDragStop={(e, d) => {
                    if (d.y < -300) {
                      setNamso({
                        ...namso,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: namso_alt[index],
                          isClicked: namso[index + 1].isClicked,
                          clickNum: namso[index + 1].clickNum,
                        },
                      });
                    } else {
                      setNamso({
                        ...namso,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                          alt: "",
                          isClicked: namso[index + 1].isClicked,
                          clickNum: namso[index + 1].clickNum,
                        },
                      });
                    }
                  }}
                  enableResizing={true}
                  lockAspectRatio={true}
                  default={{
                    x: 0,
                    y: 0,
                    width: 130,
                  }}
                  position={{
                    x: namso[index + 1].x,
                    y: namso[index + 1].y,
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
                        rotate: namso[index + 1].isClicked
                          ? namso[index + 1].clickNum % 4 === 0
                            ? -20
                            : namso[index + 1].clickNum % 4 === 1
                            ? 20
                            : namso[index + 1].clickNUm % 4 === 2
                            ? 0
                            : -20
                          : 0,
                      }}
                      onDoubleClick={() => {
                        setNamso({
                          ...namso,
                          [index + 1]: {
                            x: namso[index + 1].x,
                            y: namso[index + 1].y,
                            alt: namso[index + 1].alt,
                            isClicked: !namso[index + 1].isClicked,
                            clickNum: namso[index + 1].clickNum + 1,
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
        {/* {JSON.stringify(namso)} */}
        <Center>
          <Box position="absolute" sx={{ top: "600px", left: 0 }}>
            {/* <Text fontSize="xl">{message}</Text> */}
          </Box>
        </Center>
      </Box>
    </Center>
  );
}

export default Namso;
