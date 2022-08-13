import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const PersonProfile = styled.div`
    display: flex;
    justify-content: space-between;
    div:nth-child(1) {
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    div:nth-child(2) {
        width: 20%;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
    }
`

export const PersonAddress = styled.div`
    height: 10%;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    div:nth-child(1) {
        width: 80%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    div:nth-child(2) {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
    }
`

export const OrdersHistory = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`

export const Title = styled.div`
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    grid-column-start: 2;
`

export const LogOutDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 5px;
    p,label{
        font-size: 1.2rem;
        margin-left: 5px;
    }
`