# API-Brasileirão
Back-end CRUD memória (Read All e Read By Id)

* [GET] Leitura de todas os times;
* [GET] Leitura da tabela contendo todos os times ordenada pela pontuação;
* [GET] Leitura de times individuais (por ID).
* [POST] Criação de times;
* [PUT] Edição de time por ID;
* [DELETE] Exclusão de time por ID.
* Lista em memória;
* CORS - Liberado;
* Formatação do código utilizando o Prettier.

---
## Configurações do Thunder Client

#### GET_ALL `GET`: `http://localhost:3000/brasileirao/find_times`

#### GET_BY_ID `GET`: `http://localhost:3000/brasileirao/find_time/{id}`

#### GET_TABELA `GET`: `http://localhost:3000/brasileirao/find_tabela`

#### CREATE `POST`: `http://localhost:3000/brasileirao/create`
`Json` para `POST`
```json
{
    "time": {
      "nome_popular": "Teste FC",
      "sigla": "TFC",
      "escudo": "Escudo do TESTE FC.png"
    },
    "vitorias": 10,
    "empates": 3,
    "derrotas": 7,
    "gols_pro": 30,
    "gols_contra": 19
}
```

#### PUT `PUT`: `http://localhost:3000/brasileirao/update/{id}`
`Json` para `PUT`
```json
{
    "time": {
      "nome_popular": "Teste FC",
      "sigla": "TFC",
      "escudo": "Escudo do TESTE FC.png"
    },
    "vitorias": 12,
    "empates": 5,
    "derrotas": 4,
    "gols_pro": 33,
    "gols_contra": 16
}
```

#### DELETE_BY_ID `DELETE`: `http://localhost:3000/brasileirao/delete/{id}`

---

Linguagem: JavaScript  
Tecnologias: NodeJs e Express  
Carga horária: 20 horas  

---
