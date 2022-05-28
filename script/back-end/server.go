package main

import (
	"fmt"
    "net/http"
)

func main() {
    http.Handle("/", http.FileServer(http.Dir("./public")))
	fmt.Println("Listening...")
	// TODO If any improvements need to be made to this stub server,
	// move the port to its own config file.
    http.ListenAndServe(":8090", nil)
}

