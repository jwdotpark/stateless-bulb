import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Hyunchul() {
  const initialState = {
    1: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    2: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    3: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    4: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    5: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    6: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    7: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    8: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    9: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
    10: { x: 0, y: 0, isClicked: false, clickNum: 0, width: 120, z: 1 },
  };

  const {
    combinedMSG,
    setCombinedMSG,
    setHyunMessage,
    clickReset,
    globZ,
    setGlobZ,
  } = useContext(MessageContext);

  const [hyun, setHyun] = useState(initialState);

  const hyun_link = [];
  const hyun_alt = [];

  for (let i in hyun) {
    hyun_link.push(assets.hyunchul[i].link);
    hyun_alt.push(assets.hyunchul[i].alt);
  }

  useEffect(() => {
    let message = [];
    for (let i in hyun) {
      if (hyun[i].alt) {
        message.push(`${hyun[i].alt} `);
      }
    }
    setHyunMessage(message);
  }, [hyun, setHyunMessage]);

  useEffect(() => {
    setHyun(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickReset]);

  return (
    <Center zIndex={3} position="relative">
      <Box w="1100px">
        <Flex direction="row" wrap="wrap">
          {hyun_link.map((link, index) => {
            return (
              <Box
                key={index}
                w="120px"
                h="550px"
                mx="-.5rem"
                style={{ zIndex: hyun[index + 1].z }}
              >
                <Rnd
                  style={{ zIndex: hyun[index + 1].z, position: "relative" }}
                  onDragStop={(e, d) => {
                    setGlobZ(hyun[index + 1].z + globZ);
                    if (d.y < -1300) {
                      setHyun({
                        ...hyun,
                        [index + 1]: {
                          ...hyun[index + 1],
                          x: d.x,
                          y: d.y,
                          alt: hyun_alt[index],
                          isClicked: hyun[index + 1].isClicked,
                          clickNum: hyun[index + 1].clickNum,
                          width: hyun[index + 1].width,
                          z: hyun[index + 1].z + globZ,
                        },
                      });
                      if (!hyun[index + 1].alt)
                        setCombinedMSG([...combinedMSG, hyun_alt[index]]);
                    } else {
                      setHyun({
                        ...hyun,
                        [index + 1]: {
                          ...hyun[index + 1],
                          x: d.x,
                          y: d.y,
                          alt: "",
                          isClicked: hyun[index + 1].isClicked,
                          clickNum: hyun[index + 1].clickNum,
                          width: hyun[index + 1].width,
                          z: hyun[index + 1].z,
                        },
                      });
                      setCombinedMSG(
                        combinedMSG.filter((item) => item !== hyun_alt[index])
                      );
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
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setHyun({
                      ...hyun,
                      [index + 1]: {
                        ...hyun[index + 1],
                        x: position.x,
                        y: position.y,
                        alt: hyun_alt[index],
                        isClicked: hyun[index + 1].isClicked,
                        clickNum: hyun[index + 1].clickNum,
                        width: ref.offsetWidth,
                        z: hyun[index + 1].z,
                      },
                    });
                  }}
                  // update size
                  size={{
                    width: hyun[index + 1].width,
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
                            ...hyun[index + 1],
                            x: hyun[index + 1].x,
                            y: hyun[index + 1].y,
                            alt: hyun[index + 1].alt,
                            isClicked: !hyun[index + 1].isClicked,
                            clickNum: hyun[index + 1].clickNum + 1,
                            z: hyun[index + 1].z,
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
