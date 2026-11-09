const jsonServer = require('json-server');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const porta = process.env.PORT || 3000;

server.use(middlewares);
server.use(express.static(__dirname));
server.use(router);

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});