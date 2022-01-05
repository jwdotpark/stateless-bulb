import { Box } from "@chakra-ui/react";

function Noise() {
  return (
    <Box
      position="absolute"
      w="100%"
      h="100%"
      bgColor="blue"
      opacity="0.04"
      bgImage="url('https://uploads-ssl.webflow.com/61281e78cb914a06ecd1031c/61281e78cb914a9a99d1034a_noise.gif')"
    ></Box>
  );
}

export default Noise;
