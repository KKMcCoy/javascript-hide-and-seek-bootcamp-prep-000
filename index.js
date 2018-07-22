function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedNum = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedNum.length; i++) {
  return parseInt(rankedNum[i].innerHTML) + n;
  }
}

function deepestChild() {
  var child
}