import { useState, useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import assets from "../assets/assets";

function Base() {
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
  };

  const { setBasePos } = useContext(MessageContext);

  const [base, setBase] = useState(initialState);

  // Creating a list of links to the base assets
  const base_link = [];
  for (let i in assets.base) {
    base_link.push(assets.base[i].link);
  }

  return (
    <Center>
      <Box w="1100px" mt="9rem">
        <Flex direction="row" wrap="wrap" justifyContent="space-evenly">
          {base_link.map((link, index) => {
            return (
              <Box key={index} w="145px" h="110px" zIndex={4} mx="-5px">
                <Rnd
                  onDragStop={(e, d) => {
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
                >
                  <Box>
                    <motion.div
                      // whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        cursor: "grab",
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
