import { Box, Spinner, VStack } from "@chakra-ui/react";

const Loader=()=>{
    return <VStack justifyContent={"center"} h={"70vh"}>
        <Box transform={"scale(3)"}>
            <Spinner size={"xl"}></Spinner>
        </Box>
    </VStack>
}

export default Loader;