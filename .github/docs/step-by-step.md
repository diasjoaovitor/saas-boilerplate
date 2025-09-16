### Inicialização

```sh
pnpm create next-app -e https://github.com/diasjoaovitor/next-boilerplate
```

Commit: e8e257975b5f3e6bd8c557829abf03349536387b

### Setup Base

```sh
pnpm add -D -E concurrently
```

```sh
pnpm add -D -E prisma
pnpm -E add @prisma/extension-accelerate @prisma/client

pnpm exec prisma init
pnpm exec prisma generate
```

```sh
pnpm add -E better-auth

npx @better-auth/cli@latest secret
npx @better-auth/cli generate --config src/infra/auth.ts

mkdir -p "src/app/api/auth/[...all]"
touch "src/app/api/auth/[...all]/route.ts"
```

```sh
chmod +x init.sh
pnpm run dev
```

```sh
pnpm create playwright

✔ Where to put your end-to-end tests? · src/tests/e2e
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) · true

✔ Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo pnpm exec playwright install-deps')? (y/N) · true
```

```sh
pnpm add -D -E async-retry @types/async-retry dotenv cross-fetch

pnpm exec playwright test --ui
```
