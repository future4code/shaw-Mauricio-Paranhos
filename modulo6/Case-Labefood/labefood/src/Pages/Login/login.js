import React from 'react'
import { Main, Form, ButtonStyled } from './styled'
import TextField from '@mui/material/TextField'


const Login = () => {
    return (
        <Main>
            <p>Entrar</p>
            <Form>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined" 
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined" 
                />
                <ButtonStyled type='submite'>
                    Entrar
                </ButtonStyled>
            </Form>
        </Main>
    )
}

export default Login