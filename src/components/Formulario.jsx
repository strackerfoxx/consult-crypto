import React from 'react'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .2s ease;
    margin-top: 30px;
    margin-bottom: 50px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
    // criptos tiene el valor del objeto creado con la api
    const [ criptos, setCriptos ] = useState([])
    const [ error, setError] = useState('')

    //aqui se pasa un objeto para el select y un titulo para el label
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ criptoMoneda, SelectCriptoMonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos)
    

    useEffect(() => {
        // hacer la consula a la api mediante async await
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            // iterando en cada resultado y retornando un valor con . map
            const arrayCriptos = resultado.Data.map(cripto => {
                // asignando constantes con los valores de la api (nombre de 3 digitos y nombre completo)
                const idCripto = cripto.CoinInfo.Name
                const NombreCripto = cripto.CoinInfo.FullName

                // asignando los valores de las constantes a un objeto para retornarlo y pasarlo al state de criptos
                // que va a imprimir los select
                const objeto ={ 
                    id: idCripto, 
                    name: NombreCripto
                };

                return objeto                
            })

            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])

    // funcion para cuando se mande el formulario si los campos de select estan vacios erro, 
    const handleSubmit = e => {
        e.preventDefault()
        
        if([criptoMoneda, moneda].includes('')){
            setError(true)

            return 
        }
        setError(false)
        //si no hay error se pasan los objetos de moneda y criptoMoneda al App
        setMonedas({moneda,criptoMoneda})
    }
    
  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}

        <form onSubmit={handleSubmit}>
            <SelectMonedas />
            <SelectCriptoMonedas />

            <InputSubmit type="submit" value="Cotizar Criptomoneda"/>
        </form>
    </>
  )
}

export default Formulario