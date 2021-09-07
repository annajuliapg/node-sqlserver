# Node e SQL Server

Uma API de gerenciamento de usuários utilizando Node.js e SQL Server

## Download

```bash
git clone https://github.com/annajuliapg/node-sqlserver.git
```

## Instale os Módulos

```bash
npm install
```

## Crie o banco
```sql
CREATE DATABASE USERSDB

USE USERSDB

CREATE TABLE Users (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[job] [varchar](50) NULL
)
```
## Configure env

```bash
echo $null >> .\infrastructure\env\env.js
```
E adicione as informações:

```js
const env = {
  server: 'localizacao-do-servidor',
  port: 1433,
  database: 'nome-do-banco',
  user: 'nome-usuario',
  password: 'senha',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

module.exports = env;
```

## Inicie o servidor

```bash
node index.js
```

## Rotas

Retorna todos os usuários
```
GET - http://localhost:3000/users
```
Retorna usuário de um id específico
```
GET - http://localhost:3000/users/:id
```
Adciona um usuário
```
POST - http://localhost:3000/users
```
```json
{
    "name": "Julia",
    "email": "annajulia@msn.com",
    "job": "Data Engineer"
}
```
Atualiza um usuário
```
PATCH - http://localhost:3000/users/:id
```
```json
{
    "name": "Anna Julia",
    "email": "annajulia@msn.com",
    "job": "Data Engineer"
}
```
Deleta um usuário

```
DELETE - http://localhost:3000/users/:id
```