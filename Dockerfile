# syntax=docker/dockerfile:1

FROM golang:1.18-alpine
WORKDIR /app

COPY public  ./public
COPY actions ./actions

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY source/server ./source/server
RUN ./actions/back-end/build

EXPOSE 8090

CMD ["./actions/back-end/run-server"]

