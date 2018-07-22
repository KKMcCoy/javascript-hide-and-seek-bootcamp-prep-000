function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedNum = document.querySelectorAll('.ranked-list ul li');
  for (let i = 0; i < document.querySelectorAll('.ranked-listul li'); i++) {
   return parseInt(rankedNum[i].innerHTML) += n;
  }
}