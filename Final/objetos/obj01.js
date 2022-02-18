/*array usa []
let num = [5,8,4]

objeto usa {}
let num = {atributo:'',atributo:'',atributo:'',atributo(){}}
let num = {nome:'José',sexo:'M',peso:85.5,engordar(p){}}
Objeto guarda valores variáveis (atributos) e podem guardar funcionalidades
        (metodos)
Parao JavaScript array e Objeto são da mesma classe: objetos
*/

let amigo = {nome:'José',
sexo:'M',
peso:85.5,
engordar(p){
        console.log('Engordou')
        this.peso += p

}}
amigo.engordar(2)
console.log(`${amigo.nome} peso: ${amigo.peso} kg`)
