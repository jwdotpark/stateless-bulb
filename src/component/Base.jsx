import { useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
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

  const [base, setBase] = useState(initialState);

  // Creating a list of links to the base assets
  const base_link = [];
  for (let i in assets.base) {
    base_link.push(assets.base[i].link);
  }

  return (
    <Box border="1px" borderColor="red" m="3rem" w="90%">
      <Flex direction="row" wrap="wrap">
        {base_link.map((link, index) => {
          return (
            <Box key={index} w="225px" h="150px" mx="-1rem" zIndex={3}>
              <Rnd
                onDragStop={(e, d) => {
                  // set the new position of each base in initialState
                  setBase({
                    ...base,
                    [index + 1]: {
                      x: d.x,
                      y: d.y,
                    },
                  });
                }}
                enableResizing={true}
                default={{
                  x: 0,
                  y: 0,
                  width: 225,
                  height: 150,
                }}
              >
                <Box border="1px" borderStyle="dotted" borderColor="#000">
                  <Image src={`${link}`} draggable="false" />
                </Box>
              </Rnd>
            </Box>
          );
        })}
      </Flex>
      {JSON.stringify(base)}
    </Box>
  );
}

export default Base;
