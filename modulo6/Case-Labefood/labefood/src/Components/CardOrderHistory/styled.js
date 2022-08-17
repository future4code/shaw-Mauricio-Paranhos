import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 15vh;
    width: 80%;
    border: 1px solid black;
    border-radius: 7%;
    margin-top: 3%;
    margin-bottom: 3%;
    p {
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000000;
        margin: 3%;
    }
`

export const NameRestaurant = styled.div`
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
`

export const Cost = styled.div`
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`