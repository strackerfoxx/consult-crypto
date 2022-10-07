import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    font-family: 'Lato', sans-serif;
    color: #FFF;
    span{
        font-weight: 700;
    }

    display: flex;
    align-items: center;
    gap: 1rem;
`

const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Precio = styled.p`
    font-size: 26px;
`
const Texto = styled.p`
    text-align: center;
    font-size: 20px;
`

const Resultado = ({resultado}) => {
    // console.log(resultado)
    const {
        PRICE, 
        CHANGE24HOUR, 
        HIGH24HOUR, 
        LOW24HOUR, 
        CHANGEPCT24HOUR, 
        LASTUPDATE, 
        IMAGEURL
    } = resultado

  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de la criptomoneda" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio ha cambiado del ultimo dia: <span>{CHANGE24HOUR}</span></Texto>
            <Texto>EL precio más alto del ultimo dia: <span>{HIGH24HOUR}</span></Texto>
            <Texto>EL precio más bajo del ultimo dia: <span>{LOW24HOUR}</span></Texto>
            <Texto>El porcentaje ha cambiado del ultimo dia: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado