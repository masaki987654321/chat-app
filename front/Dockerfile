FROM node:10-alpine
RUN mkdir /myapp
WORKDIR /myapp
COPY ./app/package.json /myapp/package.json
# yarn installのタイムアウトを防ぐため
COPY ./app/.yarnrc /myapp/.yarnrc
RUN yarn install
COPY ./app /myapp/