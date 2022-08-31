# Projeto API Brasileirão

- [x] Entidades

  - [x] Entidade Time
  - [x] Entidade Tabela
  - [x] Entidade Torneio
  - [x] Entidade Rodada
  - [x] Entidade Jogo
  - [ ] Entidasde Usuário

- [x] Models

  - [x] Model Time
  - [x] Model Tabela
  - [x] Model Torneio
  - [x] Model Rodada
  - [ ] Model Jogo (acho que não farei)

- [ ] TIMES

  - [x] [GET] Leitura de todas os times
  - [x] [GET] Leitura de times individuais (:ID)
  - [ ] [GET] Leitura de times individuais (:name\*/ :sigla\*)
  - [x] [POST] Criação de times
  - [x] [PUT] Edição de times por ID
  - [x] [DELETE] Exclusão de times por ID
  - [x] Persistência de dados no MongoDB [Atlas](https://account.mongodb.com/account/login).

- Extras:

  - [x] Times com classificações de SPI, OFFENSIVE and DEFENSIVE;
  - [x] Criar gerenciador de erros;
  - [ ] [DELETE] Deletar time deve remover respectiva tabela?

---

- [x] TORNEIOS

  - [x] [POST] Criar Torneio
  - [ ] [GET] Buscar Todos Torneios
  - [x] [GET] Buscar Torneios individual (:ID)
  - [x] [GET] Buscar Tabela de Um Torneio (:ID) ou (:Name)
  - [ ] [GET] Buscar Todas as Rodadas de um Torneio (:ID)
  - [ ] [GET] Buscar por uma Rodada (:tornament-ID, :round-number)
  - [ ] [GET] Buscar por um Jogo (:Number)
  - [ ] [POST] Criar Rodada
  - [ ] [POST] Criar Jogo inserindo em Rodada (:Number) de um Torneio (:ID)
  - [ ] [POST] Criar Todos os respectivos jogos de uma Rodada (:Number)
  - [ ] Calcular e atualizar todas as tabelas de um Torneio (:ID) ou (:Name)

- Extras:

  - [ ] Rodadas criadas com a criação do Torneio (parâmetro de nº de times)
  - [ ] Documentação Swagger
  - [ ] Calcular previsões do resultado de uma partida
  - [ ] Calcular previsões do resultado de um rodada
  - [ ] Calcular previsões do resultado de um torneio

- [ ] Usuários

  - [ ] [POST] Criar Usuários
  - [ ] [GET] Buscar Todos os usuários
  - [ ] [POST] Login de usuários
  - [ ] [Get] Buscar Times por nome

- [ ] Extras
  - [ ] Autenticação JWT
  - [ ] Níveis de Usuários
  - [ ] Deploy

## Entidades

### Users

- name: `String`,
- username: `String`,
- email: `String`,
- password: `String`,
- photo: `String`,

### Teams

- name: `String`,
- shorthand: `String`,
- badge: `String`,
- ground: `String`,
- ratings: {
  spi: `Number`,
  off: `Number`,
  def: `Number`,
  }

### Tornaments

- name: `String`,
- format: `String`,
- logo: `String`,
- description: `String`,
- status: `String`,
- startDate: `Date`,
- endDate: `Date`,
- createAt: `Date`,
- updateAt: `Date`,

### Round

- tournament: `String`,
- number: `Number`,
- logo: `String`,
- status: `String`,
- startDate: `Date`,
- endDate: `Date`,
- matches: [...Match: `Object` ],

### Match

- home: `String`,
- away: `String`,
- date: `Date`,
- hour: `Number`,
- stadium: `String`,
- home_score: `String`,
- away_score: `String`,
- home_penalties: `String`,
- away_penalties: `String`,
- home_yellow_cards: `String`,
- away_yellow_cards: `String`,
- home_red_cards: `String`,
- away_red_cards: `String`,

## Rotas

---

Linguagem: JavaScript  
Tecnologias: NodeJs, Express e MongoDB  
Carga horária: 80 horas
