
import {Box,Button,Input,Image,VStack} from "@chakra-ui/react";
import { useState } from "react";

export default function AuthForm()
{
    
    const [islogin,setLogin]=useState(false);
    return <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
    <Image src="/AuthPage/sns-logo.png" h={24} cursor={"pointer"} alt={"Logo of sns"} />
    <Input placeholder="Email address" size={14} type="Email"/>
    <Input placeholder="Password" size={14} type="password"/>
    {
        !islogin?<Input placeholder="Confirm Password" size={14} type="password"/>:null
    }
    <Button width={"full"} colorScheme="blue" size="sm" fontSize={14}>{islogin?"Log in":"Sign up"}</Button>
    </VStack>

    </Box>
    </>
}