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

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app
USER nextjs

COPY --from=builder /build/node_modules node_modules
COPY --from=builder /build/.next .next
COPY --from=builder /build/public public
COPY --from=builder /build/package.json .

EXPOSE 3000

CMD ["pnpm", "start"]
