# Sistema de Ordens de Serviço

Aplicação web desenvolvida em React para gerenciamento de Ordens de Serviço, permitindo criar, listar, filtrar, atualizar status e excluir ordens.

## Funcionalidades
- Autenticação com rotas protegidas
- Listagem de ordens de serviço
- Criação de nova ordem
- Filtro por status (Aberta, Em andamento, Finalizada)
- Persistência do filtro com localStorage
- Atualização de status da OS
- Exclusão de ordens
- Integração com API mock (JSON Server)

## Tecnologias
- React
- React Router DOM
- Context API
- Hooks customizados
- Axios
- JSON Server
- Vite


## Estrutura do projeto


```
src/
├── components
├── pages
├── hooks
├── contexts
├── routes
└─ services
```

## Como rodar o projeto
```
   - Instalar dependências
  npm install

   - Inicia o front-end
  npm run dev

   - Inicia API FAKE
  npm run server
```