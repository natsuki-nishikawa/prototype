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

var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden");

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
    .on("mouseover", function(){
        tooltip.style("visibility", "visible");
      })
      .on("mousemove", function(d){
        tooltip
        .style("top", (d3.event.pageY-10)+"px")
        .style("left",(d3.event.pageX+10)+"px")
        .style("color", "silver")
        .html(
          "<h3>" + d.name + "</h3>"
        );
      })
      .on("mouseout", function(){
        tooltip.style("visibility", "hidden");
      })
		.attr({
      cx : function(d){ return d.x; },
      cy : function(d){ return d.y+offsetY; },
      r : 9
    })
    .style({
        "stroke" : "darkgreen",
        "fill" : "darkgreen"
    })
    .attr("transform", "translate(0, "+offsetY+")");
