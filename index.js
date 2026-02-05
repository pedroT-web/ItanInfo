const express = require('express');
const app = express();

const porta = 3000;

app.listen(porta);

app.use(express.json());

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("ItanInfo");
});

// Arrey de produtos - Método inicial

// const lista_produtos = [
//     {
//         "titulo": "Red Nike",
//         "foto": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
//         "descricao": "Tênis leve, com design versátil e acabamento moderno, perfeito para acompanhar sua rotina.",
//         "preco": 499.00,
//         "avaliacao": 5
//     },
//     {
//         "titulo": "Blue Nike",
//         "foto": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "descricao": "Modelo confortável, resistente e ideal para quem busca um visual urbano sem abrir mão do bem-estar.",
//         "preco": 699.00,
//         "avaliacao": 3
//     },
//     {
//         "titulo": "Black Nike",
//         "foto": "https://images.unsplash.com/photo-1643584549066-fc993fc9cb43?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "descricao": "Tênis com ajuste confortável, visual clean e solado que garante estabilidade em cada passo.",
//         "preco": 799.00,
//         "avaliacao": 4
//     }
// ]


// Arquivo json

// const lista_produtos = require("./dados.json")

let mysql = require("mysql")
let conexao = mysql.createConnection({
    host: "108.179.193.209",
    user: "gutoxa27_alunos",
    password: "JD_eXLNHp1ZG",
    database: "gutoxa27_bd_loja"
});

conexao.connect(function (erro) {
    if (erro) {
        console.log("Deu ruim na conexão \n");
        // console.log(erro)
        throw erro;
    } else {
        console.log("Conexão deu bom \n");
    }
});

// Read All - [GET] / produtos
app.get("/produtos", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Enviar dados de arquivo json
    // res.send(lista_produtos);

    conexao.query("SELECT * FROM produtos ORDER BY avaliacao ASC", (erro, lista_produtos, campos) => {
        console.log(lista_produtos);
        res.send(lista_produtos);
    });

    // 1 - SELECT * FROM produtos LIMIT 12
    // 2 - SELECT * FROM produtos WHERE titulo LIKE 'a%'
    // 3 - SELECT * FROM produtos WHERE preco = 410
    // 4 - SELECT * FROM produtos WHERE avaliacao BETWEEN 4 AND 5 
    // 5 - SELECT * FROM produtos WHERE avaliacao = 1 or avaliacao = 5
    // 6 - SELECT * FROM produtos WHERE id BETWEEN 21 AND 32
    // 7 - SELECT * FROM produtos WHERE id >= 41
    // 8 - SELECT * FROM produtos WHERE avaliacao = 5 LIMIT 12
    // 9 - SELECT * FROM produtos ORDER BY preco ASC
    // 10 - SELECT * FROM produtos ORDER BY avaliacao ASC
});

app.get("/unidades", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    conexao.query("SELECT * FROM unidades", (erro, lista_unidades, campos) => {
        console.log(lista_unidades);
        res.send(lista_unidades);
    })
})