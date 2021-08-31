FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g rimraf
RUN npm install -g typescript
RUN npm install
COPY . .

EXPOSE 3000