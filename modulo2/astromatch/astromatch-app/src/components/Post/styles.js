import styled from "styled-components"

export const PostContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    height: 50vh;
    width: 20vw;
    background-color: aqua;
    margin-top: 5%;
`

export const PostHeader = styled.div `
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`

export const PostFooter = styled.div `
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: blue;
`

export const PostPhoto = styled.img`
    width: 90%;
`
