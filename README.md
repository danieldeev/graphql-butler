# graphql-butler
> Cliente __GraphQL__ desenvolvido em NodeJS para facilitar o desenvolvimento de projetos JavaScript que usam __GraphQL__ como API. A declaração de tipo __TypeScript__ está dentro do pacote para projetos em __TypeScript__.

## Instalação:

```bash

npm install graphql-butler

```

ou

```bash

yarn add graphql-butler

```

## Introdução

Antes de começar a usar a ferramenta no seu projeto, veja quais são os principais métodos e qual sua função dentro do projeto:

| __Método__          | __Função__                                                |
|---------------------|-----------------------------------------------------------|
| Query               | Responsável por realizar consultas de dados na API.       |
| Mutation            | Envia requisições capazes criar, editar e excluir dados.  |
| Subscription        | Consulta de dados real-time.                              |

Todas as requisições realizadas na ferramenta são obrigatóriamente do tipo __POST__ para atender um dos requisitos básicos do GraphQL. Mas você não precisa se preocupar com métodos, requisição e resposta, pois a ferramenta cuidará de toda a parte burocrática para você.

Após adicionar o pacote ao seu projeto, você poderá usar métodos Query, Mutation e Subscription da seguinte maneira:

__JavaScript:__

```js

const { Query, Mutation, Subscription } = require('graphql-butler').default;

```

__TypeScript:__

```js

import { Query, Mutation, Subscription } from 'graphql-butler';

```

### Endpoint 

Você precisará instanciar uma variável obrigatória para deterinar qual será o endpoint (__API__) para onde serão enviadas as requisições GraphQL:

```js

const api = "http://0.0.0.0:3000/graphql";

```

### Headers (opctional)

Caso necessário, você também poderá instanciar os __headers__ de sua preferência que será enviado dentro do corpo da requisição GraphQL, um exemplo:

```js

const headers = {
	"Content-type": "application/json; charset=utf-8"
}

```

### Modelo de consulta

Para cada método usado você não precisará instanciar o tipo de consulta dentro da sua requisição Query, Mutation ou Subscription, por exemplo:

Supondo que eu queira fazer uma consulta de um livro e quero que me retorne o nome do livro e o autor que seria da seguinte maneira:

```js

query{
	book{
		title,
		author
	}
}

```

Usando o GraphQL Butler você não precisará incluir o tipo __"query{...}"__ dentro do corpo da requisição, inclua apenas o que vem depois, isso também serve para os demais métodos. Vamos ver um exemplo prático de como deve ser usado:


```js

const payload = `
	book(id: 1){
		title,
		author,
		status
	}
`

```

## Documentação

Legal, agora é hora de colocar a mão no código e praticar.

### Query

Examplo prático de consulta de livro usando o método __Query__:

```js

const { Query } = require('graphql-butler').default;

const api = "http://0.0.0.0:3000/graphql";
const headers = {
	"Content-type": "application/json; charset=utf-8"
}

const GraphQL = new Query(api,headers);

const payload = `
	book{
		title,
		author,
	}
`

GraphQL.send(payload).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err);
})

```

Em outro modelo, consultaremos dados passando uma __id__ para identificar o livro na qual queremos buscar os dados:

```js

const { Query } = require('graphql-butler').default;

const api = "http://0.0.0.0:3000/graphql";
const headers = {
	"Content-type": "application/json; charset=utf-8"
}

const GraphQL = new Query(api,headers);

const payload = `
	book(id: 1){
		title,
		author,
	}
`

GraphQL.send(payload).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err);
})

```

### Mutation

Agora vamos criar adicionar um livro enviando uma requisição que retornará o __id__ do livro criado:

```js

const { Mutation } = require('graphql-butler').default;

const api = "http://0.0.0.0:3000/graphql";
const headers = {
	"Content-type": "application/json; charset=utf-8"
}

const GraphQL = new Mutation(api,headers);

const payload = `
	book(
		title: "Teste",
		author: "Desconhecido"

	){
		id
	}
`

GraphQL.send(payload).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err);
})

```

## Subscription

Abrindo conexão real-time com subscription passando um __id__:

```js

const { Subscription } = require('graphql-butler').default;

const api = "http://0.0.0.0:3000/graphql";
const headers = {
	"Content-type": "application/json; charset=utf-8"
}

const GraphQL = new Subscription(api,headers);

const payload = `
	book(
		title: "Teste",
		author: "Desconhecido"

	){
		id
	}
`

GraphQL.send(payload).then((data) => {
	console.log(data);
}).catch((err) => {
	console.log(err);
})

```

# Licença

```
MIT License

Copyright (c) 2020 Daniel Pereira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
