# Step 1
FROM node:10-alpine as build-step

RUN mkdir /src

WORKDIR /src

COPY package.json /src

RUN npm install

COPY . /src

RUN npm run build

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html