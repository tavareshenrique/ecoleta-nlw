<h1 align="center">
  <img src="../assets/logo.svg" alt="Logo" />
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/ecoleta-nlw?color=7D40E7">
  <img alt="Made by Henrique Tavares" src="https://img.shields.io/badge/made%20by-Henrique Tavares-%20?color=7D40E7">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/tavareshenrique/ecoleta-nlw?color=7D40E7">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/ecoleta-nlw?color=7D40E7">
  <img alt="GitHub license" src="https://img.shields.io/github/license/tavareshenrique/ecoleta-nlw?color=7D40E7">
</p>

<p align="center">
  <a href="#gear-configurando">⚙ Configurando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-conteúdo">ℹ️ Conteúdo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">🚀 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-autores">💻 Autores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">📝 Licença</a>
</p>

<div align="center"><a href="https://insomnia.rest/run/?label=%5BRocketseat%5D%20NLW%20%2301&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftavareshenrique%2Fecoleta-nlw%2Fmaster%2Fback-end%2Finsomnia%2FInsomnia_2020-06-08.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</div>

<p align="center">
  <strong>Back-End</strong> foi construído utilizando <strong>NodeJS</strong> com <strong>TypeScript</strong>.
</p>

---

# :gear: Configurando

```shell
# 1 - Clone o projeto
git clone git@github.com:tavareshenrique/ecoleta-nlw.git

# 2- Instale as dependencias do projeto
yarn

# 3 - Crie um banco no PostgreSQL com o nome:
nlw

# 4 - Rode as migrations
yarn knex:migrate

# 5- Rode o comando seed para adicionar os items na tabela de items.
yarn knex:seed

# 6 - Inicie o projeto
yarn dev:server
```

---

---

# :information_source: Conteúdo

- [Items](#items)
  - [List](#list-items)
- [Points](#points)
  - [List](#list-points)
  - [Show](#show-points)
  - [Create](#create-points)

---

# Items

## **List** Items

Listar Todos os Itens.

* **URL**

  `/items`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

    **Optional:**

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": 1,
        "title": "Lâmpadas",
        "image_url": "http://192.168.9.101:3333/uploads/lampadas.svg"
      },
      {
        "id": 2,
        "title": "Pilhas e Baterias",
        "image_url": "http://192.168.9.101:3333/uploads/baterias.svg"
      },
      {
        "id": 3,
        "title": "Papéis e Papelão",
        "image_url": "http://192.168.9.101:3333/uploads/papeis-papelao.svg"
      },
      {
        "id": 4,
        "title": "Resíduos Eeltrônicos",
        "image_url": "http://192.168.9.101:3333/uploads/eletronicos.svg"
      },
      {
        "id": 5,
        "title": "Resíduos Orgânicos",
        "image_url": "http://192.168.9.101:3333/uploads/organicos.svg"
      },
      {
        "id": 6,
        "title": "Óleo de Cozinha",
        "image_url": "http://192.168.9.101:3333/uploads/oleo.svg"
      }
    ]
    ```

---

# Points

## **List** Points

Listar todos pontos de coleta.

* **URL**

  `/points`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

   **Optional:**

* **Data Params**

  None

* **Query Params**

  **Required:**
  - city - [string]
    - Ex.: Três Rios
  - uf - [string]
    - Ex.: RJ
  - items - [string]
    - Ex.: 1, 2, 3

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": 1,
        "image": "market.jpg",
        "name": "Mercadinho",
        "email": "contato@mercadinho.com",
        "whatsapp": "5524988174627",
        "latitude": -22.11542,
        "longitude": -43.200993,
        "city": "Três Rios",
        "uf": "RJ",
        "image_url": "http://192.168.9.101:3333/uploads/market.jpg"
      },
      {
        "id": 3,
        "image": "cb1f43884fa0-unnamed.jpg",
        "name": "Novo Mercado",
        "email": "novo@mercado.com",
        "whatsapp": "5524988174627",
        "latitude": -22.116835,
        "longitude": -43.210777,
        "city": "Três Rios",
        "uf": "RJ",
        "image_url": "http://192.168.9.101:3333/uploads/cb1f43884fa0-unnamed.jpg"
      }
    ]
    ```

---

## **Show** Points

Listar ponto de coleta por id.

* **URL**

  `/points`

* **Method:**

  `SHOW`

* **URL Params**

   **Required:**

      ID do Ponto de Coleta
        - points/{id}

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "point": {
        "id": 3,
        "image": "cb1f43884fa0-unnamed.jpg",
        "name": "Novo Mercado",
        "email": "novo@mercado.com",
        "whatsapp": "5524909091212",
        "latitude": -45.984098,
        "longitude": -21.999086,
        "city": "Três Rios",
        "uf": "RJ",
        "image_url": "http://192.168.9.101:3333/uploads/cb1f43884fa0-unnamed.jpg"
      },
      "items": [
        {
          "title": "Lâmpadas"
        },
        {
          "title": "Pilhas e Baterias"
        },
        {
          "title": "Óleo de Cozinha"
        }
      ]
    }
    ```

---

## **Create** Points

Listar ponto de coleta por id.

* **URL**

  `/points`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    **Multipart Form**

    ```
    name
    email
    whatsapp
    latitude
    longitude
    city
    uf
    items
    image
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": 5,
      "image": "ac5d50fcab67-unnamed.jpg",
      "name": "Novo Mercado",
      "email": "novo@mercado.com",
      "whatsapp": "5524988174627",
      "latitude": -22.1168347,
      "longitude": -43.2107783,
      "city": "Três Rios",
      "uf": "RJ"
    }
    ```

---

# :rocket: Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [Celebrate](https://github.com/arb/celebrate)
- [Cors](https://github.com/expressjs/cors)
- [Multer](https://github.com/expressjs/multer)
- [Postgres](https://www.postgresql.org/)
- [PG](https://github.com/brianc/node-postgres)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/Rocketseat" title="Linkedin">@Rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
  </tr>
</table>

---

# :memo: Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/tavareshenrique/ecoleta-nlw/blob/master/LICENSE.md).
