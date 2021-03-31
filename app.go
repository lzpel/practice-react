package main
func main() {
	Handle("/", func(w Response, r Request) {
		WriteTemplate(w,nil,nil,"build/index.html")
	})
	Listen()
}
