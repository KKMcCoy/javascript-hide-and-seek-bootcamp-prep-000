function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedNum = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < document.querySelectorAll('.ranked-list li'); i++) {
   return rankedNum[i].innerHTML += n;
  }
}