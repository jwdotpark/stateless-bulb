import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DeleteIcon } from "@chakra-ui/icons";

function ResetButton() {
  const { clickReset, setClickReset } = useContext(MessageContext);

  return (
    <Box position="absolute" top="690" ml="150">
      <motion.div
        // whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // whileHover={{ scale: 1.05 }}
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
          }}
        >
          <DeleteIcon w={6} h={6} />
        </Button>
      </motion.div>
    </Box>
  );
}

export default ResetButton;
