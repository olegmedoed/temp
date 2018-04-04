FROM node:alpine


RUN apk add --no-cache tini

WORKDIR /app

COPY ./package.json .
RUN yarn -s
COPY . .

ENTRYPOINT ["/sbin/tini", "--"]
