import { Flex, Heading, Image, Link  } from "@chakra-ui/react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
    return (
        <Flex 
            zIndex={9}
            w="100%" 
            bg="white" p="5" 
            px={10}
            h={100}
            align="center" 
            justify="space-between" 
            pos="fixed" 
            top={0} 
            left={0}
        >

          <Flex gap={5} align="center">
          <Image w={50} borderRadius={50} src="https://images.pexels.com/photos/20845839/pexels-photo-20845839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Heading fontSize={25} fontFamily="source sans pro">Maxwell Araujo</Heading>
          </Flex>
          <Flex p={5} gap={20} fontWeight={600} fontSize={18} >
            <Link _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Home </Link>
            <Link _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Skils </Link>
            <Link _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Projetos </Link>
            <AnchorLink href="#contato" _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Contato </AnchorLink>
          </Flex>
        </Flex>
    )
}

export default Header