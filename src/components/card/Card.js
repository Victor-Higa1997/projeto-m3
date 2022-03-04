import { useState } from "react"
import { ButtonComprar, DivCard, ImgCard, PParcel, PTitle, PValue } from "../../styles/Card.style"

export const Card = ({ value }) => {
    
    return (

        <DivCard>
            {/* <ImgCard /> */}
            <ImgCard src={require(`.${value.image}`)} alt={ value.name }/>
            <PTitle>{ value.name }</PTitle>
            <PValue>{ value.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }</PValue>
            <PParcel>até {value.parcelamento[0]}x de {value.parcelamento[1].toLocaleString('pt-br',
             {style: 'currency', currency: 'BRL'})}</PParcel>
            <ButtonComprar>Comprar</ButtonComprar>
        </DivCard>

    )
}