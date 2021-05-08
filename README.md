# node-sqlserver

Node.js com SQL Server

## Download

```bash
git clone https://github.com/annajuliapg/node-sqlserver.git
```

## Instale os Módulos

```bash
npm install
```

## Configure env

infrastructure/env/env.js

## Crie o banco
```sql
CREATE DATABASE TESTES

USE TESTES

CREATE TABLE Users (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[job] [varchar](50) NULL
)
```

## Inicie o servidor

```bash
node index.js
```
