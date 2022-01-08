import { Box } from "@chakra-ui/react";

function Noise() {
  return (
    <Box
      border="1px solid red"
      position="absolute"
      top="0"
      w="100%"
      h="100%"
      bgColor="blue"
      opacity="0.075"
      bgImage="url('https://uploads-ssl.webflow.com/61281e78cb914a06ecd1031c/61281e78cb914a9a99d1034a_noise.gif')"
    ></Box>
  );
}

export default Noise;
