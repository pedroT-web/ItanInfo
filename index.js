const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors())

const porta = 3000;

app.listen(porta);

app.use(express.json());

app.get("/", (req, res) => {
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


// Conexão com o banco de dados

let mysql = require("mysql");
let conexao = mysql.createConnection({
    host: "108.179.193.209",
    user: "gutoxa27_alunos",
    password: "JD_eXLNHp1ZG",
    database: "gutoxa27_bd_loja"
});

conexao.connect( (erro) => {
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
    conexao.query(`SELECT * FROM produtos`, (erro, lista_produtos, campos) => {
        res.send(lista_produtos);
    });
});

app.get("/produtos/:categoria", (req, res) => {
    const parameterCategory = req.params.categoria;

    conexao.query(`SELECT * FROM produtos WHERE categoria = '${parameterCategory}'`, (error, listar_produtos, campos) => {
        res.send(listar_produtos);
    });
});

app.get("/produtos/:categoria/:ordem", (req, res) => {
    const parameterCategory = req.params.categoria;
    const parameterOrder = req.params.ordem;
    const queryOrder = `SELECT * FROM produtos WHERE categoria = '${parameterCategory}' ORDER BY ${parameterOrder} ASC`;
    
    conexao.query(queryOrder, (error, listar_produtos, campos) => {
        res.send(listar_produtos);
    })
})

app.get("/unidades", (req, res) => {
    conexao.query("SELECT * FROM unidades", (erro, lista_unidades, campos) => {
        console.log(lista_unidades);
        res.send(lista_unidades);
    });
});