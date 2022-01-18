import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Namso() {
  const {
    combinedMSG,
    setCombinedMSG,
    setNamsoMessage,
    clickReset,
    globZ,
    setGlobZ,
  } = useContext(MessageContext);

  const initialState = {
    1: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    2: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    3: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    4: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    5: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    6: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    7: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    8: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    9: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
    10: { x: 0, y: 0, width: 130, isClicked: false, clickNum: 0, z: 1 },
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
    <Center zIndex={5} position="relative">
      <Box w="1100px" h="350px" mt="6rem">
        <Flex direction="row" wrap="wrap">
          {namso_link.map((link, index) => {
            return (
              <Box
                key={index}
                w="125px"
                h="300px"
                mx="-0.5rem"
                style={{ zIndex: namso[index + 1].z }}
              >
                <Rnd
                  style={{ zIndex: namso[index + 1].z, position: "relative" }}
                  onDragStop={(e, d) => {
                    setGlobZ(namso[index + 1].z + globZ);
                    if (d.y < -200) {
                      setNamso({
                        ...namso,
                        [index + 1]: {
                          ...namso[index + 1],
                          x: d.x,
                          y: d.y,
                          alt: namso_alt[index],
                          isClicked: namso[index + 1].isClicked,
                          clickNum: namso[index + 1].clickNum,
                          width: namso[index + 1].width,
                          z: namso[index + 1].z + globZ,
                        },
                      });
                      if (!namso[index + 1].alt)
                        setCombinedMSG([...combinedMSG, namso_alt[index]]);
                    } else {
                      setNamso({
                        ...namso,
                        [index + 1]: {
                          ...namso[index + 1],
                          x: d.x,
                          y: d.y,
                          alt: "",
                          isClicked: namso[index + 1].isClicked,
                          clickNum: namso[index + 1].clickNum,
                          width: namso[index + 1].width,
                          z: namso[index + 1].z,
                        },
                      });
                      setCombinedMSG(
                        combinedMSG.filter((item) => item !== namso_alt[index])
                      );
                    }
                  }}
                  enableResizing={true}
                  lockAspectRatio={true}
                  default={{
                    x: 0,
                    y: 0,
                    width: namso[index + 1].width,
                  }}
                  position={{
                    x: namso[index + 1].x,
                    y: namso[index + 1].y,
                  }}
                  // update position
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setNamso({
                      ...namso,
                      [index + 1]: {
                        ...namso[index + 1],
                        x: position.x,
                        y: position.y,
                        alt: namso_alt[index],
                        isClicked: namso[index + 1].isClicked,
                        clickNum: namso[index + 1].clickNum,
                        width: ref.offsetWidth,
                        z: namso[index + 1].z,
                      },
                    });
                  }}
                  // update size
                  size={{
                    width: namso[index + 1].width,
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
                            z: namso[index + 1].z,
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
      </Box>
    </Center>
  );
}

export default Namso;
