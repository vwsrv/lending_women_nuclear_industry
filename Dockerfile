# Устанавливаем базовый образ
FROM node:20-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем зависимости только при необходимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходный код и выполняем команды
COPY . .

# Сборка приложения
RUN npm run build

# Производственный этап
FROM node:20-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем необходимые файлы из предыдущего шага
COPY --from=base /app/.next/ ./.next/
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

# Отключаем телеметрию Next.js
RUN npx next telemetry disable

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
