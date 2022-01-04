import { useState } from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import assets from "../assets/assets";
import { useEffect } from "react/cjs/react.development";

function Namso() {
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

  // Creating a list of links to the namso assets
  const namso_link = [];
  const namso_alt = [];
  for (let i in assets.namso) {
    namso_link.push(assets.namso[i].link);
    namso_alt.push(assets.namso[i].alt);
  }

  // if one of alt property in namso state is added, accumulate each message to message state
  useEffect(() => {
    let message = "";
    for (let i in namso) {
      if (namso[i].alt) {
        message += `${namso[i].alt} `;
      }
    }
    setMessage(message);
  }, [namso]);

  // useEffect(() => {
  //   for (let i in namso) {
  //     if (namso[i].alt) {
  //       setMessage(namso[i].alt);
  //     } else if (namso[i].alt === "") {
  //       setMessage("");
  //     }
  //   }
  // }, [namso]);

  return (
    <Box border="1px" borderColor="red" m="3rem" w="90%" h="350px">
      <Flex direction="row" wrap="wrap">
        {namso_link.map((link, index) => {
          return (
            <Box key={index} w="125px" h="225px" mx="-0.75rem">
              <Rnd
                onDragStop={(e, d) => {
                  if (d.y < 0) {
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
                <Box border="1px" borderStyle="dotted" borderColor="#000">
                  <Image src={`${link}`} draggable="false" />
                </Box>
              </Rnd>
            </Box>
          );
        })}
      </Flex>
      <br />
      <br />
      <br />
      <br />
      {JSON.stringify(namso)}
      <br />
      <br />
      <br />
      <br />
      <Text>{message}</Text>
    </Box>
  );
}

export default Namso;