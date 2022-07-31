import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Constants/url'
import { ContainerFeed, CardsRestaurant, InputSearch, BoxInputSearch, Menu, MenuItem } from './styled'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import Header from '../../Components/Header/Header'

const Feed = () => {

    const [restaurants, setRestaurants] = useState([])
    const [categoryRestaurant,setCategoryRestaurant] = useState([])
    const [valueCategory,setValueCategory] = useState("")

    const  [inputText,setInputText] = useState("")

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data)
            setRestaurants(res.data.restaurants)
            filterCategory(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const filterCategory = (restaurants) => {
        const arrayAux = []
        restaurants.map((res) => {
            arrayAux.push(res.category)
        })
        const takeOutRepetition = [...new Set(arrayAux)]

        const changeObjectArray = []
        
        takeOutRepetition.map((category)=>{
            const insertObj = {category,select:false}
            changeObjectArray.push(insertObj)
        })
        setCategoryRestaurant(changeObjectArray)
    }
    
    useEffect(() => {
        getRestaurants()
    }, [])

    const filterRestaurant = restaurants
        .filter((restaurant)=>
            inputText ? restaurant.name.toLowerCase().includes(inputText.toLowerCase()):true
        )
        .filter((restaurant)=>
            valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()):true
            )
        .map((restaurant) => {
            return <CardRestaurant restaurant={restaurant} />
        })

    const changeCategory = (category)=>{
        setValueCategory(category)

        const result = categoryRestaurant.map((cat)=>{
            if(cat.category === category){
                return{
                    ...cat,
                    select:true
                }
            }else{
                return{
                    ...cat,
                    select:false
                }
            }
        })
        setCategoryRestaurant(result)
    }

    return(
        <ContainerFeed>
            <Header title={'Rappi4'}/>
            <BoxInputSearch>
                <InputSearch value={inputText} onChange={(event)=>setInputText(event.target.value)} />
            </BoxInputSearch>
            <Menu>
                <MenuItem 
                    onClick={()=>changeCategory("")}
                >
                    Todos
                </MenuItem>
                
                {categoryRestaurant.map((category) => {
                    return (
                        <MenuItem 
                            select={category.select} 
                            onClick={() => changeCategory(category.category)}
                        >
                            {category.category}
                        </MenuItem>
                    )
                })}
                
            </Menu>
            <CardsRestaurant>
                {
                    filterRestaurant
                }
            </CardsRestaurant>
        </ContainerFeed>
    )
}

export default Feed