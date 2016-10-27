
//左下のキーワードを表示していく
var key = {};
//再びnodeを読み込む
//var nodes = tree.nodes(dataList);

// key.create = function(key) {

//確かめ用のコンソール
// console.log(dataList.name);
// console.log(dataList.children[0].name);
// console.log(dataList.children[0].children[1].name);
//結構強引に配列に入れる
var words = new Array();
  words[0] = dataList.name;
  for(var i=1; i<4; i++){
    words[i] = dataList.children[i-1].name;
  };
  for(var j=4; j<10; j++){
    words[j] = dataList.children[0].children[j-4].name;
  };
  for(var k=10; k<14; k++){
    words[k] = dataList.children[1].children[k-10].name;
  }

//機械的にやろうとしているやつ
//まずkeyって配列になってるん？
// console.log(key);
// var words = new Array();
//   for(var i=0; i<15; i++){
//     words[i] = key;
//   }
//   console.log(words);

var topicWords = [];

extractTopciWords(dataList)

// オブジェクトのchildrenキーをループする。その際にnameを配列に追加する。
function extractTopciWords(obj) {
  if (obj.hasOwnProperty("name")) {
    topicWords.push(obj["name"])
  }
  if (obj.hasOwnProperty("children")) {
    for (var i=0; i< obj["children"].length; i++) {
      extractTopciWords(obj["children"][i])
    }
  }
}

// 重複を削除したリスト
var keywordsTopicWords = topicWords.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
console.log(keywordsTopicWords)

// 重複を削除したワード
var keywords = words.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });

//console.log(keywords);

d3.select("#keyPane").selectAll("text")
  .data(keywords)
  .enter()
  .append("text")
  .attr("class", function(d){
    return "#"+d;
  })
  .style("color", 'gray')
  .on("click", function(d, i){
    //ツリー構造の変化
    if(d != null){
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
        console.log(d);

      //circle.js中のd.nameと等しかったら色を変える処理
        if($('circle')[i].className.baseVal == d){
          //初期化
          $('circle').css({
            "stroke" : "darkgreen",
            "fill" : "darkgreen"
          });
          //スタイル変化
          $('circle')[i].style.stroke = "darkblue";
          $('circle')[i].style.fill = "darkblue";
        }else{
          $('circle').css({
            "stroke" : "darkgreen",
            "fill" : "darkgreen"
          });
        }

      //text.jsの記事を絞る処理
        //記事のタグとd.nameが等しかったら，，，
        //if( ==d.name){

      //}

    }else{
      d3.select(this).style("color", "gray");
    }
  })
  .text(function(d) { return "#" + d + " "; });  //キーワード間のスペースも含めて表示

// }
