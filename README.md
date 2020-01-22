# Gramatta - LinkC NE

Um sistema de Automação para estacionamento contendo vários módulos que se integram entre si, conversando através do protocolo TCP/IP e 
gerando uma rede de Cancelas Automáticas e equipamentos de rede, deixando o controle do estacionamento na palma da sua mão.

- Módulo Básico para o Sistema Gramatta
- Realiza o acesso ao Banco de Dados
- Serve de base para vários outros Módulos do Sistema Gramatta.

## Requisitos

1. Banco de Dados MySQL ou MariaDB
2. NodeJS
3. Raspberry Pi
4. Cartão SD 16GB

## Instalação

### Sistema Operacional

1. Realizar o Download do [Balena.io](https://www.balena.io/etcher/)
2. Realizar o Download da [ISO do Raspbian](https://www.raspberrypi.org/downloads/raspbian/)
3. Utilizar o Balena para a gravação da Imagem ISO

### NodeJS

Abra um Terminal no Raspberry e rode os comandos abaixo para realizar a instalação do NodeJS:

```bash
wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv7l.tar.gz
```
```bash
tar -xzf node-v8.9.0-linux-armv6l.tar.gz
```
```bash
cd node-v8.9.0-linux-armv7l/
```
```bash
sudo cp -R * /usr/local/
```
```bash
node -v
```

### Sistema

Abra um Terminal no Raspbery e entre na pasta de instalação do NodeJS para clonar o projeto com o seguinte comando:

```git
git clone https://github.com/devlinkcne/gramatta.git
```

### Banco de Dados

Abra um Terminal no Raspberry e rode os comandos abaixo para instalar o MariaDB:

```bash
sudo apt install mariadb-server-10.0 -Y
```
```bash
sudo mysql -u root -p
```
```bash
root
```

Uma vez dentro do MariaDB, será necessário criar o Banco de Dados e conceder as devidas permissões.

```sql
create database gramatta;
```
```sql
GRANT INSERT, SELECT, DELETE, UPDATE ON gramatta.* TO 'root'@'localhost' IDENTIFIED BY 'root';
```

Dentro da pasta clonada do sistema, existe um arquivo chamado: gramattaDatabase.sql
Basta copiar o conteúdo deste arquivo e colar no Terminal do MariaDB

### Testes

Para testar o funcionamento do módulo Gramatta, basta realizar a instalação de qualquer módulo do sistema, ou alguma requisição via [Postman](https://www.getpostman.com/) para:

```bash
localhost:3000
```
