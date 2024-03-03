FROM node:21.6.1 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

FROM nginx:1.25.4
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
