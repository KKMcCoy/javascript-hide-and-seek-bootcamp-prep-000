function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedNum = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedNum.length; i++) {
  rankedNum[i][i].innerHTML = parseInt(rankedNum[i][i].innerHTML) + n;
  return rankedNum[i][i].innerHTML;
  }
}

function deepestChild() {
  var child
}