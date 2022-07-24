# Ignite Nodejs: CHAPTER II, III and IV

![Logo do Markdown](./assets/ignite_node_capa.png)

<h3 align="center">
  Iniciando a API
</h3>

## :computer: Sobre a API

API desenvolvida em Node.js utilizando TypeScript e seguindo os padrões de código e princípios do SOLID. Na pasta SRC do projeto é possível conferir conceitos importantes como casos de uso, repositórios, models e streams do Node.js, bem como a documentação da API com o Swagger.

### Cadastro de carro

##### Requisitos funcionais

- Deve ser possível cadastrar um novo carro.

##### Regras de Negócio

- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado com disponibilidade por padrão.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros

##### Requisitos funcionais

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

##### Regras de Negócio

- O usuário não precisa estar logado no sistema.

### Cadastro de Especificação no carro

##### Requisitos funcionais

- Deve ser possível cadastrar uma especificação para um carro.

##### Regras de Negócio

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastarr uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Cadastro de imagens do carro

##### Requisitos funcionais

- Deve ser possível cadastrar a imagem do carro.

##### Requisitos não funcionais

- Utilizar o multer para o upload dos arquivos.

##### Regras de Negócio

- O Usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Aluguel de carro

##### Requisitos funcionais

- Deve ser possível cadastrar um aluguel.

##### Regras de Negócio

- O Aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

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
