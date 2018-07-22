function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
  var byID = document.getElementById(nested);
  var byClassName = getElementsByClassName(target);
  return byID.byClassName;
}