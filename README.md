# Desafio NodeJS

## Dependências

- node v8 (recomendo instalar [via](https://github.com/creationix/nvm))
  - [yarn](https://yarnpkg.com)

## Instalar dependências e iniciar servidor

```bash
yarn # instalar dependências
yarn start # iniciar servidor
```

## Instruções

Faça um fork do repositório e abra um pull request com seu desafio.

## Objetivos do desafio

Você é livre pra instalar quaiquer libs que quiser.

1. Modifique o arquivo routes/fat.js pra que o comando abaixo retorne o fatorial de um número qualquer `n`
```bash
curl -X POST http://localhost:7777/calcs/fat -H 'Content-Type: application/json' -d '{"n": 1}'

```
2. Implemente a rota que responde com o valor fibonacci de um número. Como a chamada abaixo
```bash
curl -X POST http://localhost:7777/calcs/fib -H 'Content-Type: application/json' -d '{"n": 1}'

```
3. Faça log da URL de todas as requisições que chegam ao servidor automaticamente
4. Implemente rotas de CRUD de uma entidade livro, com os atributos `{id, nome}`. A persistência pode ser em memória, mas usar MongoDB, é um bônus.
5. Atualize a seção [resultados](#resultados) com instruções de como testar o passo 4
6. Bônus: use docker

## Resultados

Passo 5: Atualize a seção resultados com instruções de como testar o passo 4.

Estou usando dois softwares para melhor visualização e interatividade:
	
	- o robomongo(robo3t): para visualizar o banco de dados.
	- o insomnia: visualizar e operar de forma mais interativa as operações CRUD.


1 - Realizar a conexão com o servidor mongodb. 

Existem diferentes comandos dependendo do seu sistema operacional, e também é possivel usar o mongoDB pelo docker

		pelo mongodb(ubuntu): sudo service mongod start

		pelo docker: docker pull mongo
			docker run --name (nome que voce escolhe) -p 27017:27017 -d mongo

2 - 	Os seguintes comandos devem ser rodados dentro da pasta onde se encontra o projeto.

	Rodar npm run dev (estou usando uma biblioteca chamada nodemon que carrega o arquivo server.js toda vez que eu salvo).
    	Ou de forma mais simples é possível usar o yarn.

	yarn start

3 - 	Eu adicionei uma função extra que se chama index. Ele mostra (lista) os produtos (no caso, os livros) que temos no banco de dados.
	Adicionei a opção de listar por página (pelo método get).

		localhost:3001/api/products?page=2

4 - 	Create:

	Estou utilizando o formato .json para criar novos produtos no banco de dados. E o Insomnia para escrever no corpo da requisição (achei mais intuitivo).

		{
			"id":"2020"
			"nome": meridiano de sangue;
		}
5 - Read:
	
	
	Para utilizar a operação Read é necessário passar o ID do livro

		localhost:3001/api/products/ID

6 - Update:

	Essa operação usa o ID da operação 'Read' e atualiza com o conteúdo proveniente da operação 'Create'. Precisa do ID do livro que você quer modificar(atualizar).

7 - Destroy:

	Destrói um produto pelo ID.

		localhost:3001/api/products/id do produto que voce quer apagar



