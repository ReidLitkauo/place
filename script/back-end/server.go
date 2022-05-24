package main

import (
	"fmt"
    "net/http"
)

func main() {
    http.Handle("/", http.FileServer(http.Dir("./public")))
	fmt.Println("Listening...")
    http.ListenAndServe(":8090", nil)
}

