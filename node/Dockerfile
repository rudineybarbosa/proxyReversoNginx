FROM node:15 as stage1

WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install

COPY . .

USER node

# ENTRYPOINT ["node", "index.js"]