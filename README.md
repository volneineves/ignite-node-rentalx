# Ignite Nodejs: Rentx API

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

### Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.


**RN** 
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros

**RF** 
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo - nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo - nome da marca
- Deve ser possível listar todos os carros disponíveis pelo - nome do carro

**RN**
- O usuário não precisar estar logado no sistema.


### Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro


**RN**
- Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


### Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


### Aluguel de carro

**RF**
- Deve ser possível cadastrar um aluguel


**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
- O usuário deve estar logado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível


### Devolução de carro 

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel. 
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


### Listagem de Alugueis para usuário

**RF**
- Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
- O usuário deve estar logado na aplicação


### Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas

<!-- ## Rotas da aplicação

### GET `/categories`

A rota deve retornar uma lista contendo todos as categorias cadastradas.

### POST `/categories`

A rota deve receber `name` e `description` pelo corpo da requisição e retornar um status `201`.

### POST `/categories/import`

A rota deve receber `file` em binário pelo corpo da requisição contendo linhas com `name` e `description` para salvar mais de um categoria. Deverá ser retornado um status `201`.

### POST `/specifications`

A rota deve receber `name` e `description` pelo corpo da requisição e retornar um status `201`.

## :memo: Licença -->

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) para mais detalhes.

---

Feito por <a href="https://www.linkedin.com/in/volnei-neves">Volnei Neves</a> :wave:
