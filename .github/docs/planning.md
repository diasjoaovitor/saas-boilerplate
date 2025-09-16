# Saas Boilerplate

- [Next Boilerplate](https://github.com/diasjoaovitor/next-boilerplate)
- [Docker](https://www.docker.com/)
- [ShadCn](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/docs/guides/betterauth-nextjs)
- [PostgreSQL](https://www.postgresql.org/)
- [Better Auth](https://www.better-auth.com/)
- [Playwright](https://playwright.dev/docs/intro)

## Componentes globais

- Loader
- Alert
- Dialog
- Modal
- Navbar

## Autorização

Páginas:

- `/sign-in`
- `/sign-up`
- `confirm-email`
- `forgot-password`
- `reset-password`

Fluxo:

- Usuários não autenticados devem ser redirecionados para a página `sign-in` ao tentar acessar uma rota privada
- Usuários devem confirmar o email após realizar o cadastro
- Usuários que realizaram o cadastro, mas não confirmaram o email devem ser redirecionados para a página `confirm-email` ao tentar acessar uma rota privada
- Usuários autenticados devem ser redirecionados para a página `dashboard` ao acessar qualquer rota de autorização

### Sign In

Design baseado nos exemplos:

- [https://ui.shadcn.com/blocks/authentication#login-01](A simple login form)
- [A two column login page with a cover image](https://ui.shadcn.com/blocks/authentication#login-02)
- [A login page with a muted background color](https://ui.shadcn.com/blocks/authentication#login-03)

**Descrição**:

Página divida entre `Logo`, `Formulário` e `Termos de uso`, com todos esses componentes centralizados horizontalmente e verticalmente na tela.

- **Logo**: Composto de ícone e nome (Saas Boilerplate)
- **Formulário**:
  - `Título`: Bem-vindo de volta
  - `Subtítulo`: Entre com seu email e senha
  - `Inputs`: Email; Senha | Esqueceu a senha?
  - `Button`: Sign In
  - `Separator`: Ou entre com
  - `Button`: \<google-icon\> Entrar com o Google
  - Não tem uma conta? Sign Up
- **Termos**: Ao continuar, você aceita nossos Termos de Serviço e nossa Política de Privacidade.

### Sign Up

Design segue o mesmo princípio da página `sign-in`. Mudanças:

- **Formulário**:
  - `Título`: Seja Bem-vindo!
  - `Subtítulo`: Faça seu cadastro com email e senha
  - `Inputs`: Email, Senha, Confirme sua Senha
  - `Button`: Sign Up
  - `Separator`: Ou entre com
  - `Button`: \<google-icon\> Entrar com o Google
  - Já tem uma conta? Sign In
