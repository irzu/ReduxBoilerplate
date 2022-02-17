FROM node:16-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./config/ ./*.json /app/
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3005
CMD npx serve -l 3005 -s dist