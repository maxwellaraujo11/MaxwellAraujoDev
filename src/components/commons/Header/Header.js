
import { Flex, Heading, Image, Link, Box, useDisclosure, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
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
            <Image w={70} borderRadius={50} src="/perfil.jpg"/>
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

                <ScrollLink to="inicio" smooth={true} duration={500}>
                  <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Inicio</Link>
                </ScrollLink>
                <ScrollLink to="habilidades" smooth={true} duration={500}>
                  <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Habilidades</Link>
                </ScrollLink>
                <ScrollLink to="projetos" smooth={true} duration={500}>
                  <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Projetos</Link>
                </ScrollLink>
                <ScrollLink to="contato" smooth={true} duration={500}>
                  <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Contato</Link>
                </ScrollLink>

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
              <ScrollLink to="inicio" smooth={true} duration={500} onClick={onToggle}>
                <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Inicio</Link>
              </ScrollLink>
              <ScrollLink to="habilidades" smooth={true} duration={500} onClick={onToggle}>
                <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Habilidades</Link>
              </ScrollLink>
              <ScrollLink to="projetos" smooth={true} duration={500} onClick={onToggle}>
                <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Projetos</Link>
              </ScrollLink>
              <ScrollLink to="contato" smooth={true} duration={500} onClick={onToggle}>
                <Link _hover={{ color: "blue.500", transition: "0.5s ease-in-out" }}>Contato</Link>
              </ScrollLink>
            </Flex>
          </Box>


        </Flex>
    )
}

export default Header