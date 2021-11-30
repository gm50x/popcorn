FROM node:lts-alpine as Builder
WORKDIR /opt/app
COPY package*.json .
COPY prisma prisma
RUN npm i -g npm
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as Runtime
WORKDIR /opt/app
RUN npm i -g npm
RUN npm i prisma ts-node
COPY package*.json .
COPY prisma prisma
RUN npm ci --only=production
COPY --from=Builder /opt/app/dist ./dist
EXPOSE 3000
CMD ["npm", "run", "start:prod"]