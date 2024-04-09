import { Flex, Text, Button, Heading  } from "@chakra-ui/react"


function Home() {

    return (
      <Flex bgImage="url(./bgMain.jpg)" h="100vh" justify="center" align="center" flexDir="column" mt={50}>

        <Flex 
            flexDir="column" 
            m="0 auto"  
            justify="center"
        >

            <Heading
                 as='h1' 
                 size='4xl' 
                 noOfLines={1}
            > 
               Ola, eu sou é Maxwell Araujo
            </Heading>

            <Text 
                textAlign="center" 
                fontSize="lg" 
                mt={30}
            >
                Um desenvolvedor da Web orientado a  resultados, construindo e gerenciando<br></br> 
                sites e aplicativos da Web que levam ao sucesso do produto geral.
            </Text>

            <Button 
               zIndex={0}
                px={5} 
                w={150} 
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
                    PROJETOS
                </Text>
            </Button>
        </Flex>

        
      </Flex>
    )
}

export default Home 