import { useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import assets from "../assets/assets";

function Base() {
  const style = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // border: "solid 1px #000",
  };

  const initialState = {
    x: 0,
    y: 0,
  };

  const [p1, setP1] = useState(initialState);

  const base_link = [];
  for (let i in assets.base) {
    base_link.push(assets.base[i].link);
  }

  return (
    <Box border="1px" borderColor="red" m="7.5rem" w="80%">
      <Flex direction="row" wrap="wrap">
        {base_link.map((link, index) => {
          return (
            <Box key={index} w="225px" h="150px" mx="-1.5rem">
              <Rnd
                onDragStop={(e, d) => {
                  setP1({ x: d.lastX, y: d.lastY });
                }}
                style={style}
                enableResizing={false}
                default={{
                  x: 0,
                  y: 0,
                  width: 200,
                  height: 125,
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

      {/* <Rnd
        onDragStop={(e, d) => {
          setP1({ x: d.lastX, y: d.lastY });
        }}
        style={style}
        enableResizing={false}
        default={{
          x: 0,
          y: 0,
          width: 225,
          height: 150,
        }}
      >
        <Box border="1px" borderColor="black">
          <Image src={`${assets.base[1].link}`} draggable="false" />
        </Box>
      </Rnd> */}
      {JSON.stringify(p1)}
    </Box>
  );
}

export default Base;
