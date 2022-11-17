import { VStack,Image, Text,Heading } from "@chakra-ui/react";


const ExchangeCard=({name,img,url,rank})=>{
    return (
       <a href={url} target={"blank"}>

        <VStack w={"52"} p={"8"} borderRadius={"lg"} shadow={"lg"} transition={"all 0.5s"} m={"4"}
        css={{
            "&:hover":{
                transform:"scale(1.1)"
            }
        }}
        >
            <Image src={img} w={"10"} h={"10"} noOfLines={1} alt={"exchange"}  />
            <Heading size={"md"} noOfLines={1}>{rank}</Heading>
            <Text noOfLines={1}>{name}</Text>
        </VStack>
       </a>
    )
}

export default ExchangeCard;