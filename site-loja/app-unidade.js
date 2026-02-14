function fnAlterarFoto() {
    if (foto.value != '') {
        document.getElementById("fundo-imagem-unidade").style.backgroundImage = `url('${foto.value}')`
    } else {
        document.getElementById("fundo-imagem-unidade").style.backgroundImage = `url('https://duarteluminosos.com.br/wp-content/uploads/2018/01/fachadas-de-lojas-de-roupas-2.jpg')`
    }
    console.log(foto.value)
}

function fnLimparCampos() {
    document.getElementById("form-unidades").reset()
}

function fnCadastrarUnidades() {

    let formDadosUnidades = {
        nomeUnidade: document.getElementById("nome-loja").value,
        telefoneUnidade: document.getElementById("telefone-loja").value,
        emailUnidade: document.getElementById("email-loja").value,
        enderecoUnidade: document.getElementById("endereco-loja").value,
        latitudeUnidade: document.getElementById("latitude-loja").value,
        longitudeUnidade: document.getElementById("longitude-loja").value,
        fotoUnidade: document.getElementById("imagen-loja").value,
    }
    console.dir(formDadosUnidades)

    fetch('http://localhost:3000/unidade/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDadosUnidades)
    })
        .then(resposta => resposta.json())
        .then((dados) => {
            fnLimparCampos()
            console.log(dados)

            fnMensagemSalvar()
            // const tituloUnidade = formDadosUnidades.nomeUnidade
            // fnGerarTosts(tituloProduto)
        })
        .catch(erro => console.log(erro.message))
}

let foto = document.getElementById("imagen-loja")
let btn_salvar = document.getElementById("btn-salvar-unidade")


foto.addEventListener("blur", function () {
    fnAlterarFoto()
})

btn_salvar.addEventListener("click", () => {
    fnCadastrarUnidades()
})


// function fnGerarTosts(unidade) {
//     const toastLiveExample = document.getElementById('liveToast')

//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//     toastBootstrap.show()

//     const label = document.getElementById("sucesso-produto")
//     label.innerHTML = `${unidade}`
// }


// Jeito do bootstrap
function fnMensagemSalvar() {
    var toastElList = [].slice.call(document.getAnimations.querySelectorAll(".toast"))
    var toastList = totalElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastElList.forEach(toast => toast.show())
}