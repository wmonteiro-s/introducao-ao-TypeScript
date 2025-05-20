function soma (num1: number, num2: number): number {
    return num1 + num2
}

function calculaMedia (notas: number[]): number {
    const total = notas.reduce((acc: number, nota: number) => acc + nota, 0)

    return total/notas.length
}

console.log(calculaMedia([7, 8.75, 10, 4]).toFixed(2))