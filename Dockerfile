FROM mhart/alpine-node:11.12.0

WORKDIR /app

COPY package*.json ./

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]
