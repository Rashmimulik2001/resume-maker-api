function update(input) {
  // console.log(input.value[input.value.length - 1]);
  var text = input.value;
  // if (input.type == "textarea" && text[text.length - 1] == "\n") {
  //   document.getElementById(input.id).innerHTML = text + "<br/>";
  // }
  if (input.id == "inp_contact") {
    text = "PHONE - " + text;
    document.getElementById("contact").innerHTML = text;
    return;
  }
  if (input.id == "inp_email") {
    text = "EMAIL - " + text;
    document.getElementById("email").innerHTML = text;
    return;
  }
  if (input.id == "inp_web") {
    text = "WEBSITE - " + text;
    document.getElementById("web").innerHTML = text;
    return;
  }
  if (input.id.includes("inp_yr")) {
    id = input.id.substring(4);
    text = "YEAR - " + text;
    document.getElementById(id).innerHTML = text;
    return;
  }
  if (input.id.includes("inp_cgpa")) {
    id = input.id.substring(4);
    text = "CGPA/% - " + text;
    document.getElementById(id).innerHTML = text;
    return;
  }
  var id = String(input.id).substring(4);
  if (id.includes("fos")) {
    if (text != "") text = "," + text;
    var parent = "stdp" + id[3];
    var temp = String(document.getElementById(parent).innerHTML).split(","); //bug in here
    document.getElementById(parent).innerHTML = temp[0] + text;
    return;
  }
  if (id.includes("pin")) {
    var ins = "";
    var parent = "";
    var temp = "";
    if (id.includes("p_pin")) {
      temp = document
        .getElementById("p_bline" + id[id.length - 1])
        .innerHTML.split("-")[0];
      document.getElementById("p_bline" + id[id.length - 1]).innerHTML = "";
      document.getElementById("p_bline" + id[id.length - 1]).innerHTML =
        temp + "-" + text;
    } else if (id.includes("pin")) {
      temp = document
        .getElementById("bline" + id[id.length - 1])
        .innerHTML.split("-")[0];
      document.getElementById("bline" + id[id.length - 1]).innerHTML = "";
      document.getElementById("bline" + id[id.length - 1]).innerHTML =
        temp + "-" + text;
    }
    return;
  }
  if (id.includes("a_city") || id.includes("a_state")) {
    var ins = "";
    var parent = "";
    if (id.includes("p_a_state") || id.includes("p_a_city"))
      parent = "p_bline1";
    else if (id.includes("a_state") || id.includes("a_city")) parent = "bline1";

    if (id.includes("p_a_city"))
      ins =
        text +
        "," +
        document.getElementById("inp_p_a_state" + id[id.length - 1]).value;
    else if (id.includes("p_a_state"))
      ins =
        document.getElementById("inp_p_a_city" + id[id.length - 1]).value +
        "," +
        text;
    //bug in here
    else if (id.includes("a_city"))
      ins =
        text +
        "," +
        document.getElementById("inp_a_state" + id[id.length - 1]).value;
    else if (id.includes("a_state"))
      ins =
        document.getElementById("inp_a_city" + id[id.length - 1]).value +
        "," +
        text; //bug in here

    document.getElementById(parent).innerHTML = ins;
    return;
  }
  if (id.includes("city") || id.includes("state")) {
    var ins = "";
    if (id.includes("p_a_state") || id.includes("p_a_city"))
      var parent = "p_aline" + id[id.length - 1];
    else if (id.includes("a_state") || id.includes("a_city"))
      var parent = "aline" + id[id.length - 1];
    else var parent = "inst" + id[id.length - 1];

    var temp = String(document.getElementById(parent).innerHTML).split(","); //bug

    if (id.includes("city"))
      ins =
        temp[0] +
        "," +
        text +
        "," +
        document.getElementById("inp_state" + id[id.length - 1]).value;
    else if (id.includes("state"))
      ins =
        temp[0] +
        "," +
        document.getElementById("inp_city" + id[id.length - 1]).value +
        "," +
        text;

    document.getElementById(parent).innerHTML = ins;
    return;
  }
  if (id.includes("mob")) {
    var count = document.getElementById("inp_mob").childElementCount / 2;
    text = "";
    for (var i = 0; i < count; i++) {
      text += document.getElementById("inp_mob" + String(i + 1)).value;
      if (count != i + 1) text += ",";
    }
    // alert(text);
    document.getElementById("mob_list").innerHTML = text;

    return;
  }
  if (id.includes("sk") && !id.includes("title")) {
    var idx = id[id.length - 2];
    var count = document.getElementById("inp_skill_set_" + idx)
      .childElementCount;
    text = "";
    for (var i = 0; i < count; i++) {
      text += document.getElementById("inp_sk" + String(idx) + String(i + 1))
        .value;
      if (count != i + 1) text += ",";
    }
    // alert(text);
    document.getElementById("sk_list" + String(idx)).innerHTML = text;
    return;
  }
  if (id.includes("date")) {
    var start, end, target;
    var num = input.id[input.id.length - 1];
    if (id.includes("sdate") || id.includes("fdate")) {
      start = document.getElementById("inp_sdate" + num).value;
      end = document.getElementById("inp_fdate" + num).value;
      target = document.getElementById("pdate" + num);
    } else if (id.includes("jdate") || id.includes("ldate")) {
      start = document.getElementById("inp_jdate" + num).value;
      end = document.getElementById("inp_ldate" + num).value;
      target = document.getElementById("wdate" + num);
    } else if (id.includes("tdate") || id.includes("rdate")) {
      start = document.getElementById("inp_tdate" + num).value;
      end = document.getElementById("inp_rdate" + num).value;
      target = document.getElementById("prdate" + num);
    }

    var parts1 = start.split("-");
    var parts2 = end.split("-");
    if (input.checked) {
      if (start != "") {
        target.innerHTML =
          mapMonth(parseInt(parts1[1])) + parts1[0] + " - " + "Present";
      }
      return;
    }
    if (start != "" && end != "") {
      target.innerHTML =
        mapMonth(parseInt(parts1[1])) +
        parts1[0] +
        " - " +
        mapMonth(parseInt(parts2[1])) +
        parts2[0];
    }

    return;
  }
  document.getElementById(id).innerHTML = text;
}

function mapMonth(n) {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[n - 1];
}
