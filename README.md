# api-casadeshow
Trabalho final da turma FS44 - Digital College


 # 🚀 API Node.js - Estrutura de Pastas

Este projeto segue uma arquitetura em **camadas** para manter o código organizado, escalável e de fácil manutenção.

---

## 📂 Estrutura de Pastas

```bash
src/
  config/                # Configurações da aplicação
    database.ts          # Conexão e setup do banco de dados
    env.ts               # Variáveis de ambiente centralizadas

  routes/                # Definição das rotas (endpoints)
    user.routes.ts
    auth.routes.ts

  controllers/           # Controladores: recebem requisições das rotas
    user.controller.ts
    auth.controller.ts

  services/              # Regras de negócio
    user.service.ts
    auth.service.ts

  repositories/          # Acesso ao banco de dados
    user.repository.ts

  middleware/            # Middlewares globais ou específicos
    auth.middleware.ts   # Verificação de autenticação
    error.middleware.ts  # Tratamento de erros

  validators/            # Validação de dados de entrada
    user.validator.ts    # Ex.: validação de criação/edição de usuário

  utils/                 # Funções utilitárias/auxiliares
    logger.ts            # Log centralizado
    hashPassword.ts      # Função para hash de senhas

  app.ts                 # Configuração principal do Express
  server.ts              # Ponto de entrada da aplicação

```
## Banco de dados
```mermaid
classDiagram
    class USUARIOS {
        int id_usuario PK
        string nome
        string email
        string senha
        enum tipo_usuario "ADMIN | CLIENTE"
        datetime data_cadastro
    }

    class EVENTOS {
        int id_evento PK
        string nome_evento
        text descricao
        date data_evento
        time horario_inicio
        time horario_fim
        string local
        int capacidade_total
        enum status "RASCUNHO | PUBLICADO | FINALIZADO | CANCELADO"
        int id_admin FK
    }

    class SETORES {
        int id_setor PK
        string nome_setor
        int capacidade
        decimal preco
        decimal taxa_servico
        int id_evento FK
    }

    class INGRESSOS {
        int id_ingresso PK
        int id_usuario FK
        int id_setor FK
        int id_evento FK
        string codigo_qr
        enum status "DISPONIVEL | VENDIDO | CHECKIN"
    }

    class VENDAS {
        int id_venda PK
        int id_ingresso FK
        int id_evento FK
        datetime data_venda
        decimal valor_total
        enum metodo_pagamento "CARTAO | PIX | BOLETO"
        enum status_pagamento "PENDENTE | PAGO | CANCELADO"
    }

    %% ======================
    %% RELACIONAMENTOS
    %% ======================

    USUARIOS <|--o EVENTOS 
    EVENTOS <|--o SETORES 
    SETORES <|--o INGRESSOS 
    USUARIOS <|--o INGRESSOS 
    EVENTOS <|--o VENDAS 
    INGRESSOS <|--o VENDAS
```
