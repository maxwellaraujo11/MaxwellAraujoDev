import { Flex, Text, Center, Image, Box, Button, Link } from "@chakra-ui/react";

function Projects() {
  return (
    <Flex id="projetos" flexDir="column" bg="white.200">
      <Center flexDir="column">
        <Text
          fontSize={30}
          m="0 auto"
          mb={5}
          mt="40"
          textAlign="center"
          fontWeight={600}
          fontFamily="arial"
        >
          PROJETOS
          <Flex bg="blue.700" w={8} h={1} rounded={30} m="0 auto" mt={5}>
            {" "}
          </Flex>
        </Text>

        <Text textAlign="center" fontSize="lg">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais <br /> principalmente em termos de programação e
          tecnologia.
        </Text>
      </Center>

      <Flex
        display={{ base: "block", xl: "flex" }}
        justify={{ base: "center", xl: "space-around" }}
        w={{ base: "100%", xl: "90%" }}
        justifyContent="center"
        mt={5}
        alignItems="center"
      >
        <Box
          m={{ base: "20px", xl: "20" }}
          mt={10}
          w={{ xl: "45%" }}
          textAlign={{ base: "center" }}
        >
          <Image w="auto" src="./marcelosmove.png" border="1px solid black" />
        </Box>

        <Box
          w={{ base: "90%", xl: "35%" }}
          textAlign={{ base: "center", xl: "left" }}
          m={{ base: " 0 auto" }}
        >
          <Text fontSize="3xl" fontWeight={700}>
            {" "}
            Marcelos Move
          </Text>

          <Text mt={3} fontSize="lg">
            Projeto em desenvolvimento para uma escola de dança da cidade de
            Recife-PE. desenvolvido com Html, css e javascript.
          </Text>

          <Link href="https://schoolprojetc.vercel.app/" isExternal>
            <Button colorScheme="blue" size="lg" mt={8} px={10}>
              Acessar projeto
            </Button>
          </Link>
        </Box>
      </Flex>

      <Flex
        display={{ base: "block", xl: "flex" }}
        justify={{ base: "center", xl: "space-around" }}
        w={{ base: "100%", xl: "90%" }}
        justifyContent="center"
        mt={5}
        alignItems="center"
      >
        <Box
          m={{ base: "20px", xl: "20" }}
          mt={10}
          w={{ xl: "45%" }}
          textAlign={{ base: "center" }}
        >
          <Image
            w="auto"
            src="./DESKTOP---CIA-DE-DANÇA.png"
            border="1px solid black"
          />
        </Box>

        <Box
          w={{ base: "90%", xl: "35%" }}
          textAlign={{ base: "center", xl: "left" }}
          m={{ base: " 0 auto" }}
        >
          <Text fontSize="3xl" fontWeight={700}>
            {" "}
            Cia Municipal de Dança de João Pessoa
          </Text>

          <Text mt={3} fontSize="lg">
            Projeto em desenvolvimento para Cia Municipal de Dança de João
            Pessoa. desenvolvido com Html, css e javascript.
          </Text>

          <Link href="https://gala-cia-municpal.vercel.app/#inicio" isExternal>
            <Button colorScheme="blue" size="lg" mt={8} px={10}>
              Acessar projeto
            </Button>
          </Link>
        </Box>
      </Flex>

      <Flex
        display={{ base: "block", xl: "flex" }}
        justify={{ base: "center", xl: "space-around" }}
        w={{ base: "100%", xl: "90%" }}
        justifyContent="center"
        mt={{ base: "20" }}
        alignItems="center"
      >
        <Box
          m={{ base: "20px", xl: "20" }}
          mt={10}
          w={{ xl: "45%" }}
          textAlign={{ base: "center" }}
        >
          <Image w="auto" src="./Chat.png" border="1px solid black" />
        </Box>

        <Box
          w={{ base: "90%", xl: "35%" }}
          textAlign={{ base: "center", xl: "left" }}
          m={{ base: " 0 auto" }}
        >
          <Text fontSize="3xl" fontWeight={700}>
            {" "}
            Chat Interface
          </Text>

          <Text mt={3} fontSize="lg">
            Projeto desenvolvido para um cliente que precisou da parte front-end
            do projeto.
          </Text>

          <Link
            href="https://interface-chat-frontend-github-io.vercel.app/"
            isExternal
          >
            <Button colorScheme="blue" size="lg" mt={8} px={10}>
              Acessar projeto
            </Button>
          </Link>
        </Box>
      </Flex>

      <Flex
        display={{ base: "block", xl: "flex" }}
        justify={{ base: "center", xl: "space-around" }}
        w={{ base: "100%", xl: "90%" }}
        justifyContent="center"
        mt={5}
        alignItems="center"
      >
        <Box
          m={{ base: "20px", xl: "20" }}
          w={{ xl: "45%" }}
          textAlign={{ base: "center" }}
        >
          <Image w="auto" src="./M.danz.png" />
        </Box>

        <Box
          w={{ base: "90%", xl: "35%" }}
          textAlign={{ base: "center", xl: "left" }}
          m={{ base: " 0 auto" }}
        >
          <Text fontSize="3xl" fontWeight={700}>
            {" "}
            Mdanz Project
          </Text>

          <Text mt={3} fontSize="lg">
            Site desenvolvido para um projeto de dança, onde tinha de mostrar
            historias dos fundadores, Galeria de fotos, tela de cadastro, login,
            contatos. Desenvolvido com Html, Css, Java script e bootstrap.
          </Text>

          <Link
            href="https://github.com/maxwellaraujo11/m.danzproject"
            isExternal
          >
            <Button colorScheme="blue" size="lg" mt={8} px={10}>
              Acessar Codigo Fonte
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Projects;
