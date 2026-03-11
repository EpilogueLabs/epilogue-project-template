# Epilogue Project Template

[![CI](https://github.com/EpilogueLabs/epilogue-project-template/actions/workflows/ci.yml/badge.svg)](https://github.com/EpilogueLabs/epilogue-project-template/actions/workflows/ci.yml)

Template for all Epilogue projects. Pre-wired with:

- **CI/CD** via GitHub Actions (unit tests + type check on every PR)
- **Visual QA** via Playwright (10 configurable flows, AI vision review)
- **Forge/Sentinel pipeline** (ready-for-forge label triggers Forge, PRs auto-trigger Sentinel)
- **Issue templates** (feature, bug, visual)
- **PR template** with Forge checklist
- **Branch protection** ready (configure in repo settings)

## Spinning up a new project

1. Use this template: `gh repo create my-project --template MikeShoss-Ultron/epilogue-project-template`
2. Add repo secrets: `DATABASE_URL`, `OPENCLAW_WEBHOOK_URL`, `OPENCLAW_WEBHOOK_SECRET`
3. Update `playwright.config.ts`: set `BASE_URL` and `DEV_COMMAND` for your project
4. Write your visual QA flows in `tests/visual/`
5. Run `npx playwright test --update-snapshots` to generate baselines
6. Enable branch protection on `main` (require PR, require CI passing)
7. Add to `workspace-main/projects/{name}/context.md`

## Agent workflow

- Issues labeled `ready-for-forge` → Forge picks up automatically
- PRs opened → Sentinel QA triggered automatically  
- Nightly → baseline visual regression check

## GitHub Secrets required

| Secret | Description |
|--------|-------------|
| `DATABASE_URL` | Postgres connection string for test environment |
| `OPENCLAW_WEBHOOK_URL` | OpenClaw webhook endpoint for agent notifications |
| `OPENCLAW_WEBHOOK_SECRET` | Bearer token for webhook auth |
