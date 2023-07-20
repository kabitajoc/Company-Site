var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("rated-card")[0];
itemDisplay = 0;
if (screen.width > 990) {
  itemDisplay = document
    .getElementsByClassName("rated-cards")[0]
    .getAttribute("item-display-d");
}
console.log(itemDisplay)
