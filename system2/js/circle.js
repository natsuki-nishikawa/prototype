
var svg = d3.select("#overall").append("svg")
  .attr({
    "width" :  800,
    "height" : 600
  });
//x座標
var x1 = [100, 200, 300, 400, 500, 600, 700, 100, 200, 300, 400, 500, 600, 700, 100, 200, 300, 400, 500, 600, 700, 100, 200, 300, 400, 500, 600, 700, 100, 200];
//y座標
var y1 = [100, 100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 300, 300, 300, 300, 300, 300, 300, 400, 400, 400, 400, 400, 400, 400, 500, 500];
//一応二次元配列にしているけど？
var array = [x1, y1];

var line = d3.svg.line()
    .x(function(d, i) {return x1[i]; })
    .y(function(d, i) {return y1[i]; });

var path = svg.append('path')
    .attr({
      'd': line(x1), //これもなぜかx1
      'stroke': 'silver',
      'stroke-width': 5,
      'fill': 'none',
    });

var g = svg.selectAll("g")
  .data(x1)//なぜかx1だけ笑
  .enter()
  .append("g")
  .attr({
      transform: function(d, i) {
        return "translate(" + x1[i] + "," + y1[i] + ")";
      }
  });

  g.append("circle")
    .on("click", function(d){
      d3.select(this).attr("fill", "midnightblue");
    })
    .attr({
      "x" : function(d, i){ return x1[i]; },
      "y" : function(d, i){ return y1[i]; },
      "r" : 30,
      "fill" : "steelblue"
    });

  g.append("text")
    .data(articles)
    .enter()
    .attr({
      "text-anchor" : "middle",
      "dy" : ".35em",
      "fill" : "white"
    })
    .text(function(d, i){
      // var month = 4;
      // var day = 14;
      // if (day + i > 30) {
      //   month = 5;
      //   day -= 30;
      // }
      // day += i;
      // return month + "." + day;
      return d.month + "." + d.day;
    });
