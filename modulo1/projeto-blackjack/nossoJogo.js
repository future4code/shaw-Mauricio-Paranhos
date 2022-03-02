/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    if(confirm("Quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
      const cartaUsuario1 = comprarCarta()
      const cartaUsuario2 = comprarCarta()
      const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor      
      console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, " - pontuação", pontuacaoUsuario)
      const cartaCpu1 = comprarCarta()
      const cartaCpu2 = comprarCarta()
      const pontuacaoCpu = cartaCpu1.valor + cartaCpu2.valor
      console.log("Computador - cartas:", cartaCpu1.texto, cartaCpu2.texto, " - pontuação", pontuacaoCpu)
      if (pontuacaoUsuario > pontuacaoCpu) {
         console.log("O usuário ganhou!")
      } else if (pontuacaoCpu > pontuacaoUsuario) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }
   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O jogo acabou")
   }
   
   