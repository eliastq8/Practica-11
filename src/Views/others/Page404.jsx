import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function Page404() {
    return (
        <>
            <Box
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                display={"flex"}
                w={"100%"}
                h={"700"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Heading size='4xl'>404</Heading>
            </Box>
        </>
    )
}

export default Page404