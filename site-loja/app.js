function fnCarregarDados() {
    const parametros = new URLSearchParams(window.location.search);

    const filtrar = document.querySelector(".filtro");
    const categoriaAtual = parametros.get("categoria")
    filtrar.innerHTML = `
    <li class="nav-item"><a class="nav-link active botoes_nav" aria-current="page"href="produtos.html?categoria=${categoriaAtual}&ordem=preco">Ordenar pelo preço</a></li>
    <li class="nav-item"><a class="nav-link active botoes_nav" aria-current="page"href="produtos.html?categoria=${categoriaAtual}&ordem=titulo">Ordenar pelo título</a></li>
    `

    let rota_categoria = ""
    let rota_ordem = ""
    const isExistCategory = parametros.has("categoria");
    const isExistOrder = parametros.has("ordem");

    if (isExistCategory) {
        rota_categoria = categoriaAtual + "/"
    }

    if (isExistOrder) {
        rota_ordem = parametros.get("ordem") + "/"
    }


    fetch("http://localhost:3000/produtos/" + rota_categoria + rota_ordem, { method: "GET" })
        .then(response => response.json())
        .then((produtos) => {
            produtos.forEach(produto => {
                fnMontarCardProduto(produto)
            })
        })
        .catch(erro => console.log(erro.mesage))
}

fnCarregarDados()

function fnMontarCardProduto(produto) {
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card">
                <div class="div-imagem">
                    <img class="imagem-cards" src="${produto.foto}"
                        class="card-img-top" alt="${produto.nome}">
                        </div>
                    <div class="card-body">
                        <h5 class="card-title">${produto.titulo}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">R$ ${produto.preco}</span>
                            <div>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <small class="text-muted">(${produto.avaliacao})</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm">Comprar</button>
                        <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".lista-produtos").innerHTML += cartao
}


function fnAlterarNomeFiltro(){
    const filtro = document.querySelector(".texto_filtro");
    const textoFiltro = filtro.textContent;

    const parametros = new URLSearchParams(window.location.search)
    const isExistOrder = parametros.has("ordem");

    if(isExistOrder){
        const urlOrder = parametros.get("ordem")

        console.log(urlOrder)

        if(urlOrder == "preco"){
            filtro.innerHTML = `Ordenar pelo preço`
        }else if(urlOrder == "titulo"){
            filtro.innerHTML = `Ordenar pelo título`
        }
    }else{
        textoFiltro = "Filtrar"
    }
}

fnAlterarNomeFiltro()