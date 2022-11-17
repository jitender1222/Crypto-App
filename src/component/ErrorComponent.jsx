import { Alert, AlertIcon } from "@chakra-ui/react";


const ErrorComponent=({message})=>{
    return (
        <Alert pos={"fixed"} bottom={"4"} 
        left={"50%"} 
        transform={"translateX(-50%)"} 
        w={"container.lg"}
        status={"error"}
        >

            <AlertIcon/>

            <h1>{message}</h1>

        </Alert>
    )
}

export default ErrorComponent;