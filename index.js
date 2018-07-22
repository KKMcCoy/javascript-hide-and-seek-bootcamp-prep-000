function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (let i = 1; i < list.length ; i++) {
  var children = list[i];
     for (i=0; i < children.length; i++ ){
      [i] = parseInt(children[i].innerHTML) + n;
  } return children;
  } return list;
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}