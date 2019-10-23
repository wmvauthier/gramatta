/* CRIAÇÃO DO BANCO DE DADOS */
create database gramatta;

/* SELEÇÃO DO BANCO DE DADOS */
use gramatta;

/* TABELA DE CONFIGURAÇÃO DA FILIAL DO CLIENTE */
create table configEstacionamento(
    id_parking int not null primary key auto_increment,
    nome_fantasia varchar(100),
    razao_social varchar(100),
    endereco varchar(100),
    cnpj varchar(18),
    inscricao_municipal varchar(8),
    telefone varchar(18),
    website varchar(100),
    email varchar(100)
);

/* INSERÇÃO DE CONFIGURAÇÃO DA FILIAL DO CLIENTE */
insert into configEstacionamento (nome_fantasia,razao_social,endereco,cnpj,inscricao_municipal,telefone,website,email) VALUES ('BASE DE DADOS GRAMATTA','.','.','.','.','.','.','.');