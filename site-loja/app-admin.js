function fnCarregarDados() {
    fetch("http://localhost:3000/produtos/", { method: "GET" })
        .then(response => response.json())
        .then((produtos) => {
            produtos.forEach(produto => {
                fnMontarLinhaProduto(produto)
            })
        }).catch(erro => console.log(erro.message))
}

fnCarregarDados()

function fnMontarLinhaProduto(produto) {

    let valor = produto.preco
    //                   Define a localidade
    let valorFormatado = valor.toLocaleString('pt-BR', {
        //  Estilo "Currency(Moeda)"
        style: "currency",
        // Define a "Currency(Brasileira)"
        currency: "BRL"
    })

    let descricaoProduto = produto.descricao
    //                                Cortar String Inicio/Fim
    let descricaoLimitada = descricaoProduto.substring(0, 100)

    let linha = `
    <tr>
        <td><img style="height: 70px; width: 70px; object-fit: cover;"
            src="${produto.foto}" alt="${produto.nome}"></td>
        <td class="">${produto.id}</td>
        <td>${produto.titulo.substring(0, 20)}</td>
        <td>${produto.categoria}</td>
        <td>${descricaoProduto.substring(0, 50)}</td>
        <td>${valor.toLocaleString('pt-BR', {
        //  Estilo Da string(moeda) 
        style: "currency",
        // Tipo do estilo(Brasileiro)
        currency: "BRL"
    })}
        </td>
        <td>${"⭐".repeat(produto.avaliacao)}(${produto.avaliacao})</td>
        <td>
        <a href="um-produto.html?id=${produto.id}" class="btn btn-primary py-1 px-2"><i
            class="bi bi-search fs-5 text-white" title="Ver"></i></a>
            
        <a href="editar-produto.html?id=${produto.id}"
            class="btn ms-2 me-2 btn-warning py-1 px-2" title="Editar"><i
            class="bi bi-pencil-square fs-5 text-white"></i></a>

        <button type="button" class="btn btn-danger py-1 px-2"><i
            class="bi bi-trash fs-5 text-white" title="Excluir"></i></button>
        </td>
    </tr >
        `

    document.querySelector("#lista-produtos").innerHTML += linha;
}