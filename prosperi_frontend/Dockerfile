FROM node:14.19-buster
USER root
WORKDIR /frontend
COPY . /frontend
ARG API_URL
ENV REACT_APP_HOST_IP_ADDRESS $API_URL
RUN yarn
RUN yarn build