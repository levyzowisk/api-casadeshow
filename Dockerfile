FROM node:alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "start" ]