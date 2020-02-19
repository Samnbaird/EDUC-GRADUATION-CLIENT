# EDUC-GRADUATION-CLIENT

## Project setup

```bash
git clone https://github.com/bcgov/EDUC-GRADUATION-CLIENT.git
cd EDUC-GRADUATION-CLIENT
npm install
```

## Run json-server to serve a sample course-db.json file

```bash
npx json-server --watch course-db.json -i courseId --port 9999 --routes course-db-routes.json
browse to http://localhost:9999/api/v1/courses
```

## Run json-server to serve a sample course-achievement-db.json file

```bash
npx json-server --watch course-achievement-db.json --port 9998 --routes course-achievement-db-routes.json
browse to http://localhost:9998/api/v1/course-achievements

```

## Run these instructions to serve EDUC-COURSE-API

```bash
see https://github.com/bcgov/EDUC-COURSE-API/tree/master/api for API setup
git clone https://github.com/bcgov/EDUC-COURSE-API.git
cd <project>/EDUC-COURSE-API/api
mvn clean install
mvn spring-boot:start
browse to http://localhost:9999/courses
```

### Run server

```bash
npm run serve
browse to http://localhost:8080/
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Run json-server to start mock json database

```bash
npx json-server --watch db.json --port 3000
etc.
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
