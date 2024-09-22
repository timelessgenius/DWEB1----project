// Inicializar o carrinho com os dados do localStorage (se houver)
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let total = carrinho.reduce((sum, produto) => sum + produto.preco, 0);

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const produto = { nome, preco };
    carrinho.push(produto);
    total += preco;
    
    // Salvar carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} adicionado ao carrinho!`); // Mensagem de confirmação
    atualizarCarrinho();
}

// Função para atualizar a visualização do carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho');
    const totalSpan = document.getElementById('total');
    
    if (carrinhoLista) {
        carrinhoLista.innerHTML = '';

        carrinho.forEach((produto) => {
            const item = document.createElement('li');
            item.textContent = `${produto.nome} - R$${produto.preco.toFixed(2)}`;
            carrinhoLista.appendChild(item);
        });
    }

    if (totalSpan) {
        totalSpan.textContent = total.toFixed(2);
    }
}

// Função para redirecionar para a página do carrinho
function irParaCarrinho() {
    window.location.href = 'html/carrinho.html';
}
