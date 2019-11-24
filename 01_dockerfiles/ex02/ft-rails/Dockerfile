FROM ruby:2.5.3

RUN apt-get update -y && apt-get install -y nodejs sqlite3

ONBUILD COPY app /opt/app
ONBUILD WORKDIR /opt/app
ONBUILD EXPOSE 3000
ONBUILD RUN gem install bundler
ONBUILD RUN bundle install
ONBUILD RUN rails db:migrate
ONBUILD RUN rails db:seed
