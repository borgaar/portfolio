FROM node:23-alpine3.20 AS base

ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

RUN npm install -g pnpm


FROM base AS builder

RUN addgroup --system --gid 1001 builder && \
    adduser --system --uid 1001 builder

USER builder

WORKDIR /build

COPY . .

RUN pnpm i --frozen-lockfile

RUN pnpm build

FROM base AS runner

RUN addgroup --system --gid 1001 runner && \
    adduser --system --uid 1001 runner

USER runner

WORKDIR /app

COPY --from=builder --chown=1001:1001 /build/node_modules node_modules
COPY --from=builder --chown=1001:1001 /build/.next .next
COPY --from=builder --chown=1001:1001 /build/public public
COPY --from=builder --chown=1001:1001 /build/package.json .
COPY --from=builder --chown=1001:1001 /build/next.config.ts .

EXPOSE 3000

CMD ["pnpm", "start"]
