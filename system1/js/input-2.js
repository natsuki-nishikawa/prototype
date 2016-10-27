
loadArticles("data/key.csv", function(data) {
    key.create(data);
});

// 記事データをフォーマットする関数
function loadArticles(filename, callback) {
    // 新聞記事のデータを読み込む
    d3.csv(filename)
    .row(function(d){   // 行単位で読み込んで処理
	    // 1行目が日本語なのでラベル名など割り当て直す
            return {key : d.key };
	  })
    .get(function(error, data) {
		data.forEach(function(d) {
		    //d.date = parseDate(d.date);
		});
		//articles.create(data)と処理は同じ
		callback(data);
    });
}
