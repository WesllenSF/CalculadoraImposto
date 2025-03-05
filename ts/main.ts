namespace loja{

    // Chama o Botão
    const calc = document.getElementById("calc") as HTMLButtonElement;
    
    // Chama o Input do nome
    const campoProduto = document.getElementById("campoNome") as HTMLInputElement;
    
    // Chama o Input do Valor do produto
    const campoValorProduto = document.getElementById("campoValorProduto") as HTMLInputElement;

    // Chama o Input do Imposto
    const campoImposto = document.getElementById("campoImposto") as HTMLInputElement;
    
    
    calc.addEventListener("click", ()=>{
        // Chama o construtor
        let p = new Produto();

        // Converte os campos para "Variaveis"
        p.nome = campoProduto.value;
        p.preco = parseFloat(campoValorProduto.value);
        p.imposto = parseFloat(campoImposto.value);
        // Termina Conversão dos campos para "Variaveis"

        // Imprime o texto
        document.getElementById("nome").textContent = p.nome;

        // exibe o valor total do imposto + produto
        document.getElementById("comImposto").textContent = p.calcularPrecoFinal(p.preco).toString();
    });
}