function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedNum = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedNum.length; i++) {
  var list= rankedNum[i];
 
  for (let i = 0; i < list.length; i++) {
  list[i] = parseInt(list[i].innerHTML) + n;
  return list;
 
  }return rankedNum;
  }
}

function deepestChild() {
  var child
}