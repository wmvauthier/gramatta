DROP DATABASE gramatta;

/* CRIAÇÃO DO BANCO DE DADOS */
CREATE DATABASE gramatta;

/* SELEÇÃO DO BANCO DE DADOS */
USE gramatta;

/* TABELA DE CONFIGURAÇÃO DA FILIAL DO CLIENTE */
CREATE TABLE configParking(
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

/* TABELA DE TABELA DE PREÇO */
CREATE TABLE priceTable(
    id_tabela_preco int not null primary key auto_increment,
    nome varchar(100),
    periodo int,
    valor float,
    tabela_aux varchar(100)
);

/* TABELA DE TABELA DE PREÇO AUXILIAR*/
CREATE TABLE priceTableAux(
    id_tabela_preco_aux int not null primary key auto_increment,
    nome varchar(100),
    periodo int,
    valor float,
    valorPerda float,
    tolerancia int
);

/* TABELA DE USUÁRIOS DO SISTEMA */
CREATE TABLE users(
    id_user int not null primary key auto_increment,
    nome varchar(100),
    cargo varchar(100),
    user_login varchar(100),
    user_senha varchar(18),
    nivel_acesso varchar(100),
    token varchar(11)
);

/* TABELA DE AFILIADOS DO SISTEMA */
CREATE TABLE affiliate(
    id_afiliado int not null primary key auto_increment,
    nome varchar(100),
    cnpj varchar(18)
);

/* TABELA DE PÁTIOS DO SISTEMA */
CREATE TABLE courtyard(
    id_patio int not null primary key auto_increment,
    nome varchar(100),
    qtd int,
    onCourtyard int default 0,
    outCourtyard int,
    tabela_preco varchar(100)
);

/* TABELA DE TERMINAIS DO SISTEMA */
CREATE TABLE terminal(
    id_terminal int not null primary key auto_increment,
    descricao varchar(100),
    ip varchar(16),
    patio int,
    funcao varchar(100),
    ip_cancela varchar(16)
);

/* TABELA DE DOCUMENTOS DO SISTEMA */
CREATE TABLE document(
    id_document int not null primary key auto_increment,
    document_type varchar(3),
    nfce varchar(44),
    ticket varchar(16),
    cartao int,
    placa varchar(7),
    cred int,
    data_entrada varchar(30),
    terminal_entrada varchar(100),
    data_saida varchar(30),
    terminal_saida varchar(100),
    patio int,
    docStatus varchar(16),
    valor float default 0.0
);

/* INSERÇÃO DE CONFIGURAÇÃO DA FILIAL DO CLIENTE */
INSERT INTO configParking (nome_fantasia,razao_social,endereco,cnpj,inscricao_municipal,telefone,website,email) VALUES 
('BASE DE DADOS GRAMATTA','.','.','.','.','.','.','.');

/* INSERÇÃO DE USUÁRIO LINK */
INSERT INTO users (nome,cargo,user_login,user_senha,nivel_acesso,token) VALUES 
('Link Nordeste','Desenvolvedores','link','ti159753','LINK','51rwtbfsyza');

/* INSERÇÃO DE PÁTIO PADRÃO */
INSERT INTO courtyard (nome,qtd,onCourtyard,outCourtyard,tabela_preco) VALUES 
('Pátio Link 01',5,0,5,1),
('Pátio Link 02',5,0,5,1);

/* INSERÇÃO DE AFILIADOS PADRÃO */
INSERT INTO affiliate (nome,cnpj) VALUES 
('Conveniência LTDA',"12.215.056/0001-42");

/* INSERÇÃO DE TABELA DE PREÇO PADRÃO */
INSERT INTO priceTable (nome,periodo,valor,tabela_aux) VALUES 
('Tabela de Preço Principal',60,8.00,1);

/* INSERÇÃO DE TABELA DE PREÇO AUXILIAR */
INSERT INTO priceTableAux (nome,periodo,valor,valorPerda,tolerancia) VALUES 
('Tabela de Preço Auxiliar',60,1.00,20.00,10);

/* INSERÇÃO DE TERMINAL PADRÃO */
INSERT INTO terminal (descricao,ip,patio,funcao,ip_cancela) VALUES 
('Terminal de Entrada','192.168.0.136',1,'GAMA - SAÍDA','192.168.0.100');

/* INSERÇÃO DE DOCUMENTO PADRÃO */
INSERT INTO document (document_type,nfce,ticket,cartao,placa,cred,data_entrada,terminal_entrada,data_saida,terminal_saida,patio,docStatus,valor) VALUES
('AFF','','',null,null,null,'03/11/2018 15:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'04/11/2019 15:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'03/11/2019 15:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'29/11/2019 15:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'11/12/2019 15:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'12/12/2019 12:58:14','EN01','12/12/2019 14:01:14','SA01',1,"true",0.0),
('AFF','','',null,null,null,'12/12/2019 13:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'12/12/2019 14:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'12/12/2019 15:58:14','EN01',null,null,1,"true",0.0),
('AFF','','',null,null,null,'12/12/2019 16:58:14','EN01',null,null,1,"true",0.0);