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

function App () {
    return (
        <ContainerApp>
            <Home/>
            <BotaoLimpar/>
        </ContainerApp>
    )
}

export default App;
