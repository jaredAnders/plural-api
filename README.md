# Pluralsight API
 Web Application that parses CSV data, exposes RESTful API endpoints via Rails back-end and consumes via React front-end.

## Instructions

Clone repo:
```
$ git clone git@github.com:jaredAnders/plural-api.git
```
Install packages:
```
$ cd plural-api/
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
