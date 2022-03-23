import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/portrait.jpg'
import styledComponents from 'styled-components';
        

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Mauricio Esteves Paranhos" 
          descricao="Eu sou de Guaíba/RS e sou formado em Comércio Exterior, mas nunca trabalhei na área.
          Tecnologia sempre foi um dos principais interesses na minha vida, então, no ano de 2022, resolvi 
          buscar uma carreira na área de desemvolvimento de software."
        />
        
        <ImagemButton 
          imagem="https://img.icons8.com/dotty/344/down.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/344/external-email-accounting-smashingstocks-detailed-outline-smashing-stocks.png" 
          nome="Email: emailfake@fake.com" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://img.icons8.com/ios/344/order-delivered.png" 
          nome="Endereço: R. Sem Nome, 001 Guaíba/RS" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://2lv6093ewpvrs2jvk39g42gk-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/BotiLogo1.jpg" 
          nome="Kalata Com. de Prod. de Beleza (franquiado O Boticário)" 
          descricao="Encarregado Administrativo" 
        />
        
        <CardGrande 
          imagem="https://www.vivo.com.br/content/dam/vivo-sites/vivo-com-br/homepage/imagens/icones/vivo-smartphone-vivinho-roxo-esquerda-320x320.svg" 
          nome="Matertrei Telefonia Ltda (Vivo)" 
          descricao="Vendedor" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
