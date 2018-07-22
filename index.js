function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
  var byID = document.getElementsById(nested);
  var byClassName = getElementsByClassName(target);
  return byID.byClassName;
}