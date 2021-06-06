FROM node:lts-alpine3.12

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY ./ ./

RUN npm run build


CMD ["node","build/index.js"]