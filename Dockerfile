# base image
FROM node:lts-alpine
 
# install simple http-server
RUN npm install -g http-server

# set working directory
WORKDIR /app
 
# install and cache app dependencies
COPY packag*.json ./

# install project dependencies
RUN npm install

# copt project files and folders to working directory (i.e. app folder)
COPY . .

# build for production
RUN npm run build

EXPOSE 80
FROM nginx:stable-alpine as production-stage
# This next line failes without permission
COPY --from=build-stage /app/dist /usr/share/nginx/html
# start app
CMD [ "nginx", "-g", "daemon off;" ]