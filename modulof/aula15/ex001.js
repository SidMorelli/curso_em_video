let num = [4, 5, 6, 7, 8 ]

   // num[3] = 20
   // num[1] = 45
    //num[9] = 100
   // num.push(52)
   // num.length - deve ser usado dentro de ${variavel.length}
   num.sort()

console.log(`Nosso vetor é: ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
//console.log(num[0])

/*for (pos = 0; pos<num.length; pos++ ){

    console.log(`A posição ${pos} tem o valor ${num [pos]}`)

}*/

for (pos in num) {
    console.log(`A posição ${pos} tem o valor ${num [pos]}`)
}
onde = (num.indexOf(7))
console.log(`Na posição 7 está o número: ${onde}`)