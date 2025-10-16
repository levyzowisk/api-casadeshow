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
    class event {
        string id PK
        string name
        DateTime date_start
        DateTime date_end
        int capacity
        string description
        event_status status
        bool is_visible
    }

    class sector {
        string id PK
        string name
        string description
        Decimal price
        int capacity
        Decimal service_charge
        string event_id FK
    }

    class user {
        string id PK
        string name
        string email
        string password
        string telephone
        type_user type_user
    }

    class ticket {
        string id PK
        string code_qr
        string sale_id FK
        string sector_id FK
        status_ticket status
    }

    class artist {
        string id PK
        string name
        string description
        string contact
    }

    class coupons {
        string id PK
        string code
        type_coupons type
        Decimal price
        DateTime expiration_date
        int usage_limit
    }

    class sale {
        string id PK
        string user_id FK
        string event_id FK
        string coupon_id FK
        DateTime sale_date
        Decimal price_total
        payment_method payment_method
        status_payment status_payment
    }

    class event_artist {
        string event_id FK
        string artist_id FK
    }

   
    event "1" --* "many" sector
    event "1" --* "many" sale
    user "1" --* "many" sale
    sector "1" --* "many" ticket
    sale "1" --* "many" ticket
    sale "many" o-- "1" coupons
    
    event "1" --* "many" event_artist
    artist "1" --* "many" event_artist
```
