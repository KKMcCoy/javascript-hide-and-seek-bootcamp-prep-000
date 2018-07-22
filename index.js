function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var byID = document.getElementsById('nested');
  return byID.querySelector('target');
}