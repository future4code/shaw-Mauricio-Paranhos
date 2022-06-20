
function imprimeTresCoresFavoritas (cor1: string, cor2: string, cor3: string): string[] {
    
    const arrayCoresFavoritas = []
    arrayCoresFavoritas.push(cor1,cor2,cor3)

    return arrayCoresFavoritas

}

console.log(imprimeTresCoresFavoritas("azul", "preto", "branco"))