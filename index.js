function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
  
  var rank= list[i];
  for (let i = 0; i < rank.length; i++) {
  var newNum = rank[i].innerHTML;
  rank.splice(i,1,'parseInt(newNum) + n');
  
  }return rankedGroup;
  
  }return list;
}

function deepestChild() {
  var child
}