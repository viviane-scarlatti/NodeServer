// carreguei a biblioteca do Express na variável express
var express = require("express");

// criei um servidor invocando a biblioteca
var server = express();

var listaDeFuncs;
listaDeFuncs=[{
                "id" : 1,
                "nome":"Professor Isidro",
                "endereco":"Av. Ataliba Leonel", 
                "numero" : 500,
                "salario": 1000
            },
            {
                "id" : 2,
                "nome":"Professor Tiburcio",
                "endereco":"Av. Ataliba Leonel", 
                "numero" : 500,
                "salario" : 1500
            },
            {
                "id" : 3,
                "nome":"Professor Thiago",
                "endereco":"Av. Ataliba Leonel", 
                "numero" : 500,
                "salario" : 1700
            },
            {
                "id" : 4,
                "nome":"Professora Ana",
                "endereco":"Av. Ataliba Leonel", 
                "numero" : 500,
                "salario": 1200
            },
            ]

server.get("/funcionarios/:id", function(req, res){
    var id = req.params.id;
    if (id <=0 || id > 4){
        res.json({"resultado":"funcionario nao encontrado"});
    }
    else{
        res.json(listaDeFuncs[id-1]); 
    }
});

server.get("/funcionarios", function(req, res){
    console.log("Browser vai recuperar a lista inteira");
    res.json(listaDeFuncs);
});


server.get('/teste', function(req, res) {
    console.log("Browser acessou o caminho /teste ");
    res.send("Hello");
});


server.listen(3000, function inicializou(){
    console.log("Servidor rodando na porta 3000");
});