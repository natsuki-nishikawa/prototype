
// 記事オブジェクト
var articles = {};

// 記事を生成する関数
articles.create = function(articles) {
	//記事の表題を生成する処理

  d3.select("#textPane").selectAll("li")
	.data(articles)
	.enter()
	.append("li")
	.append("p")
	.attr("class",function(d) {
    return d.number;
	//    return Date.parse(d.date) + " " + d.area;
	})
	.style("font-size",'120%')
  // .on("click", function(d){
  //   if($('.'+d.number) != null){
  //     //初期化
	// 		d3.selectAll("li").selectAll("p").style("color", "black");
	// 	  $('.'+d.number).css('color','red');
  //     d3.selectAll("li").selectAll("p").style("text-decoration", "none");
  //     //変化
  //     $('.'+d.number).css("text-decoration",'underline');
  //     console.log(d.number);
	// 	}else{  //クリックしていないテキストの処理
  //     d3.selectAll("li").selectAll("p").style("color", "black");
  //     d3.selectAll("li").selectAll("p").style("text-decoration", "none");
	// 	}
  //})
  .text(function(d) { return d.hyodai; });

//記事のテキストを生成する処理
	d3.select("#textPane").selectAll("li")
	.data(articles)
	.append("p")
  .style("font-size", '70%')
	.text(function(d) { return d.text; });

//記事中にタグ表示
  // d3.select("#tagu").selectAll("li")
  // .data(articles)
  // .append("p")
  // .style("color", 'green')
  // .text(function(d) { return d.key; });
  //
  // d3.select("#tagu").selectAll("li")
  // .data(articles)
  // .append("p")
  // .style("color", 'green')
  // .text(function(d) { return d.key2; });


};

// 記事をハイライトする関数
// articles.highlightArticles = function(date) {
// 	// Change highlited articles
// 	if($('.'+Date.parse(date)) != null){
// 		d3.selectAll("li").selectAll("p").style("color", "black");
// 		$('.'+Date.parse(date)).css('color','red');
// 	}else{
// 		d3.selectAll("li").selectAll("p").style("color", "black");
// 	}
// };
