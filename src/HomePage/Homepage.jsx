import { Container,Flex,VStack,Box,Img } from "@chakra-ui/react";
import AuthForm from '../Components/AuthForm/AuthForm';

function Homepage(){
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
            <Flex  justifyContent={"center"} alignItems={"center"} gap={10}>
            <Box display={{base:"none",md:"block"}}>
            <Img src='/HomePage/homescreen-image.jpg' height={400} alt={"phone img"}/></Box>
            <VStack spacing={4} align={"stretch"}><AuthForm/>
            <Box>Get the app.
            </Box>
            </VStack>
            </Flex>
            
            </Container>
        </Flex>
    
);

}
export default Homepage;