{% comment %} Dropdowns {% endcomment %}

var select = document.getElementById("selectBrand");
var options = [
  "Honor",
  "Others",
  "HTC",
  "Huawei",
  "Lava",
  "Lenovo",
  "LG",
  "Micromax",
  "Nokia",
  "Oppo",
  "Samsung",
  "Vivo",
  "Xiaomi",
  "ZTE",
  "Apple",
  "Asus",
  "Alcatel",
  "Acer",
  "BlackBerry",
  "Celkon",
  "Coolpad",
  "Gionee",
  "Google",
  "Karbonn",
  "Meizu",
  "Microsoft",
  "Motorola",
  "OnePlus",
  "Panasonic",
  "Realme",
  "Sony",
  "Spice",
  "XOLO",
];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("selectOS");
var options = ["iOS", "Android", "Windows", "Others"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("select4G");
var options = ["yes", "no"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("select5G");
var options = ["yes", "no"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("selectType");
var options = ["Phone", "Tablet"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}



