var index = 2;

function newContent() {
  var dyn_element = document.createElement("div");
  dyn_element.className = "element";

  var dyn_number = document.createElement("div");
  dyn_number.className = "number";
  dyn_number.innerText = index;
  var dyn_title = document.createElement("div");
  dyn_title.className = "title";
  dyn_title.innerText = index + "번 게시물";

  var dyn_date = document.createElement("div");
  dyn_date.className = "date";
  dyn_date.innerText = "2020-08-28";

  index++;

  dyn_element.appendChild(dyn_number);
  dyn_element.appendChild(dyn_title);
  dyn_element.appendChild(dyn_date);

  var target = document.querySelector("#box");
  target.appendChild(dyn_element);
}
