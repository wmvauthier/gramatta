DROP DATABASE gramatta;

/* CRIAÇÃO DO BANCO DE DADOS */
CREATE DATABASE gramatta;

/* SELEÇÃO DO BANCO DE DADOS */
USE gramatta;

/* TABELA DE CONFIGURAÇÃO DA FILIAL DO CLIENTE */
CREATE TABLE configEstacionamento(
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

/* TABELA DE USUÁRIOS DO SISTEMA */
CREATE TABLE users(
    id_user int not null primary key auto_increment,
    nome varchar(100),
    cargo varchar(100),
    user_login varchar(100),
    user_senha varchar(18),
    nivel_acesso varchar(100)
);

/* INSERÇÃO DE CONFIGURAÇÃO DA FILIAL DO CLIENTE */
INSERT INTO configEstacionamento (nome_fantasia,razao_social,endereco,cnpj,inscricao_municipal,telefone,website,email) VALUES ('BASE DE DADOS GRAMATTA','.','.','.','.','.','.','.');

/* INSERÇÃO DE USUÁRIO LINK */
INSERT INTO users (nome,cargo,user_login,user_senha,nivel_acesso) VALUES ('Link Nordeste','Desenvolvedores','link','ti159753','LINK');