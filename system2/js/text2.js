// 記事オブジェクト
var articles = {};

//確かめ用のコンソール
// console.log($(".menu"+"option"+" "+"value"));
// console.log($(".menu"));
// console.log($(".menu.option"));
// console.log($(".menu">"."+"selectedIndex"));

function Selc(Obj){
  //選択された項目番号を取得する
  index_nub = Obj.selectedIndex;
  console.log(index_nub);

  if(index_nub == 1){
    //”震度”の記事を表示
    console.log("震度");
  }else if(index_nub == 2){
    //"被害"の記事を表示
    console.log("被害");
  }else if(index_nub == 3){
    //"避難"の記事を表示
    console.log("避難");
  }else if(index_nub == 4){
    //"天気"の記事を表示
    console.log("天気");
  }else if(index_nub == 5){
    //"支援"の記事を表示
    console.log("支援");
  }else if(index_nub == 6){
    //"復旧"の記事を表示
    console.log("復旧");
  }else{
    //index_nubが0のとき初期化にしようかな？
    console.log("カテゴリー選択");
  }
}

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
  .on("click", function(d){
    if($('.'+d.number) != null){
      //初期化
			//d3.selectAll("li").selectAll("p").style("color", "black");
		  //$('.'+d.number).css('color','red');
      d3.selectAll("li").selectAll("p").style("text-decoration", "none");
      //変化
      $('.'+d.number).css("text-decoration",'underline');
      console.log(d.number);
		}else{  //クリックしていないテキストの処理
      //d3.selectAll("li").selectAll("p").style("color", "black");
      d3.selectAll("li").selectAll("p").style("text-decoration", "none");
		}
  })
  .text(function(d) { return d.hyodai; });

//記事のテキストを生成する処理
	d3.select("#textPane").selectAll("li")
	.data(articles)
	.append("p")
  .style("font-size", '70%')
	.text(function(d) { return d.text; });



};
