function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var byID = document.getElementById('nested');
  var byClass = byID.getElementsByClassName('target');
  return byClass;
}