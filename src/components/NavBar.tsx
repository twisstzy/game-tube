import { HStack, Img } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SeachInput from "./SeachInput";

interface Prop {
  onSearch: (SearchText: string) => void;
}
const NavBar = ({ onSearch }: Prop) => {
  return (
    <HStack padding="10px">
      <Img src={Logo} boxSize="60px"></Img>
      <SeachInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
