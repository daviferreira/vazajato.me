# Linha do tempo da Vaza Jato

**[vazajato.me](https://www.vazajato.me)** reúne, em ordem cronológica, as
reportagens da #VazaJato: as mensagens trocadas no Telegram entre procuradores
da Lava Jato e o então juiz Sergio Moro, publicadas a partir de junho de 2019
pelo The Intercept Brasil e por veículos parceiros.

São 267 reportagens de 20 veículos, de junho de 2019 a março de 2024. O site é
um índice: cada item leva à matéria original, no site de quem a publicou.

## Onde encontrar

- **[Linha do tempo](https://www.vazajato.me)**: todas as reportagens, mês a
  mês, em galeria, lista ou tabela, com busca por título, veículo ou tópico.
- **Por veículo**: `/veiculos/<veículo>`, por exemplo
  [The Intercept Brasil](https://www.vazajato.me/veiculos/intercept) ou
  [Folha de S.Paulo](https://www.vazajato.me/veiculos/folha).
- **Por tópico**: `/topicos/<tópico>`, por exemplo
  [Triplex](https://www.vazajato.me/topicos/triplex).
- **Busca**: dá para compartilhar uma busca pelo endereço, como
  [vazajato.me/?q=moro](https://www.vazajato.me/?q=moro).
- **Newsletters do Intercept** reproduzidas no site:
  - [Uma mão lava a outra (a jato)](https://www.vazajato.me/newsletter-intercept-2019-09-21)
  - [Deltan que ama o FBI que odeia a PGR](https://www.vazajato.me/deltan-ama-fbi)

## Documentos e dados

- **[Arquivos com os diálogos](https://www.dropbox.com/sh/a2wijlhwezq8yyo/AABTEZI4XWfjPEmHeKT7bbcYa?dl=0)**
  (Dropbox): os PDFs com as conversas.
- **[Planilha de dados](https://docs.google.com/spreadsheets/d/1y9bixq_sZ5TOwwqfoagRKX4zCm1Ka6hXbch9qN6OtKI)**
  (Google Sheets): os dados das reportagens.
- **No repositório**:
  - [`src/data/articles.json`](src/data/articles.json): as reportagens.
  - [`src/data/sources.json`](src/data/sources.json): os veículos (nome,
    site e cor).

Cada reportagem tem este formato:

```json
{
  "articleId": "folha3",
  "title": "Lava Jato desconfiou de empreiteiro pivô da prisão de Lula, indicam mensagens",
  "url": "https://www1.folha.uol.com.br/poder/2019/06/...",
  "publishDate": "2019-06-30",
  "source": "folha",
  "topics": ["Lula", "Léo Pinheiro", "OAS", "Triplex"]
}
```

`source` é uma chave de `sources.json`, e a capa fica em
`src/images/articles/<articleId>.jpg`.

## Desenvolvimento

Site estático feito com [Astro](https://astro.build) e publicado na
[Netlify](https://www.netlify.com). A versão do Node está em `.nvmrc`.

```sh
pnpm install
pnpm start    # http://localhost:4000
pnpm build    # gera o site em dist/
pnpm test     # prettier + build
```

Para corrigir uma reportagem ou adicionar um tópico, edite
`src/data/articles.json` e rode `pnpm test`. Os tópicos e as páginas de
veículos e tópicos são gerados a partir dos dados.

## Licença

[MIT](LICENSE). As reportagens, imagens e diálogos pertencem aos seus veículos
e autores.
