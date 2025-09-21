# SaaS Boilerplate Planning

## Boilerplate

This project uses the [next-boilerplate](https://github.com/diasjoaovitor/next-boilerplate) as its foundation, which provides a pre-configured setup including:

- TypeScript
- Next App Router
- Jest (for testing)
- Prettier, Husky, lint-staged, commitlint and Eslint (for code formatting, linting, and commit standards)

## Infrastructure

### Plan

The local development infrastructure is set up using Docker (docker-compose.yml), which includes:

- PostgreSQL database

**Prisma ORM** is used as the database client.

All necessary setup and management scripts are located in the `package.json` file. Additionally, a master script (init.sh) handles initializing the server and running tests.

### Development

Install:

```sh
pnpm add -D -E concurrently

pnpm add -D -E prisma
pnpm -E add @prisma/extension-accelerate @prisma/client
```

Execute:

```sh
pnpm exec prisma init
pnpm exec prisma generate
```

Create the `src/infra` directory and add:

- scripts/wait-for-postgres.js
- compose.yml
- controller.ts
- erros.ts
- prisma.ts

Create the `src/app/api/v1` directory and add:

- status/route.ts

Create the `src/server` directory and add:

- models/status.ts

- repositories/status.ts

Create the `src/shared` directory and add:

- types/status.ts

- constants/base-url.ts

Create the `src/tests` directory and add:

- integration/api/v1/status/get.test.ts
- integration/api/v1/status/not-allowed.test.ts

Create an `init.sh` file in the project's root directory. This master script will handle the core setup and launch procedures. To integrate it seamlessly, add the corresponding service commands to the scripts section within the package.json file.

Execute:

```sh
chmod +x ./init.sh

pnpm dev
```

Install:

```sh
pnpm add -D -E cross-fetch
```

Execute:

```sh
pnpm test
```
