FROM node:18.17.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build || echo "no build step"

RUN npm prune --production

FROM gcr.io/distroless/nodejs:18

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./


CMD ["dist/index.js"]
