# Projeto Next.js 12 com Autenticação GitHub e Prisma

Este é um projeto Next.js 12 que demonstra a autenticação com o provedor GitHub usando NextAuth.js e armazena dados e sessões no Prisma com o serviço MySQL da PlanetScale.

## Visão Geral

Este projeto inclui as seguintes funcionalidades:

- Autenticação de usuário com o provedor GitHub usando NextAuth.js.
- Armazenamento de dados de usuário em um banco de dados MySQL hospedado no serviço PlanetScale.
- Uso de Prisma como ORM para interagir com o banco de dados.
- Tela de login simples.

## Tecnologias Utilizadas

- [Next.js 12](https://nextjs.org/): Framework de React para renderização do lado do servidor.
- [NextAuth.js](https://next-auth.js.org/): Biblioteca de autenticação para Next.js.
- [Prisma](https://www.prisma.io/): ORM (Object-Relational Mapping) para interagir com o banco de dados.
- [PlanetScale](https://www.planetscale.com/): Serviço de hospedagem de banco de dados MySQL escalável.

## Instalação e Configuração

Certifique-se de ter o Node.js e o MySQL instalados na sua máquina. Em seguida, siga os passos abaixo:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/next-auth.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis de ambiente necessárias:

   ```env
   GITHUB_ID=seu-client-id-do-GitHub
   GITHUB_SECRET=seu-client-secret-do-GitHub
   NEXTAUTH_SECRET=seu-segredo-do-NextAuth
   DATABASE_URL=sua-url-do-banco-de-dados-PlanetScale
   ```

5. Configure o arquivo `prisma/schema.prisma` para definir o modelo de dados e a conexão com o banco de dados MySQL da PlanetScale.

6. Execute as migrações do Prisma para criar as tabelas do banco de dados:

   ```shell
   npx prisma db push
   ```

7. Inicie o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```

8. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Middleware de Acesso

Este projeto inclui um middleware de acesso que pode ser configurado em rotas específicas para verificar se o usuário está autenticado antes de permitir o acesso. Você pode adicionar o middleware nas rotas conforme necessário.

Exemplo de uso:

```javascript
import { useSession } from 'next-auth/react'

function MinhaRotaProtegida() {
  const { data: session } = useSession()

  if (!session) {
    // Redirecionar ou mostrar uma mensagem de erro
  }

  // Renderizar o conteúdo da rota protegida
}
```

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

## Licença

Este projeto está sob a licença ISC.

---

Agradecemos por visitar este repositório e por seu interesse no projeto Next.js 12 com autenticação GitHub e Prisma com PlanetScale. Esperamos que este projeto seja útil e educativo para outros desenvolvedores interessados em criar aplicativos autenticados com NextAuth.js e armazenamento de dados no Prisma com MySQL.
