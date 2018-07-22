function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
  var rankedGroup= list[i];
 
  for (let i = 0; i < rankedGroup.length; i++) {
  var newNum = rankedGroup[i].innerHTML;
  parseInt(newNum) + n;
  }return rankedGroup;
  }return list;
}

function deepestChild() {
  var child
}