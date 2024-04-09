import { Flex, Center, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

function Contato() {
    return (
        <Flex bgImage="url(./bgContatos.jpg)"  justify="center" flexDir="column">
            <Center flexDir="column" >
                <Text fontSize={30} m="0 auto" mb={5} mt="40" textAlign="center" fontWeight={600} fontFamily="arial"> 
                    CONTATO
                    <Flex bg="blue.700" w={8} h={1} rounded={30} m="0 auto" mt={5}> </Flex>
                </Text>

                <Text textAlign="center" fontSize='lg'>
                    Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei <br/>
                    em contato com você o mais breve possível
                </Text>
            </Center>

            <Flex w={{base: "90%", xl:"50%"}} h="80%" bg="White" p={10} m="0 auto" mt={20} rounded={5} flexDir="column" mb={10} boxShadow="lg">
            <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input placeholder='Digite seu Nome' bg="gray.300" h={50}/>
                </FormControl>

                <FormControl isRequired mt={8}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Digite seu Email' bg="gray.300" h={50}/>
                </FormControl>

                <FormControl isRequired mt={8}>
                <FormLabel>Mensagem</FormLabel>
                <Textarea placeholder='Digite sua mensagem' bg="gray.300" rounded={5} h={150}/>
                </FormControl>

                <Button colorScheme='blue' size='lg' mt={8} px={10} w={150}>
                        Enviar
                </Button>

            </Flex>
        </Flex>
    )
}

export default Contato 