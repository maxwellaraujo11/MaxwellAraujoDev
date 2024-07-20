
import { Flex, Heading, Image, Link, Box, useDisclosure, IconButton, useBreakpointValue } from "@chakra-ui/react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Header() {

  const { isOpen, onToggle } = useDisclosure();
  const visibilidade = useBreakpointValue({ base: "block", md: "none" });

    return (
        <Flex 
            zIndex={9}
            w="100%" 
            bg="white" p="5" 
            px={{base: "5", xl:"10"}}
            h={100}
            align="center" 
            justify="space-between" 
            pos="fixed" 
            top={0} 
            left={0}
        >

          <Flex gap={2} align="center" >
            <Image w={50} borderRadius={50} src="https://images.pexels.com/photos/20845839/pexels-photo-20845839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Heading fontSize={{base:"20", xl: "25"}} fontFamily="source sans pro">
              MAXWELL  ARAUJO
            </Heading>
          </Flex>

          <Flex  className={`nav-links ${isOpen ? 'open' : ''}`}
           p={5} 
           gap={20} 
           fontWeight={600} 
           fontSize={18} 
           display={{ base: "none", md: "flex" }} 
           >

            <Link _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Inicio </Link>
            <Link _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Habilidades </Link>
            <Link _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Projetos </Link>
            <AnchorLink href="#contato" _hover={{ color: "blue.500", transition: " 0.5s ease-in-out",}}> Contato </AnchorLink>

          </Flex>
          
          <IconButton 
             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} 
             display={visibilidade}
             fontSize={25} 
             onClick={onToggle}
             aria-label="Toggle Navigation"
          />

          <Box 
              display={{ base: isOpen ? "block" : "none", md: "none" }}
              pos="absolute"
              top="100px"
              right="0"
              bg="white"
              w="100%"
              boxShadow="md"
              zIndex={10}
              transition="all 0.3s ease-in-out"
            >
              <Flex 
              direction="column" 
              align="center" 
              p={5} 
              gap={5} 
              fontWeight={600} 
              fontSize={18}
            >
              <Link onClick={onToggle} _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Inicio</Link>
              <Link onClick={onToggle} _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Habilidades</Link>
              <Link onClick={onToggle} _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Projetos</Link>
              <AnchorLink href="#contato" onClick={onToggle} _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Contato</AnchorLink>
            </Flex>
          </Box>


        </Flex>
    )
}

export default Header