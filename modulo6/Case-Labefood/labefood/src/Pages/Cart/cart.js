import React, { useState } from 'react'
import { Button } from '@mui/material'
import Header from '../../Components/Header/Header'
import CardCart from '../../Components/CardCart/CardCart'
import { useRequestData } from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/url'
import { Main, MainCart, CartConfig, InfoProfile, CartInfo, Payment, InfoRestaurant, EmptyCart, Freight, Total, Form } from './styled'
import MenuNav from '../../Components/Menu/MenuNav'

const Cart = () => {

    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPayment] = useState([])
    const [paymentMethod, setPaymentMethod] = useState({
        'money': false,
        'creditcard': false
    })

    const mockData = [
        {
            name: 'Stencil',
            price: 40,
            photoUrl: 'http://i,pinimg.com/474x/bc/db/d1/bcdbd1fcd7c6710dd5651b023ed72195,jpg',
            amount: 2,
            description: 'pao, carne, queijo, cebola roxa, alface e molho'
        }
    ]

    const onChangePayment = (event) => {
        const newCheck = { ...paymentMethod }
        newCheck[event.target.name] = event.target.checked

        const result = Object.keys(newCheck).filter((pay) => {
            if (newCheck[pay]) {
                return [pay, ...payment]
            }
        })

        setPayment(result)
        setPaymentMethod(newCheck)
    }

    console.log(payment)
    return(
        <Main>
            <Header title={'Meu carrinho'} back/>
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user}</p>
                </InfoProfile>

                <InfoRestaurant>
                    <p>Nome do restaurante</p>
                    <p>Rua do restaurante</p>
                    <p>30 - 45 min</p>
                </InfoRestaurant>
                <CartInfo>
                    {mockData.length > 0 ? mockData.map((data) => {
                        return (
                            <CardCart
                                name={data.name}
                                price={data.price}
                                photoUrl={data.photoUrl}
                                amount={data.amount}
                                description={data.description}
                             />
                        )
                    }) : <EmptyCart>Carrinho vazio</EmptyCart>}
                </CartInfo>
                <Payment>
                    <Freight>Frete {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(6)}</Freight>
                    <Total>
                        <p>Subtotal</p>
                        <p>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(10)}</p>
                    </Total>
                    <h1>Forma de pagamento</h1>
                    <hr />
                    <Form>
                        {Object.keys(paymentMethod).map((key) => {
                            const checked = paymentMethod[key]
                            return (
                                <div key={key}>
                                    <input
                                        checked={checked}
                                        name={key}
                                        type={'checkbox'}
                                        onChange={onChangePayment}
                                    />
                                    <label>{key}</label>
                                </div>
                            )
                        })}
                        <Button>Confirmar</Button>
                    </Form>
                </Payment>
            </CartConfig>
            <MenuNav page={"cart"} />
        </Main>
    )
}

export default Cart