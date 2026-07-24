# Danrley Tecnologia

Site institucional para apresentar serviços de desenvolvimento, automação, infraestrutura e suporte técnico, com chamadas diretas para orçamento pelo WhatsApp.

## Tecnologias

React 19, Vite, TypeScript em modo strict, CSS puro, Lucide React, Node.js 24 e pnpm.

## Executar localmente

Requisitos: Node.js 24 e pnpm.

```bash
corepack enable
pnpm install
pnpm dev
```

O Vite informará o endereço local no terminal.

## Personalizar dados e conteúdo

Edite `src/config/site.ts` para alterar nome, slogan, WhatsApp, e-mail, LinkedIn e localidade. O WhatsApp deve conter apenas código do país, DDD e número, sem espaços ou símbolos.

Os serviços ficam em `src/data/services.ts`. As soluções que podem ser desenvolvidas e as perguntas frequentes ficam em `src/data/content.ts`. O título, descrição, canonical e Open Graph ficam em `index.html`.

## Verificar e gerar o build

```bash
pnpm typecheck
pnpm build
pnpm preview
```

O resultado será criado em `dist/`. Durante o GitHub Actions, o Vite identifica automaticamente o nome do repositório pela variável `GITHUB_REPOSITORY` e configura o `base` correto.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o projeto para a branch `main`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` fará typecheck, build e publicação a cada push na `main`.

Não é preciso informar manualmente o nome do repositório. Se ele mudar, o próximo build usará o novo nome automaticamente.

## Domínio próprio

No futuro, informe o domínio em **Settings → Pages → Custom domain**, configure os registros DNS indicados pelo GitHub e atualize `canonical` e `og:url` no `index.html`. Para preservar o domínio em cada publicação, adicione também um arquivo `public/CNAME` contendo somente o domínio.

## Licença

Distribuído sob a licença MIT. Consulte `LICENSE`.
