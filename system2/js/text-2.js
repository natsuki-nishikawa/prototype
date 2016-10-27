
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
  })
	.style("font-size",'120%')
  // .on("click", function(d){
  //   //確かめ用のコンソール
  //   // console.log(d.text);
  //   // console.log(d.number);
  //
  //   //クリックした表題の本文を表示
  //   //ただ，複数回クリックした際の処理ができていない
  //   // d3.select(this)
  // 	// .data(articles)
  // 	// .append("p")
  //   // .attr("class", function(d){ return d.number; })
  //   // .style("font-size", '65%')
  // 	// .text(function(d) { return d.body; });
  //
  //   if($('.'+d.number) != null){
  //     //初期化
	// 		d3.selectAll("li").selectAll("p").style("color", "black");
  //     d3.selectAll("li").selectAll("p").style("text-decoration", "none");
  //
  //     //変化
  //
  //
	// 	}else{  //クリックしていないテキストの処理
  //     d3.selectAll("li").selectAll("p").style("color", "black");
  //     d3.selectAll("li").selectAll("p").style("text-decoration", "none");
	// 	}
  // })
  .text(function(d) { return d.title; });

  d3.select("#textPane").selectAll("li")
  .data(articles)
  .append("p")
  .attr("class", function(d){ return d.number; })
  .style("font-size", '65%')
  .text(function(d) { return d.body; });

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
