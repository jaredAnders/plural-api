# Pluralsight API
Web Application that parses CSV data, exposes RESTful API endpoints via Rails back-end and consumes via React front-end.

View production app: http://plural-api.herokuapp.com/

## Instructions

Set up environment (Node, Yarn, Ruby, Rails):
```
nvm install node                     # download and install latest stable Node
nvm alias default node               # make it default version

brew install yarn                    # you can use other installer if desired

rvm install 2.3.0                    # download and install latest stable Ruby (update to exact version)
rvm use 2.3.0 --default              # use it and make it default

gem install rails                    # download and install latest stable Rails
```
Clone repo:
```
$ git clone git@github.com:jaredAnders/plural-api.git
```
Install packages:
```
$ cd plural-api/
$ bundle
$ rails g react_on_rails:install     # select "n" for all of the conflicts
$ bundle && yarn
```
Prepare database:
```
$ rake db:create:all
$ rake db:migrate
```
Import data from CSV:
```
$ rake import
```
Serve local application:
```
$ rake foreman
```

You can now access at http://localhost:3000/

## Testing

Run tests:
```
$ bundle exec rspec
```
