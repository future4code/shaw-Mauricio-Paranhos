import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CartConfig = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`

export const InfoProfile = styled.div`
    display: flex;
    flex-grow: 0.1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    width: 100%;
    /* height: 10%; */
    font-size: 1.2rem;
    background-color: #eeeeee;
    p:nth-child(1){
        color: #b8b8b8;
    }
`

export const  InfoRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    margin: 10px;
    p:nth-child(1){
        color: red;
    }
`

export const CartInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100vh; */
`

export const EmptyCart = styled.p`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    p,label{
        font-size: 1.2rem;
    }
`

export const Freight = styled.p`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`

export const Total = styled.div`
    display: flex;
    justify-content: end;
    margin: 5px;
    p:nth-child(2){
        color: #e86e5a;
        font-size: 1.2rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    div{
        margin: 5px;
    }
    label{
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    input{
        height: 20px;
        width: 20%;
    }
`
