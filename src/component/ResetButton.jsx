import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { DeleteIcon } from "@chakra-ui/icons";

function ResetButton() {
  const { setCombinedMSG, clickReset, setClickReset, setGlobZ } =
    useContext(MessageContext);

  return (
    <Box position="absolute" top="690" ml="150" opacity="0.75">
      <motion.div
        // whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25 }}
        style={{
          cursor: "grab",
        }}
      >
        <Button
          color="#B8A085"
          width="50px"
          height="50px"
          borderRadius="200px"
          size="md"
          onClick={() => {
            setClickReset(!clickReset);
            setCombinedMSG([]);
            setGlobZ(1);
          }}
        >
          {/* <DeleteIcon w={6} h={6} /> */}
          <Text fontSize="md">리셋</Text>
        </Button>
      </motion.div>
    </Box>
  );
}

export default ResetButton;
