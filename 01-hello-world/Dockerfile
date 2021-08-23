FROM node:14.14.0-alpine

WORKDIR /home/node
USER node

ADD ./package.json ./package.json
ADD ./package-lock.json ./package-lock.json

RUN npm install --production

ADD . .

CMD [ "node", "app.js" ]
