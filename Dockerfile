FROM node:23-alpine3.20 AS base

ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

RUN npm install -g pnpm

FROM base AS builder

WORKDIR /build

COPY . .

RUN pnpm i --frozen-lockfile

RUN pnpm build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 runner && \
    adduser --system --uid 1001 runner && \
    chown -R runner:runner /app
USER runner

COPY --from=builder --chown=runner:runner /build/node_modules node_modules
COPY --from=builder --chown=runner:runner /build/.next .next
COPY --from=builder --chown=runner:runner /build/public public
COPY --from=builder --chown=runner:runner /build/package.json .

EXPOSE 3000

CMD ["pnpm", "start"]
