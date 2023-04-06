FROM node:19-alpine3.17

WORKDIR /web

COPY ./services/web ./

RUN npm install

CMD [ "sh", "-c", "npm run dev" ]