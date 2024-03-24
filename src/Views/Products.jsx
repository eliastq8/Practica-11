import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductData from '../componentes/ProductData';
import { useNavigate } from 'react-router-dom';

function Products() {
    const[data, setData]= useState(null);
    const navigate = useNavigate()
    useEffect(()=>{
      axios
        .get("https://api-rest-productos.onrender.com/productos")
        .then(response => {
            setData(response.data);
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, []);
    
    return (<div>{data?    
        data.map ((item) => (
                <>
                    <ProductData
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    costo={item.costo}
                    onClick={() => {
                        navigate(`/products/${item.id}`)
                    }}
                    />
                </>
            ))
           :<Text>Esperando elementos</Text>}
    </div>)
    
}

export default Products