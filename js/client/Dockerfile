FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .
RUN npm prune --production

EXPOSE 3000

CMD ["npm", "start"]
