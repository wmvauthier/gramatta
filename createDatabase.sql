create database portal_noticias;
use portal_noticias;
create table noticias(
    id_noticia int not null primary key auto_increment,
    titulo varchar(100),
    noticia text,
    resumo varchar(100),
    autor varchar(100),
    data_noticia date,
    data_criacao timestamp default current_timestamp
);
