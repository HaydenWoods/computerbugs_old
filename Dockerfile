FROM node:8-alpine

WORKDIR /usr/app

RUN yarn global add serve
COPY package.json /usr/app/
RUN yarn 
ADD . .
RUN yarn build

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
