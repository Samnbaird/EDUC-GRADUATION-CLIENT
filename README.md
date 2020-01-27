# EDUC-GRADUATION-CLIENT

## Project setup

```bash
git clone https://github.com/bcgov/EDUC-GRADUATION-CLIENT.git
cd EDUC-GRADUATION-CLIENT
npm install
```

## Run json-server to serve a sample course-db.json file

```bash
npx json-server --watch course-db.json --port 3000
browse to http://localhost:3000/courses
```

## Run these instructions to serve EDUC-COURSE-API

```bash
<insert great instructions from Kamal>
browse to http://localhost:9999/courses/{courseId}
```

### Compiles and hot-reloads for development

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
