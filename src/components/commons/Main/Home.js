import { Flex, Text, Button, Heading, Link, Image,  } from "@chakra-ui/react"


function Home() {

    return (
      <Flex id="inicio" bgImage="url(./bgMain.jpg)" h="100vh" justify="center" align="center" flexDir="column" mt="50" pos="relative">

        <Flex 
            flexDir="column" 
            m="0 auto"  
            justify="center"
            pos="relative"
        >

            <Heading
                 as='h1' 
                 fontSize={{base: '2rem', xl: "3rem", }} 
                 overflowWrap="break-word"
                 noOfLines={2}
                 textTransform="uppercase"
                 textAlign="center"
                 width={{base:"90%", xl:"100%"}}
                 margin="0 auto"
                 mt="40"
            > 
               Ola, eu sou Maxwell Araujo
            </Heading>

            <Text 
                textAlign={{base: 'center'}} 
                fontSize={{base:'1.3rem', xl:"lg"}} 
                px={{ base: "15px"}}
                mt={30}
            >
                Um desenvolvedor Web/mobile orientado a  resultados, construindo e gerenciando<br></br> 
                sites e aplicativos que levam ao sucesso do produto geral.
            </Text>

            <Button
                as="a"
                href="(./cvmax.docx)"
                download
                px={5} 
                w={250} 
                h={50}
                m="0 auto" 
                mt={30} 
                bg="blue.500" 
                _hover={{bg: "purple.700"}}
            > 
                    <Text 
                        fontSize={20} 
                        fontWeight={800}
                    > 
                        Baixe meu Curriculo
                    </Text>
            </Button>

            <Flex mt={10} flexDir="column"> {/*BOX DO TEXTO E LINKS DA HOME*/}

                <Text 
                    textAlign={{base: 'center'}} 
                    fontSize={{base:'1.3rem', xl:"lg"}} 
                    px={{ base: "15px"}}
                    mt={30}
                >
                    Me acompanhe nas plaformas
                </Text>

                <Flex m="0 auto" mt={5}> {/*  BOX DOS LINKS DA HOME*/}
                    <Link 
                        rounded="5px 0px 0px 5px"
                        w='100px' h='50px' 
                        display="flex" 
                        alignItems="center" 
                        justifyContent="center" 
                        bg='white'
                        transition="0.5s ease-in-out"
                        _hover={{bg:"blue.500"}}

                    >
                        <Image src="./linkedin.svg" boxSize={35}/>
                    </Link>

                    <Link 
                        rounded="0px 5px 5px 0px"
                        w='100px' h='50px' 
                        bg='white'  
                        alignItems="center" 
                        justifyContent="center" 
                        display="flex"
                        transition="0.5s ease-in-out"
                        _hover={{bg:"blue.500"}}
                    > 
                        <Image src="./github.svg" boxSize={35}/>
                    </Link> 
                </Flex>  {/* FIM BOX DOS LINKS DA HOME*/}
            </Flex>  {/* FIM BOX DO TEXTO E LINKS DA HOME*/}           

        </Flex>

        
      </Flex>
    )
}

export default Home 