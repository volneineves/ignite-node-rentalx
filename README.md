# Ignite Nodejs: CHAPTER II

![Logo do Markdown](./assets/ignite_node_capa.png)

<h3 align="center">
  Iniciando a API
</h3>

## :computer: Sobre a API

API desenvolvida em Node.js utilizando TypeScript e seguindo os padrões de código e princípios do SOLID. Na pasta SRC do projeto é possível conferir conceitos importantes como casos de uso, repositórios, models e streams do Node.js, bem como a documentação da API com o Swagger.

### :keyboard: Instalação e Execução do Projeto

- Respositório do projeto

```
> git clone https://github.com/volneineves/ignite-node-rentalx
```

- Navegue até o diretório principal do projeto

```
> cd ignite-node-rentalx
```

- Instale as dependências com o Yarn

```
yarn install
```

- Execute o projeto

```
yarn dev
```

- Abra o Swagger em seu navegador

```
http://localhost:3333/api-docs/
```

## Rotas da aplicação

### GET `/categories`

A rota deve retornar uma lista contendo todos as categorias cadastradas.

### POST `/categories`

A rota deve receber `name` e `description` pelo corpo da requisição e retornar um status `201`.

### POST `/categories/import`

A rota deve receber `file` em binário pelo corpo da requisição contendo linhas com `name` e `description` para salvar mais de um categoria. Deverá ser retornado um status `201`.

### POST `/specifications`

A rota deve receber `name` e `description` pelo corpo da requisição e retornar um status `201`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) para mais detalhes.

---

Feito por <a href="https://www.linkedin.com/in/volnei-neves">Volnei Neves</a> :wave:
