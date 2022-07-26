import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Constants/url'
import { ContainerFeed, CardsRestaurant, InputSearch, BoxInputSearch, Menu, MenuItem } from './styled'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import Header from '../../Components/Header/Header'

const Feed = () => {

    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data)
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getRestaurants()
    },[])

    return(
        <ContainerFeed>
            <Header title={'Rappi4'}/>
            <BoxInputSearch>
                <InputSearch/>
            </BoxInputSearch>
            <Menu>
                <MenuItem select={true}>Burger</MenuItem>
                <MenuItem select={false}>Asiática</MenuItem>
                <MenuItem select={true}>Massas</MenuItem>
                <MenuItem select={true}>Saudável</MenuItem>
                <MenuItem select={false}>Árabe</MenuItem>
                <MenuItem select={true}>Indiana</MenuItem>
            </Menu>
            <CardsRestaurant>
                {
                    restaurants.map((restaurant) => {
                        return <CardRestaurant restaurant={restaurant} />
                    })
                }
            </CardsRestaurant>
        </ContainerFeed>
    )
}

export default Feed