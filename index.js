function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedNum = document.querySelectorAll('.ranked-list').innerHTML;
  for (let i = 0; i < document.querySelectorAll('.ranked-list'); i++) {
    rankedNum[i] += n;
  }
 return rankedNum;
}