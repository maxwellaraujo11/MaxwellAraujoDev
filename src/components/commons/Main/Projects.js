import { Flex, Text, Center, Image, Box, Button} from "@chakra-ui/react"

function Projects() {
    return(
        <Flex flexDir="column" bg="white.200">
            <Center flexDir="column" >
                <Text fontSize={30} m="0 auto" mb={5} mt="40" textAlign="center" fontWeight={600} fontFamily="arial"> 
                        PROJETOS
                        <Flex bg="blue.700" w={8} h={1} rounded={30} m="0 auto" mt={5}> </Flex>
                </Text>

                <Text textAlign="center" fontSize='lg'>
                    Aqui você encontrará mais informações sobre mim, o que faço e minhas 
                    habilidades atuais <br/> principalmente em termos de programação e tecnologia
                </Text>
            </Center>

            <Flex display={{base: 'block', xl:'flex'}} justify={{base: 'center', xl:"space-around"}} w={{base: "100%", xl: '90%'}} justifyContent="center"  mt={5} alignItems="center">
                <Box m={20} w={{ xl:"45%"}} textAlign={{base:'center'}} >
                    <Image w="auto" src="./M.danz.png" />
                </Box>
                
                <Box w={{base: '90%', xl:"35%"}} textAlign={{base: 'center'}} m={{base: ' 0 auto'}}> 
                    <Text fontSize='3xl' fontWeight={700}> Mdanz Project</Text>

                    <Text mt={3} fontSize='lg'>
                        Site desenvolvido para um projeto de dança, onde tinha de mostrar 
                        historias dos fundadores, almbum de fotos, tela de cadastro, login, contatos.
                        Desenvolvi com Html, Css, Java script e bootstrap.
                    </Text>
                    
                    <Button colorScheme='blue' size='lg' mt={8} px={10}>
                        Acessar projeto
                    </Button>

                </Box>
            </Flex>

            <Flex display={{base: 'block', xl:'flex'}} justify={{base: 'center', xl:"space-around"}} w={{base: "100%", xl: '90%'}} justifyContent="center"  mt={5} alignItems="center">
                <Box m={20} mt={10} w={{ xl:"45%"}} textAlign={{base:'center'}} >
                    <Image w="auto" src="./Chat.png"  border="1px solid black"/>
                </Box>
                
                <Box w={{base: '90%', xl:"35%"}} textAlign={{base: 'center'}} m={{base: ' 0 auto'}}> 
                    <Text fontSize='3xl' fontWeight={700}> Chat Interface</Text>

                    <Text mt={3} fontSize='lg'>
                        Site desenvolvido para um projeto de dança, onde tinha de mostrar 
                        historias dos fundadores, almbum de fotos, tela de cadastro, login, contatos.
                        Desenvolvi com Html, Css, Java script e bootstrap.
                    </Text>
                    
                    <Button colorScheme='blue' size='lg' mt={8} px={10}>
                        Acessar projeto
                    </Button>

                </Box>
            </Flex>
        </Flex>
    )
}

export default Projects 