const a = Number(process.argv[2])

const b = Number(process.argv[3])

const c = Number(process.argv[4])

const checaTriangulo = (a: number, b: number, c: number): string => {

  if (a !== b && b !== c) {
    return "Escaleno";

  } else if (a === b && b === c) {
    return "Equilátero";

  } else {
    return "Isósceles";

  }
}

console.log(checaTriangulo)