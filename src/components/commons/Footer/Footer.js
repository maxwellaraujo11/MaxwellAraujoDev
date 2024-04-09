import { Flex, Heading, Text, Link, Image, Box, Divider} from "@chakra-ui/react"

function Footer() {
    return(
       <Flex flexDir="column" bg="black" >
            <Flex m="0 auto" mt="80px" justifyContent="space-between" width="80%">

                    <Flex flexDir="column" zIndex="9" w="50%"> 

                        <Heading color="gray.100" fontSize='3xl'> Maxwell Araujo </Heading>
                        <Text color="gray.100" fontSize='md' mt={7} > 
                            Um desenvolvedor da Web orientado a  resultados, construindo e gerenciando 
                            <br/> sites e aplicativos da Web que levam ao sucesso do produto geral.
                        </Text>
                    </Flex>
                    

                    
                    

                    <Flex flexDir="column" w="30%" textAlign="right">
                        <Text fontSize='3xl' fontWeight={700} color="gray.100"> Social</Text>
                        <Box w="100px" display="flex" flexDir="row" h="50px"  mt={7} textAlign="right" ml="auto">
                            <Link 
                                rounded="5px 0px 0px 5px"
                                w='50px' h='50px' 
                                display="flex" 
                                alignItems="center" 
                                justifyContent="center" 
                                bg='white'
                                transition="0.5s ease-in-out"
                                _hover={{bg:"blue.500"}}

                            >
                                <Image src="./linkedin.svg" boxSize={30}/>
                            </Link>

                            <Link 
                                rounded="0px 5px 5px 0px"
                                w='50px' h='50px' 
                                bg='white'  
                                alignItems="center" 
                                justifyContent="center" 
                                display="flex"
                                transition="0.5s ease-in-out"
                                _hover={{bg:"blue.500"}}
                            > 
                                <Image src="./github.svg" boxSize={30}/>
                            </Link> 
                        </Box>

                        
                    </Flex>

            </Flex>

            <Divider m="0 auto" mt="20" mb={10} w="80%" />

            <Text fontSize='xs' textAlign="center" color="white" mb="10">
            © Direitos autorais 2024. Desenvolvido por <Link color='white' as="b" href='#'>Maxwell Araujo</Link>
            </Text>

       </Flex>
    )
}

export default Footer