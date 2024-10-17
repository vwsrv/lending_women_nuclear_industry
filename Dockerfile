# Устанавливаем базовый образ
FROM node:20-alpine AS base

FROM base AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем зависимости только при необходимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходный код и выполняем команды
COPY . .

# Отключаем телеметрию Next.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Сборка приложения
RUN npm run build

# Производственный этап
FROM base AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Отключаем телеметрию Next.js
ENV NEXT_TELEMETRY_DISABLED=1

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем необходимые файлы из предыдущего шага
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Открываем порт
EXPOSE 3000

ENV PORT=3000

# Запускаем приложение
CMD node server.js
