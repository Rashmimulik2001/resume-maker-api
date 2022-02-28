function toggle(select) {
  if (select.value == 0) {
    document.getElementById("pinfo").style.display = "block";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("wrkexp").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("por").style.display = "none";
    document.getElementById("skl").style.display = "none";
  } else if (select.value == 1) {
    document.getElementById("pinfo").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("edu").style.display = "block";
    document.getElementById("wrkexp").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("por").style.display = "none";
    document.getElementById("skl").style.display = "none";
  } else if (select.value == 2) {
    document.getElementById("pinfo").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "block";
    document.getElementById("wrkexp").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("por").style.display = "none";
    document.getElementById("skl").style.display = "none";
  } else if (select.value == 3) {
    document.getElementById("pinfo").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("wrkexp").style.display = "block";
    document.getElementById("cont").style.display = "none";
    document.getElementById("por").style.display = "none";
    document.getElementById("skl").style.display = "none";
  } else if (select.value == 4) {
    document.getElementById("pinfo").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("wrkexp").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("por").style.display = "block";
    document.getElementById("skl").style.display = "none";
  } else if (select.value == 5) {
    document.getElementById("pinfo").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("wrkexp").style.display = "none";
    document.getElementById("cont").style.display = "none";
    document.getElementById("por").style.display = "none";
    document.getElementById("skl").style.display = "block";
  } else if (select.value == 6) {
    document.getElementById("pinfo").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("wrkexp").style.display = "none";
    document.getElementById("cont").style.display = "block";
    document.getElementById("por").style.display = "none";
    document.getElementById("skl").style.display = "none";
  } else {
    //
  }
}
function check(input) {
  var elem = new Array();
  elem[0] = document.getElementById("add_perm");
  elem[1] = document.getElementById("permanent");
  elem[2] = document.getElementById("p-temp");
  for (let i = 0; i < 3; i++)
    elem[i].style.display = input.checked ? "none" : "block";
}
function hide(input) {
  var elem = document.getElementById("inp_" + input.id.substring(4))
    .parentElement;
  // var inp = document.getElementById("inp_" + input.id.substring(4));
  // inp.setAttribute("type","text");
  // inp.value = "Present";
  elem.style.display = input.checked ? "none" : "block";
  update(input);
}
const reset = () => {
  var select = document.getElementById("pinfo");
  var inps = select.getElementsByTagName("input");
  console.log(inps);
  var elem;
  for (let i = 0; i < inps.length - 1; i++) {
    document.getElementById(inps[i].id).value = "";
    document.getElementById(inps[i].id.substring(4)).innerHTML = "";
  }
};
