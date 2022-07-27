FROM php:latest

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
ARG PHP_CODE="PHP CODE/."
COPY dist/ .
COPY ${PHP_CODE} .

EXPOSE 5174
CMD php -S 0.0.0.0:5174 -t .