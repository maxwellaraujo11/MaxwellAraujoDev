import { Center, Flex, Text, Box, Button, Link, Wrap} from '@chakra-ui/react'


function Skils() {
    return(
        <Flex flexDir="column" bg="gray.50">
            <Center flexDir="column" >
            <Text fontSize={30} m="0 auto" mb={5} mt="40" textAlign="center" fontWeight={600} fontFamily="arial" w="100%"> 
                    SOBRE  
                    <Flex bg="blue.700" w={8} h={1} rounded={30} m="0 auto" mt={5}> </Flex>
            </Text>

            <Text textAlign="center" fontSize='lg'>
                Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais 
                <br></br> principalmente em termos de programação e tecnologia
            </Text>
        
            </Center>

            <Flex display={{ base: 'block', xl: 'flex'}} justify={{base:"center", xl: 'space-around'}} w="90%" m="0 auto"  mt={20}>
                <Box>
                    <Text fontSize='3xl' fontWeight={700}> Me conhecer!</Text>
                    <Flex  display={{base: 'block'}} w={{ base: '90%', xl: '40%'}}>
                        <Text mt={7} fontSize='lg' >
                            Sou um <Text as='b' color="gray.600">desenvolvedor Web focado em Frontend</Text>, construindo e gerenciando o 
                            Front-end de sites e aplicações Web que levam ao sucesso do produto geral. 
                            Confira alguns dos meus trabalhos na seção <Text as="b" color="gray.600">Projetos. </Text>
                        </Text>
                        <Text mt={3} fontSize='lg'>
                            Também gosto de compartilghar conteúdo relacionado ao que aprendi 
                            ao longo dos anos emseção <Text as="b" color="gray.600">Desenvolvimento Web</Text> para que possa ajudar 
                            outras pessoas da Comunidade de Desenvolvimento. Sinta-se à vontade 
                            para se conectar ou me seguir no <Link color='blue.500' fontWeight="bold" href='https://www.linkedin.com/in/maxwellaraujo11' isExternal>Linkedin </Link> e no <Link color='blue.500' fontWeight="bold" href='https://github.com/maxwellaraujo11'>Github</Link>, onde posto 
                            conteúdo útil relacionado ao desenvolvimento e programação web.
                        </Text>
                        <Text mt={3} fontSize='lg'>
                            Estou aberto a <Text as="b" color="gray.600">oportunidades de trabalho</Text> onde possa contribuir, aprender e crescer. 
                            Se tiver uma boa oportunidade que corresponda às minhas competências e experiência, 
                            não hesite em <Text as="b" color="gray.600">contactar-me.</Text>
                        </Text>
                    </Flex>
                    
                    <Button colorScheme='blue' size='lg' mt={10} px={10} mb={20}>
                        Contato
                    </Button>
                </Box>

                {/* INICIANDO O BLOCO DAS HABILIDADES*/}
                <Box w={{base:'100%', xl: '40%'}}>
                <Text fontSize='3xl' fontWeight={700}> Minhas Habilidades</Text>
                
                <Wrap spacing='10px'>
                    <Button mt={7} border="2px solid black"> HTML </Button>
                    <Button mt={7} border="2px solid black"> CSS </Button>
                    <Button mt={7} border="2px solid black"> JAVASCRIPT </Button>
                    <Button mt={7} border="2px solid black"> REACT </Button>
                    <Button mt={7} border="2px solid black"> BOOTSTRAP </Button>
                    <Button mt={7} border="2px solid black"> SASS </Button>
                    <Button mt={7} border="2px solid black"> TAILWIND </Button>
                    <Button mt={7} border="2px solid black"> CHAKRA UI </Button>
                    <Button mt={7} border="2px solid black"> DESING RESPONSIVO </Button>
                    <Button mt={7} border="2px solid black"> GIT </Button>
                    <Button mt={7} border="2px solid black"> GITHUB </Button>
                    <Button mt={7} border="2px solid black"> PYTHON </Button>
                </Wrap>
                
                    
                

                </Box>
            </Flex>

        </Flex>

        

        
    )
}

export default Skils