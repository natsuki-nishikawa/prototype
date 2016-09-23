var w = 700;
var h = 637;
var offsetY = 0;

//回転と移動
var svg = d3.select("#tree").append("svg")
  .attr({
    "width" : w,
    "height" : h
  })
  .append("g")
  .attr("transform","translate(" + w + "," + 627 + ")")
  .append("g")
  .attr("transform","rotate(" + 180 + ")");

// ツリーレイアウト
// ツリーノードの描画範囲を指定
var tree = d3.layout.tree()
	.size([w, h-20])
  .children(children);

function children(d){ return d["children"]; }
// ノードを抽出
var nodes = tree.nodes(dataList);

// ツリーの線を描く
svg.selectAll("path")	// パスを対象にする
		.data(tree.links(nodes))	// リンク情報を読み込む
		.enter()
		.append("path")	// パスを生成する
    .on("mouseover", function(d){
      d3.select(this).attr("stroke", "silver");
    })
    .on("mouseout", function(d){
      d3.select(this).attr("stroke", "gray");
    })
		.attr("d", d3.svg.diagonal())//ノード間を絆ぐ
		.attr({
      fill : "none",
      stroke : "gray",
      "stroke-width" : 7
    });

//確かめ用のコンソール
//console.log(nodes[1]);
// console.log(nodes);

// ツリーの開始点、分岐点、末端を●で表示する
svg.selectAll("circle")
 		.data(nodes)
		.enter()
    .append("circle")
    .attr("class", function(d){
      return d.name;
    })
    //全体像を把握するためにマウスオーバーでキーワードを表示
    .on("mouseover", function(d, i){
      //console.log(nodes[i].name);
      console.log(d.name);
      console.log($(nodes)[i].name);
      // var x1 = nodes[i].x;
      // var y1 = nodes[i].y;
      //console.log(nodes[i].x);

      //ここの処理うまく書けない
      if($(nodes)[i].name != null){
        svg.selectAll("p")
        .data(nodes)
        .enter()
        .append("text")
        .attr({
          x : function(d, i){ return $(nodes)[i].x},
          y : function(d, i){ return $(nodes)[i].y},
          "stroke" : "black",
          "font-size" : '70%'
        })
        .text(function(d, i){ return $(nodes)[i].name });
        // .attr({//回転処理がうまくいかない
        //   "transform" :  "rotate(" + 180 + ")"
        // });
      }else{
       console.log("b");
      };
    })
		.attr({
      cx : function(d){ return d.x; },
      cy : function(d){ return d.y+offsetY; },
      r : 8
    })
    .style({
        "stroke" : "forestgreen",
        "fill" : "forestgreen"
    })
    .attr("transform", "translate(0, "+offsetY+")");
