const nomes = new Set();


function adicionar  () {
    const nome = document.getElementById ("nome");
    let nomeLimpo = nome.value.toUpperCase();
    nomeLimpo = nomeLimpo.trim();
    if (!nomes.has(nomeLimpo)  && (nomeLimpo== " ")) {

    const lista = document.getElementsByTagName ("ul") [0]
    const item = document.createElement("li");
    const nomeUpper = nome.value.toUpperCase();
    console.log(nomeUpper)
    item.textContent=nomeLimpo;
    nomes.add(nomeLimpo)
    console.log(nomes)
    lista.appendChild(item)
    nome.value=" ";

}
}

function sortear () {
    const listaNome = Array.from(nomes)
    const sorteado = listaNome[Math.floor(Math.random()*listaNome.length)]
    const listaSorteados = document.getElementsByTagName ("ul") [1];
    const itemSorteado = document.createElement("li")
    itemSorteado.textContent=sorteado;
    listaSorteados.appendChild(itemSorteado);
    
}
