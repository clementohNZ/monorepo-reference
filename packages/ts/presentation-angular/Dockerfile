FROM node:12.18.3 as builder

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build:ssr

RUN ls -l dist/reference-angular/server
RUN ls -l dist/reference-angular/browser

# Docker Multistage Build to create smaller final image
FROM node:12.18.3

WORKDIR /app

COPY --from=builder /app/dist/reference-angular ./

CMD node server/main.js
