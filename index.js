function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedNum = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedNum.length; i++) {
    while (n >0){
  rankedNum[i] = parseInt(rankedNum[i].innerHTML) + n;
  return rankedNum[i];
    }return rankedNum[i];
  }
}

function deepestChild() {
  var child
}