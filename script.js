function checkName() {
  var namebox = document.getElementById("name");
  var name = namebox.value;

  if (name.length < 4 || !/^[a-zA-Z]+$/.test(name)) {
    namebox.style.borderColor = "red";
  } else {
    namebox.style.borderColor = "green";
  }
}
function checkNumber() {
  var numbox = document.getElementById("phoneNum");
  var num = numbox.value;

  if (num.length < 10) {
    numbox.style.borderColor = "red";
  } else {
    numbox.style.borderColor = "green";
  }
}
function checkReason() {
  var cr = document.getElementById("reason");

  var opts = cr.options;
  var si = cr.selectedIndex;
  var sel = opts[si];

  if (si == 0) {
    cr.style.borderColor = "red";
  } else {
    cr.style.borderColor = "green";
  }
}
function checkId() {
  var idbox = document.getElementById("product");
  var id = idbox.value;

  if (
    id === "ARSP-SMP-963" ||
    id === "ARLL-PPL-452" ||
    id === "ARLM-LLL-784" ||
    id === "ARLF-SKM-128"
  ) {
    idbox.style.borderColor = "green";
  } else {
    idbox.style.borderColor = "red";
  }
}
