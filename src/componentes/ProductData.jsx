import { Card, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function ProductData({nombre,descripcion,costo, onClick}) {
    return (
        <div>
            <Card
            bg={'#97ECD2'}
            p={'10px'}
            margin={'15px'}
            flex={1}
            onClick={onClick}
            >
                <Heading>{nombre}</Heading>
                <Text>Descripcion: {descripcion}</Text>
                <Text>Costo: {costo}$</Text>

            </Card>
        </div>
    )
}

export default ProductData