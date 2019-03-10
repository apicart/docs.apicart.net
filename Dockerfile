FROM nginx:1.15-alpine

RUN rm -rf /var/lib/nginx/html/*

RUN apk add yarn
