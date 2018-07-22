function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
  var byID = document.getElementsById(nested);
  return byID.getElementsByClassName(target);
}