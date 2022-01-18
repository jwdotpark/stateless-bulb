import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Base() {
  const initialState = {
    1: { x: 0, y: 0, width: 185 },
    2: { x: 0, y: 0, width: 185 },
    3: { x: 0, y: 0, width: 185 },
    4: { x: 0, y: 0, width: 185 },
    5: { x: 0, y: 0, width: 185 },
    6: { x: 0, y: 0, width: 185 },
    7: { x: 0, y: 0, width: 185 },
    8: { x: 0, y: 0, width: 185 },
    9: { x: 0, y: 0, width: 185 },
    10: { x: 0, y: 0, width: 185 },
    11: { x: 0, y: 0, width: 185 },
    12: { x: 0, y: 0, width: 185 },
    13: { x: 0, y: 0, width: 185 },
    14: { x: 0, y: 0, width: 185 },
    15: { x: 0, y: 0, width: 185 },
  };

  const { setBasePos, clickReset, globZ, setGlobZ } =
    useContext(MessageContext);

  const [base, setBase] = useState(initialState);

  // Creating a list of links to the base assets
  const base_link = [];
  for (let i in assets.base) {
    base_link.push(assets.base[i].link);
  }

  useEffect(() => {
    setBase(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickReset]);

  return (
    <Center zIndex={10} position="relative">
      <Box w="1100px" mt="9rem">
        <Flex direction="row" wrap="wrap" justifyContent="space-evenly">
          {base_link.map((link, index) => {
            return (
              <Box key={index} w="145px" h="110px" zIndex={globZ + 1} mx="-5px">
                <Rnd
                  onDragStop={(e, d) => {
                    setGlobZ(globZ + 1);
                    // set the new position of each base in initialState
                    if (d.x !== 0 && d.y > 300) {
                      setBase({
                        ...base,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                        },
                      });
                      setBasePos(true);
                    } else if (d.x !== 0 && d.y < 300) {
                      setBase({
                        ...base,
                        [index + 1]: {
                          x: d.x,
                          y: d.y,
                        },
                      });
                      setBasePos(false);
                    }
                  }}
                  style={{
                    cursor: "grab",
                  }}
                  enableResizing={true}
                  lockAspectRatio={true}
                  default={{
                    x: 0,
                    y: 0,
                    width: 185,
                    // height: 165,
                  }}
                  position={{
                    x: base[index + 1].x,
                    y: base[index + 1].y,
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    setBase({
                      ...base,
                      [index + 1]: {
                        x: position.x,
                        y: position.y,
                        isClicked: base[index + 1].isClicked,
                        clickNum: base[index + 1].clickNum,
                        width: ref.offsetWidth,
                      },
                    });
                  }}
                  // update size
                  size={{
                    width: base[index + 1].width,
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
                      onDoubleClick={() => {
                        setBase({
                          ...base,
                          [index + 1]: {
                            x: base[index + 1].x,
                            y: base[index + 1].y,
                            isClicked: !base[index + 1].isClicked,
                            clickNum: base[index + 1].clickNum + 1,
                          },
                        });
                      }}
                    >
                      <Image src={`${link}`} draggable="false" />
                    </motion.div>
                  </Box>
                </Rnd>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Center>
  );
}

export default Base;
