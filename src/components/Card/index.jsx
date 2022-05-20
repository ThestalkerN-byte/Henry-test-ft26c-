import React from 'react'
import { CardContainer } from './styles'

const Card = ({ nombre, descripcion, footer, bkColor }) => {
    return (
        <CardContainer bkColor={bkColor}>
            <section>{nombre}</section>
            <section>{descripcion}</section>
            <section>{footer}</section>
        </CardContainer>
    )
}

export default Card