package main
func main() {
	Handle("/", func(w Response, r Request) {
		WriteTemplate(w,r,nil)
	})
	Listen()
}
