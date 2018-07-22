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
  var newRank = parseInt(rank[i].innerHTML) + n;
  rank.splice(i,1,newRank);
  } return rank;
  } return list;
}

function deepestChild() {
  return document.querySelector()
}