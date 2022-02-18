function cont() {
    i = Number(document.querySelector("#txtinicio").value)
    f = Number(document.querySelector("#txtfim").value)
    p = Number(document.querySelector("#txtpasso").value)
    
    
    if(i == '' || f == '' || p =='') {
        alert("[ERRO] - Preencha todos os campos!")
    }else {
    for (;i <= f; i += p){       

        
        res.innerHTML = res.innerHTML + " " + i             

    }

    }
   
}
