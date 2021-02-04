package main

import (
"crypto/md5"
"fmt"
"net/http"
"os"
"path/filepath"
"strings"
)

const (
	HOME = "."
	HASH = "c49465b110d1c26dc72849c58e7e5225"
)
// このウェブサービスに限らず拡張性向上のためにURLと記事を全単射とする
// 記事と記事一覧ページは通常モードまたはシークレットモードに関わらず不変であるべき
// サーバーがモードを判断できる場所はPATH以外HostかPortかFormかHeaderに限られる。
// ログインしたら一時間有効のTokenがCookieに追加される仕組みにする。

func main() {
	Handle("/", func(w Response, r Request) {
		Service(w, r)
	})
	Listen()
}