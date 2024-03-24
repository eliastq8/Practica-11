import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductData from '../componentes/ProductData';

function Product() {
    const{ id } = useParams();
    const[producto,setProducto]= useState({})
    useEffect(()=>{
        axios
          .get(`https://api-rest-productos.onrender.com/productos/${id}/`)
          .then(response => {
              setProducto(response.data);
          })
          .catch((e) => {
              console.log(e);
          });
      }, []);
    return (
        <div>
            <Text>Productos numero {id}</Text>
            {
                producto?(<ProductData 
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            costo={producto.costo}
            />
            ):
            <Text>Esperando elementos</Text>
            }
        </div>
    );
}

export default Product;