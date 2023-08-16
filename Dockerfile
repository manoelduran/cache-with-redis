FROM node:18-alpine as common-build-stage

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 3006

CMD ["yarn", "run", "start"]