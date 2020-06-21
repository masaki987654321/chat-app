# chatApp

rails

https://nakatanorihito.com/programming/docker-rails-postgresql/

docker-compose run --rm　api rails new . --api --force --skip-bundle --database=postgresql

config/database.ymlを変更

default: &default
  adapter: postgresql
  encoding: unicode

  username: postgres 
  password: password
  host: db
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

development:
  <<: *default
  database: myapp_development

test:
  <<: *default
  database: myapp_test

production:
  <<: *default
  database: myapp_production
  username: myapp
  password: <%= ENV['MYAPP_DATABASE_PASSWORD'] %>


$ docker-compose build

$ docker-compose up -d

$ docker-compose run api rails db:create

localhost:3000




react

docker file

FROM node:10-alpine
RUN mkdir /myapp
WORKDIR /myap


docker-compose.ymlを変更

  front:
    build: ./
    command: sh -c "cd app && yarn start"
    ports:
      - '8000:3000'
    volumes:
      - ./front:/myapp
    depends_on:
      - api
    stdin_open: true


$ docker-compose run --rm front sh -c 'npx create-react-app app --template typescript'

docker-compose yum を変更

      front:
    build: ./front
    command: sh -c "cd app && yarn start"
    ports:
      - '8000:3000'
    volumes:
      - ./front:/myapp
    depends_on:
      - api
    stdin_open: true

dockerfileを移動
