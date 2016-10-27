//var parseDate = d3.time.format("%Y/%m/%d").parse;

loadArticles("data/news.csv", function(data) {
    articles.create(data);
});

// 記事データをフォーマットする関数
function loadArticles(filename, callback) {
    // 新聞記事のデータを読み込む
    d3.csv(filename)
    .row(function(d){   // 行単位で読み込んで処理
            return {number : d.number, year : d.year, month : d.month, day : d.day, headline : d.headline, title : d.title, body : d.body, };
              //date : d.date, hyodai : d["表題"], text : d.text,
	  })
    .get(function(error, data) {
		data.forEach(function(d) {
		    //d.date = parseDate(d.date);
		});
		//articles.create(data)と処理は同じ
		callback(data);
    });
}
