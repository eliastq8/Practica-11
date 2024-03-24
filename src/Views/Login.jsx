import { Box, Button, Card, Input, Image, HStack, VStack, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
   const navigate = useNavigate();
   return (
      <>
         <Box backgroundImage={"https://media.istockphoto.com/id/1613344293/es/foto/fondo-de-navidad.webp?b=1&s=170667a&w=0&k=20&c=GpazMlK-GomF6EMfXIz_X_6wFTypkDzamSD0SXNSkQ4="}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            display={"flex"}
            w={"100%"}
            h={"700"}
            justifyContent={"center"}
            alignItems={"center"}
         >
            <HStack p={"50px"} bg={"#84634c"} borderRadius={"50px"}>
               <Image
                  borderRadius={"30px"}
                  flexGrow={"1"}
                  maxWidth={"400px"}
                  src='https://imgs.search.brave.com/YDyI0TRtDOlXh3EPksjDsnRLWrlw0srShjQaEVtY5nI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb2ZmZWUtYm9v/a3MtY2FmZS1vcmln/aW5hbC1waG90b3Nl/dF80MzgwOTktMzMz/MzEuanBnP3NpemU9/NjI2JmV4dD1qcGc'></Image>
               <Card bg={"#ffffff"} padding={20} borderRadius={"50px"} flexGrow={"1"} minWidth={"400px"}>
                  <Heading >Inicio Sesión</Heading>
                  <VStack>
                     <Input placeholder="Usuario"></Input>
                     <Input placeholder="Contraseña"></Input>
                  </VStack>
                  <Box my={6} />
                  <Button bg="#450068" color={"#ffffff"} borderRadius={'50px'} onClick={() => navigate("/products")}>Iniciar Sesion</Button>

                  <Button variant="link" onClick={() => navigate("/register")}>Registrar</Button>
               </Card>
            </HStack>
         </Box>
      </>
   )
}

export default Login