
//左下のキーワードを表示していく
var key = {};
//再びnodeを読み込む
var nodes = tree.nodes(dataList);

d3.select("#keyPane").selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("class", function(d){
    return d.name;
  })
  .style("color", 'gray')
  .on("click", function(d, i){
    if(d.name != null){
      //初期化
      d3.select("#keyPane").selectAll("text").style("color", "gray");
      //スタイル変化
      d3.select(this).style("color", "red");
        //確かめる用のコンソール
        // console.log(d.name);
        // console.log($('circle')[0]);
        // console.log($('circle')[0].className);
        // console.log($('circle')[i].className.baseVal);
        // console.log($('circle')[i].style);
        // console.log($('circle')[i].style.stroke);

      //circle.js中のd.nameと等しかったら色を変える処理
        if($('circle')[i].className.baseVal == d.name){
          console.log("a");
          //初期化
          $('circle').css({
            "stroke" : "forestgreen",
            "fill" : "forestgreen"
          });
          //スタイル変化
          $('circle')[i].style.stroke = "limegreen";
          $('circle')[i].style.fill = "limegreen";
          //上の2行まとめたいけどなんかエラー出る
          // $(('circle')[i]).css({
          //   "stroke" : "maroon",
          //   "fill" : "maroon"
          // });
        }else{
          console.log("b");
          $('circle').css({
            "stroke" : "forestgreen",
            "fill" : "forestgreen"
          });
        }
    }else{
      d3.select(this).style("color", "gray");
    }
  })
  .text(function(d) { return d.name + " "; });  //キーワード間のスペースも含めて表示
