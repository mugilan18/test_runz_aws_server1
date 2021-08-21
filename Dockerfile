FROM node:14.17.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN apk update && apk add py3-pip
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]