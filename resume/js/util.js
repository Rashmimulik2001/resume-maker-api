function collectData() {
  var obj = {};
  obj["name"] = document.getElementById("inp_name").value;
  obj["contact"] = document.getElementById("inp_contact").value;
  obj["email"] = document.getElementById("inp_email").value;
  obj["web"] = document.getElementById("inp_web").value;
  obj["mis"] = document.getElementById("inp_mis").value;
  return obj;
}

function make_json() {
  var checks = {};
  //education

  var section = document.getElementById("edu");
  var inps = section.getElementsByTagName("input");
  // console.log(inps);
  var edu = {};
  var inst = {};
  for (let j = 0; j < getcount("add_edu", 0); j++) {
    inst = {};
    for (var i = j * 8; i < (j + 1) * 8; i++) {
      label = inps[i].id.substring(4);
      inst[label] = inps[i].value;
    }
    edu[j] = inst;
  }
  console.log(edu);

  //work experience

  section = document.getElementById("wrkexp");
  inps = section.getElementsByTagName("input");
  // console.log(inps)
  var wrkexp = {};
  for (let j = 0; j < getcount("add_wrkexp", 0); j++) {
    inst = {};
    for (var i = j * 5; i < (j + 1) * 5; i++) {
      if (inps[i].type == "toggle" || inps[i].type == "checkbox") {
        checks[inps[i].id] = inps[i].checked;
        continue;
      }
      label = inps[i].id.substring(4);
      inst[label] = inps[i].value;
    }
    wrkexp[j] = inst;
  }

  //positions of responibility

  section = document.getElementById("por");
  inps = section.getElementsByTagName("input");

  var por = {};
  for (let j = 0; j < getcount("add_por", 0); j++) {
    inst = {};
    for (var i = j * 5; i < (j + 1) * 5; i++) {
      if (inps[i].type == "toggle" || inps[i].type == "checkbox") {
        checks[inps[i].id] = inps[i].checked;
        continue;
      }
      label = inps[i].id.substring(4);
      inst[label] = inps[i].value;
    }
    por[j] = inst;
  }

  //skills

  var skl_sets = {};
  var count = 0;
  for (let j = 0; j < getcount("add_skl_set", 0); j++) {
    inst = {};
    section = document.getElementById("skl_" + String(j + 1));
    inps = section.getElementsByTagName("input");
    count = inps.length;
    for (var i = 0; i < count; i++) {
      label = inps[i].id.substring(4);
      inst[label] = inps[i].value;
    }
    skl_sets[j] = inst;
  }
  section = document.getElementById("proj");
  inps = section.getElementsByTagName("input");
  // console.log(inps)
  var proj = {};
  for (let j = 0; j < getcount("add_proj", 0); j++) {
    inst = {};
    for (var i = j * 4; i < (j + 1) * 4; i++) {
      if (inps[i].type == "toggle" || inps[i].type == "checkbox") {
        checks[inps[i].id] = inps[i].checked;
        continue;
      }
      label = inps[i].id.substring(4);
      inst[label] = inps[i].value;
    }
    proj[j] = inst;
  }

  //address

  var address = {};
  inst = {};
  section = document.getElementById("inp_mob");
  inps = section.getElementsByTagName("input");
  for (var i = 0; i < getcount("add_mob"); i++) {
    if (inps[i].type == "toggle" || inps[i].type == "checkbox") continue;
    label = inps[i].id.substring(4);
    inst[label] = inps[i].value;
  }
  address["mob"] = inst;
  inst = {};
  section = document.getElementById("cont_main");
  inps = section.getElementsByTagName("input");
  for (var i = getcount("add_mob"); i < inps.length; i++) {
    if (inps[i].type == "toggle" || inps[i].type == "checkbox") {
      checks[inps[i].id] = inps[i].checked;
      continue;
    }
    label = inps[i].id.substring(4);
    inst[label] = inps[i].value;
  }
  address["main"] = inst;

  //textboxes

  inst = {};
  var desc = {};
  var text = document.getElementsByTagName("textarea");
  for (var i = 0; i < text.length; i++) {
    if (text[i].type == "toggle" || text[i].type == "checkbox") continue;
    inst[text[i].id.substring(4)] = text[i].value;
  }
  desc = inst;

  var json = {
    education: edu,
    work_experience: wrkexp,
    skills: skl_sets,
    projects: proj,
    por: por,
    address: address,
    desc: desc,
    checks: checks
  };
  return json;
}

function create() {
  if (!validateContactNo() || !validateEmail() || !validateMIS()) {
    return;
  }
  var response;
  var xmlhttp = new XMLHttpRequest();
  var theUrl = "php/main.php";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
      console.log(response.state);
      console.log(this.responseText);

      if (response["status"] == 200) {
        alert("RECORD SAVED SUCCESSFULLY !!");
      } else {
        alert("USER ALREADY EXISTS IN THE DATABASE");
      }
    }
  };
  xmlhttp.open("POST", theUrl, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(
    JSON.stringify({
      insert: 1,
      data: { data: collectData(), json: make_json() }
    })
  );
}

function insertData(json_data) {
  var section, inps;
  //populate pinfo
  document.getElementById("inp_name").value = json_data["Name"];
  $("#inp_name").trigger("onkeyup");
  document.getElementById("inp_email").value = json_data["Email"];
  $("#inp_email").trigger("onkeyup");
  document.getElementById("inp_contact").value = json_data["Contact"];
  $("#inp_contact").trigger("onkeyup");
  document.getElementById("inp_web").value = json_data["Website"];
  $("#inp_web").trigger("onkeyup");
  //populate education
  section = document.getElementById("edu");
  inps = section.getElementsByTagName("input");
  var target = JSON.parse(json_data["Education"]);
  for (let i = 1; i < target.length; i++) {
    $("#add_edu").trigger("click");
  }

  for (let i = 0; i < target.length; i++) {
    for (var key in target[i]) {
      // console.log(key);
      document.getElementById("inp_" + String(key)).value = target[i][key];
      $("#inp_" + String(key)).trigger("keyup");
    }
  }
  //populate projects
  section = document.getElementById("proj");
  inps = section.getElementsByTagName("input");
  target = JSON.parse(json_data["Projects"]);
  for (let i = 1; i < target.length; i++) {
    $("#add_proj").trigger("click");
  }
  for (let i = 0; i < target.length; i++) {
    for (var key in target[i]) {
      document.getElementById("inp_" + String(key)).value = target[i][key];
      $("#inp_" + String(key)).trigger("keyup");
      if (key.includes("date")) $("#inp_" + String(key)).trigger("change");
    }
  }
  //populate expererience
  section = document.getElementById("wrkexp");
  inps = section.getElementsByTagName("input");
  target = JSON.parse(json_data["Experience"]);
  for (let i = 1; i < target.length; i++) {
    $("#add_wrkexp").trigger("click");
  }
  for (let i = 0; i < target.length; i++) {
    for (var key in target[i]) {
      document.getElementById("inp_" + String(key)).value = target[i][key];
      $("#inp_" + String(key)).trigger("keyup");
      if (key.includes("date")) $("#inp_" + String(key)).trigger("change");
    }
  }
  //populate por
  section = document.getElementById("por");
  inps = section.getElementsByTagName("input");
  target = JSON.parse(json_data["POR"]);
  for (let i = 1; i < target.length; i++) {
    $("#add_por").trigger("click");
  }
  for (let i = 0; i < target.length; i++) {
    for (var key in target[i]) {
      document.getElementById("inp_" + String(key)).value = target[i][key];
      $("#inp_" + String(key)).trigger("keyup");
      if (key.includes("date")) $("#inp_" + String(key)).trigger("change");
    }
  }
  //populate skills
  target = JSON.parse(json_data["Skills"]);
  for (let i = 1; i < target.length; i++) {
    $("#add_skl_set").trigger("click");
  }
  for (let i = 0; i < target.length; i++) {
    section = document.getElementById("skl_" + String(i + 1));
    inps = section.getElementsByTagName("input");
    for (var key in target[i]) {
      try {
        document.getElementById("inp_" + String(key)).value = target[i][key];
      } catch (err) {
        console.log("problems" + err);
      }
      $("#inp_" + String(key)).trigger("keyup");
      $("#add_skl" + key[key.length - 2]).trigger("click");
    }
  }
  for (let i = 0; i < target.length; i++) {
    $("#rem_skl" + String(i + 1)).trigger("click");
  }
  // populate address
  section = document.getElementById("inp_mob");
  inps = section.getElementsByTagName("input");
  target = JSON.parse(json_data["Address"])["mob"];
  var count = Object.keys(target).length;
  for (let i = 0; i < count; i++) {
    $("#add_mob").trigger("click");
  }
  $("#rem_mob").trigger("click");
  for (var key in target) {
    try {
      document.getElementById("inp_" + String(key)).value = target[key];
    } catch (err) {
      console.log("problems" + err);
    }
    $("#inp_" + String(key)).trigger("keyup");
  }
  section = document.getElementById("cont_main");
  inps = section.getElementsByTagName("input");
  main_target = JSON.parse(json_data["Address"])["main"];

  for (var key in main_target) {
    document.getElementById("inp_" + String(key)).value = main_target[key];
    $("#inp_" + String(key)).trigger("keyup");
  }
  //POPULATE DESCRIPTIONS
  target = JSON.parse(json_data["Textareas"]);
  for (var key in target) {
    try {
      document.getElementById("inp_" + String(key)).value = target[key];
    } catch (err) {
      console.log("problems" + err);
    }
    $("#inp_" + String(key)).trigger("keyup");
  }
  //populate checks
  target = JSON.parse(json_data["Checkboxes"]);
  for (var key in target) {
    try {
      document.getElementById(String(key)).checked = target[key];
    } catch (err) {
      console.log("problems" + err);
    }
    $("#" + String(key)).trigger("change");
  }

  return true;
}
function modify(uid) {
  if (!validateContactNo() || !validateEmail() || !validateMIS()) {
    return;
  }
  var response;
  var xmlhttp = new XMLHttpRequest();
  var theUrl = "php/main.php";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
      if (response["status"] == 200) {
        alert("updated successfully");
      } else {
        alert("Update Failed");
      }
    }
  };
  xmlhttp.open("POST", theUrl, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(
    JSON.stringify({
      update: 1,
      uid: uid,
      data: { data: collectData(), json: make_json() }
    })
  );
}

function fetchUser(uid) {
  var response;
  var status = false;
  var xmlhttp = new XMLHttpRequest();
  var theUrl = "php/main.php";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText)
      response = JSON.parse(this.responseText);
      console.log(response);
      if (response["status"] == 200) {
        insertData(response["data"]);
        document
          .getElementById("action")
          .setAttribute("onclick", "modify(" + query + ");");
        document.getElementById("action").innerHTML = "Update Resume";
        document.getElementById("uid_mis").style.display = "none";
        document.getElementById("heading").innerHTML =
          "WELCOME\t" + String(query);
        document.getElementById("inp_mis").value = uid;
        $("#inp_mis").trigger("onkeyup");
        status = true;
      } else {
        alert("You are a new User\nWelcome !!");
        document.getElementById("inp_mis").value = uid;
        $("#inp_mis").trigger("onkeyup");
        status = false;
      }
    }
  };
  xmlhttp.open("POST", theUrl, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify({ fetch: 1, uid: uid }));
  return status;
}

function printDiv() {
  var divContents = document.getElementById("display").innerHTML;
  var popup = window.open("", "", "newWin", "height = 500,width = 500");
  if (popup == null) {
    alert("Please change your popup settings");
    return;
  } else {
    popup.moveTo(0, 0);
    popup.resizeTo(screen.width, screen.height);
    popup.document.write("<html>");
    popup.document.write(
      '<head><link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/style.css">'
    );
    popup.document.write(
      "<style> #name{font-size : 3vw !important;}  #display { border : none;} #main{scrollbar-width: none;} #main{-ms-overflow-style: none; overflow: -moz-scrollbars-none;} #main::-webkit-scrollbar { width: 0;} </style></head>"
    );
    popup.document.write(
      '<body > <div id="main" class="row d-flex justify-content-between"><section id="display" class="col-md-8">'
    );
    popup.document.write(divContents);
    popup.document.write("</section></div></body></html>");
    setTimeout(() => {
      popup.print();
    }, 3000);
  }
  // a.document.close();
  // a.print();
}
