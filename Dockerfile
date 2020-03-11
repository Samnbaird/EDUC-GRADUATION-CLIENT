# base image
FROM nginx:1.17
 
# copy root access config for nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# set working directory
WORKDIR /code
 
# copy dist folder into code folder
COPY ./dist .

#Listen on port 8080
EXPOSE 8080

# start app
CMD ["nginx", "-g", "daemon off;"]