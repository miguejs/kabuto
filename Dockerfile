FROM node:wheezy

ADD . /usr/src/kabuto

WORKDIR /usr/src/kabuto

RUN npm install -g sails 

RUN npm install -g vue-cli

EXPOSE 1337

CMD ["npm", "start"] 

