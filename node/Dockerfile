FROM node:15 as stage1

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]