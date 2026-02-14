## Blibliotecas Utilizadas
```js
    - Nodemon
        - Monitora o diretório do projeto e reinicializa automaticamente sempre que haver alguma alteração.

    - cors
        - Mecanismo de segurança baseado em HTTP, que permite o servidor a indicar ao navegador, todas as origens permitidas além da sua própria para carregar recursos.
        
    - express
        - Framework de aplicações web back-end para Node.js, é projetado para facilitar o desenvolvimento de aplicações web e APIs.

    - mysql
        - Biblioteca utilizada para conectar o projeto node.js com o mysql.

    - body_parser
        -  Middleware para Node.js, que facilita a extração e análise dos dados contidos no corpo (body) de uma requisição HTTP de entrada, como as enviadas via método POST. 
```

## Como instalar cada biblioteca (Terminal)
#### Nodemon
 ```bash
    npm install nodemon
``` 
    
#### Express
 ```bash
    npm install express
```
#### mysql
 ```bash
    npm install mysql
```

#### cors
 ```bash
    npm install cors  
```

#### body-parser
 ```bash
    npm install body-parser  
```


## Como utilizar cada Biblioteca e Framework

#### Nodemon
- Alterar "scripts" no arquivo package.json
 ```js
    "scripts": {
    "dev": "nodemon index"
    }
```

#### Express
- Adicionar nos arquivos que utilizaram Express
 ```js
    const express = require('express');
    const app = express();
```

#### mysql
- Adicionar no arquivo de configuração do banco
```js
let mysql = require("mysql");
let conexao = mysql.createConnection({
    host: "endereço servidor",
    user: "usuario",
    password: "senha",
    database: "nome do banco"
});
```

#### body-parser
- Adicionar nos arquivos que terão as rotas
```js
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
```

#### cors
- Adicionar nos arquivos que terão as rotas
```js
const cors = require("cors");
app.use(cors())
```

<br>