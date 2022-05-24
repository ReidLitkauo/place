# syntax=docker/dockerfile:1

FROM golang:1.18-alpine
WORKDIR /app

COPY public  ./public
COPY script ./script

COPY go.mod ./
COPY go.sum ./
RUN go mod download

EXPOSE 8090

CMD ["./script/back-end/run-server"]

