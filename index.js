function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li');
  for (let i = 1; i < list.length ; i++) {
  list[i] = parseInt(list[i]) + n;
  } 
  return list;
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}