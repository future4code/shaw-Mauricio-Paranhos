import React from 'react';
import Home from './components/Home/Home';
import BotaoLimpar from './components/BotaoLimpar/BotaoLimpar';
import styled from 'styled-components';

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerBotaoLimpar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 10%;
`

function App () {
    return (
        <ContainerApp>
            <Home/>
            <ContainerBotaoLimpar>
                <BotaoLimpar/>
            </ContainerBotaoLimpar>
        </ContainerApp>
    )
}

export default App;
