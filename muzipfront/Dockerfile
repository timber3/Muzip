FROM node:lts-alpine as build-stage

WORKDIR /app

COPY muzipfront/package*.json .

RUN npm install

COPY muzipfront .

RUN npm run build

FROM nginx:stable-alpine as deploy-stage

COPY --from=build-stage ./app /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]