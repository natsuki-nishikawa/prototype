var parseDate = d3.time.format("%Y/%m/%d").parse;

loadArticles("data/article.csv", function(data) {
    articles.create(data);
});

// 記事データをフォーマットする関数
function loadArticles(filename, callback) {
    // 新聞記事のデータを読み込む
    d3.csv(filename)
    .row(function(d){   // 行単位で読み込んで処理
	    // 1行目が日本語なのでラベル名など割り当て直す
	    // 将来的には国の省略語と名前（英語や日本語）が全て対応づくイメージ
            return {number : d.number, date : d.date, hyodai : d["表題"], text : d.text, key : d["キーワード1"], key2 : d["キーワード2"]
          };
	  })
    .get(function(error, data) {
		data.forEach(function(d) {
		    d.date = parseDate(d.date);
		});
		//articles.create(data)と処理は同じ
		callback(data);
    });
}
