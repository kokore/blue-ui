FROM node:16-alpine AS dependencies
WORKDIR /app
COPY package.json yarn.lock ./

FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --forzen-lockfile
RUN yarn build

FROM node:16-alpine AS production
RUN mkdir -p /usr/src/blueui
WORKDIR /usr/src/blueui
COPY --from=builder /app /usr/src/blueui
CMD ["yarn", "start"]