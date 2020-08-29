var text = document.querySelector("#text");
var div = text.querySelectorAll("div");
let clicks = 0;
let index = 20;

function largeFont() {
  clicks += 1;
  // index += 5 * ((clicks % 5) - ((clicks + 1) % 5));
  if (clicks % 5 !== 1) {
    index += 0;
    div[(clicks - 1) % 5].style.fontSize = index + "px";
  } else {
    index += 5;
    div[(clicks - 1) % 5].style.fontSize = index + "px";
  }
}
/*for (i = 0; i % 5 === i; i++) {
    if (((clicks - 1) % 5) + 1 === parseInt(div[i].className)) {
        index += 5;
        div[(clicks - 1) % 5].style.fontSize = index + "px";
      }
    }*/
