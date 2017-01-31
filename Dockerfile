FROM node:wheezy

ADD . /usr/src/kabuto

WORKDIR /usr/src/kabuto

RUN npm install express -g

RUN npm install express-generator -g

RUN npm install -g sequelize-cli

EXPOSE 4000

CMD ['npm','start']

