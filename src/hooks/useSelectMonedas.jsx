import React from 'react'
import { useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 24px;

    display: block;
    margin: 15px 0;

`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    text-align: center;
    padding: 14px;
    border-radius: 10px;
`

//funcion que recibe titulo para el label y un objeto para iterar e imprimirlo en el select
const useSelectMonedas = (label, opciones) => {

    //state que representa los valores de los option que es la moneda o la criptomoneda
    const [state, setState] = useState('')
  
    const SelectMonedas = () => (
        <>
            <Label htmlFor="">{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value)}
            >
                <option value="moneda">Seleccione</option>

                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                    {opcion.name}</option>
                ))}
            </Select>
        </>
    )

    // aqui se retorna lo que eligio el usuario y el componente para imprimirlo
    return[ state, SelectMonedas ]
}

export default useSelectMonedas