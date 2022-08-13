import React from 'react'
import { Main } from './styled'

const convertDate = (timeStamp) => {
    let time = new Date(timeStamp)
    let day = time.getDate().toString().padStart(2,'0')
    let month = (time.getMonth()+1).toString().padStart(2,'0')
    let year = time.getFullYear()

    return `${day}/${month}/${year}`
}

const CardOrderHistory = (props) => {
    return(
        <Main>
            <p>{props.restaurantName}</p>
            <p>{convertDate(props.createdAt)}</p>
            <p>Subtotal:{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.totalPrice)}
            </p>
        </Main>
    )
}

export default CardOrderHistory