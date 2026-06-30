# Angular Exercise

Starter Angular 20 project for a live 45-minute pair-coding interview.
The scaffolding is complete and runnable — exercise features are intentionally left unimplemented for the candidate to build live.

## Prerequisites

- **Node 24.14.0** (see `.nvmrc`; use `nvm use` if you have nvm)
- npm (bundled with Node)

## Getting started

```bash
npm install   # install dependencies
npm start     # serve at http://localhost:4200
npm test      # run tests once (non-watch)
npm run lint  # lint TypeScript and templates
```

### GitHub Codespaces

Open this repo in Codespaces — `npm install` runs automatically on container creation and port 4200 is forwarded. Just run `npm start` once the terminal is ready.

## Project structure

```
src/
  app/
    app.component.ts      # Root component — standalone, OnPush, toolbar + tabs
    app.component.html    # MatToolbar + MatTabGroup shell
    app.component.scss    # Component styles
    app.config.ts         # Application providers (animations, HTTP, router)
    message-api.ts        # Stub async API — returns a message ID after ~600 ms
    services/             # Empty — candidate adds NotificationService here live
  index.html
  main.ts
  styles.scss
```

The interviewer will explain the exercise task verbally at the start of the session.
