# Projeto API Brasileirão

- [x] Entidades

  - [x] Entidade Time
  - [x] Entidade Tabela
  - [x] Entidade Torneio
  - [x] Entidade Rodada
  - [x] Entidade Jogo

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



---

Linguagem: JavaScript  
Tecnologias: NodeJs, Express e MongoDB  
Carga horária: 80 horas
