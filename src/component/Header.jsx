
import {Button, HStack} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header=()=>{
    return (
        <HStack bgColor={"blackAlpha.900"} p={"4"} color={"white"} shadow={"base"}>
            <NavLink to='/'>
                <Button variant={"unstyled"}>Home</Button>
            </NavLink>
            <NavLink to='/exchange'>
                <Button variant={"unstyled"}>Exchange</Button>
            </NavLink>
            <NavLink to='/coin'>
                <Button variant={"unstyled"}>Coin</Button>
            </NavLink>
        </HStack>
    )

}

export default Header;