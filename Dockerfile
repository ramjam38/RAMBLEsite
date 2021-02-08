ARG NODE_VERSION
ARG NODE_ENV=development
FROM node:${NODE_VERSION} as install
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:${NODE_VERSION}-alipine as prod
ENV NODE_ENV=production
WORKDIR /usr/src/app
USER node
COPY --from=install --chown=node:node /usr/src/app/node_modules .
COPY . .
CMD ["npm", "run", "start"]
EXPOSE 8080
