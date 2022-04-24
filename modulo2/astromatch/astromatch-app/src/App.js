import React from "react"
import axios from "axios"
import Post from "./components/Post/Post";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={"Usuário"}
        fotoPost={"https://picsum.photos/200/150?=2"}
      />
    </AppContainer>
  );
};

export default App;
