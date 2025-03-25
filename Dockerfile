FROM node:23-alpine3.20 AS base

ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

RUN npm install -g pnpm

FROM base AS builder

WORKDIR /build

RUN addgroup --system --gid 1001 builder && \
    adduser --system --uid 1001 builder && \
    chown -R 1001:1001 /build

USER builder

COPY --chown=1001:1001 . .

RUN pnpm i --frozen-lockfile

RUN pnpm build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 runner && \
    adduser --system --uid 1001 runner && \
    chown -R 1001:1001 /app

USER runner

COPY --from=builder --chown=1001:1001 /build/node_modules node_modules
COPY --from=builder --chown=1001:1001 /build/.next .next
COPY --from=builder --chown=1001:1001 /build/public public
COPY --from=builder --chown=1001:1001 /build/package.json .
COPY --from=builder --chown=1001:1001 /build/next.config.ts .

ENV PORT=8080

EXPOSE 8080

CMD ["pnpm", "start"]
