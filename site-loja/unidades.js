function fnCarregarDadosUnidades() {
    fetch("http://localhost:3000/unidades/", { method: "GET" })
        .then(response => response.json())
        .then((unidades) => {
            unidades.forEach(unidade => {
                fnMontarCardUnidades(unidade)
            })
        })
        .catch(erro => console.log(erro.mesage))
}

fnCarregarDadosUnidades()

function fnMontarCardUnidades(unidade) {
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card card-unidades">
                    <div class="div-imagem">
                        <img class="imagem-cards" src="${unidade.foto}"
                            class="card-img-top" alt="${unidade.nome}">
                            </div>
                        <div class="card-body">
                            <h5 class="card-title mt-3">${unidade.nome_da_loja}</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mt-2">
                                    <p class="card-text"><i class="bi bi-envelope me-2"></i>${unidade.email}</p>
                                    <p class="card-text"><i class="bi bi-telephone me-2"></i>${unidade.telefone}</p>
                                    <p class="card-text texto-endereco"><i class="bi bi-house me-2"></i>${unidade.endereco}</p>
                                    <div class="mt-5 container_maps">
                                        <iframe
                                        width="100%"
                                        height="250px"
                                        frameborder="0" style="border:0"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        src="https://www.google.com/maps?q=${unidade.endereco}&output=embed"
                                        allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light">
                            <button class="btn btn-primary w-100 me-1 text-center">Visitar Loja <i class="bi bi-arrow-up-right-square ms-2"></i></button>
                        </div>
                    </div>
            </div>
        </div>
    `
    document.querySelector(".lista-unidades").innerHTML += cartao
}
