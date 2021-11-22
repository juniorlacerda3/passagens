const express = require("express");
const app = express();


app.get("/", function (req, res) {
    res.send("<h1>Bem vindo, faça a emissão de seu bilhete aqui!</h1>")
})


app.get("/bilhete/", function (req, res) {

    var cpf = req.query["cpf"];

    if (cpf) {
        res.send("<h1>===============================<br>EMISSÃO DE PASSAGENS<br>===============================</h1>" +
            "Passageiro: LACERDA, JÚNIOR<br>N° passaporte: FR17021803<br>" +
            "<h4>Dados do voo:</h4>" +
            "Código de reserva: MC4517 <br> N° voo: 1810 - FOR, Fortaleza,Brasil - FCO, Roma, Itália<br> Terminal: 01 Portão: 33<br> Assento:  17-F<br>" +
            "<h4>Pagamento</h4>" +
            "Custo de transporte aéreo: R$ 940.19<br> Tarifa: R$ 250.25<br> Sobretaxa transportadora (YQ): R$ 78.89<br> Despesas de Serviço de Passageiros (YP): R$ 53.45<br> Preço total do bilhete: R$  1322.78<br>" +
            "<h4>Cotação de finanças</h4>" +
            "Valor disponível em R$: 9539.45<br>Real para Euro €: 1490.53<br>Real para Dólar US$: 1688.39<br>"+
            "<h4>Temperatura local</h4>"+
            "Temperatura em Fahrenheit: 77°<br>Temperatura em Celsius: 25°");
        } else {
        res.send("<h1> Insira o seu CPF! </h1>")
    }
})


app.get("/final", function (req, res) {
    res.send("<h1> Reserva Concluida! </h1>")
})


app.listen(process.env.PORT ?? 3000,function(erro){
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})