function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var byID = document.getElementById('nested');
  return byID.querySelectorAll('target');
}