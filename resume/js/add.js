//inst -- instance
var add_edu = function() {
  var main_div = document.createElement("div");
  main_div.appendChild(document.createElement("hr"));
  main_div.classList.add("container");
  main_div.id = "edu_" + ++add_edu.count;

  var inst_div = document.createElement("div");
  inst_div.className = "row";

  var inst_label = document.createElement("label");
  inst_label.classList.add("col-md-3", "col-md-3");
  inst_label.innerHTML = "Instituion";
  inst_div.appendChild(inst_label);

  var inst_section = document.createElement("section");
  inst_section.classList.add("col-md-9", "col-sm-9", "textbox");

  var inst_inp = document.createElement("input");
  inst_inp.setAttribute("type", "text");
  inst_inp.setAttribute("placeholder", "Institution Name");
  inst_inp.setAttribute("onkeyup", "update(this)");
  inst_inp.id = "inp_inst" + add_edu.count;

  inst_section.appendChild(inst_inp);
  inst_div.appendChild(inst_section);

  var uni_div = document.createElement("div");
  uni_div.className = "row";

  var uni_label = document.createElement("label");
  uni_label.classList.add("col-md-3", "col-md-3");
  uni_label.innerHTML = "University";
  uni_div.appendChild(uni_label);

  var uni_section = document.createElement("section");
  uni_section.classList.add("col-md-9", "col-sm-9", "textbox");

  var uni_inp = document.createElement("input");
  uni_inp.setAttribute("type", "text");
  uni_inp.setAttribute("placeholder", "University Name");
  uni_inp.setAttribute("onkeyup", "update(this)");
  uni_inp.id = "inp_uni" + add_edu.count;

  uni_section.appendChild(uni_inp);
  uni_div.appendChild(uni_section);

  var loc_div = document.createElement("div");
  loc_div.className = "row";

  var loc_label1 = document.createElement("label");
  loc_label1.classList.add("col-md-2", "col-md-2");
  loc_label1.innerHTML = "City";
  loc_div.appendChild(loc_label1);

  var loc_section1 = document.createElement("section");
  loc_section1.classList.add("col-md-4", "col-sm-4", "textbox");

  var loc_inp1 = document.createElement("input");
  loc_inp1.setAttribute("type", "text");
  loc_inp1.setAttribute("placeholder", "City");
  loc_inp1.setAttribute("onkeyup", "update(this)");
  loc_inp1.id = "inp_city" + add_edu.count;

  loc_section1.appendChild(loc_inp1);
  loc_div.appendChild(loc_section1);

  var loc_label2 = document.createElement("label");
  loc_label2.classList.add("col-md-2", "col-md-2");
  loc_label2.innerHTML = "State";
  loc_div.appendChild(loc_label2);

  var loc_section2 = document.createElement("section");
  loc_section2.classList.add("col-md-4", "col-sm-4", "textbox");

  var loc_inp2 = document.createElement("input");
  loc_inp2.setAttribute("type", "text");
  loc_inp2.setAttribute("placeholder", "State");
  loc_inp2.setAttribute("onkeyup", "update(this)");
  loc_inp2.id = "inp_state" + add_edu.count;

  loc_section2.appendChild(loc_inp2);
  loc_div.appendChild(loc_section2);

  var prog_div = document.createElement("div");
  prog_div.className = "row";

  var prog_label = document.createElement("label");
  prog_label.classList.add("col-md-2", "col-md-2");
  prog_label.innerHTML = "Study Program";
  prog_div.appendChild(prog_label);

  var prog_section = document.createElement("section");
  prog_section.classList.add("col-md-8", "col-sm-8", "textbox");

  var prog_inp = document.createElement("input");
  prog_inp.setAttribute("type", "text");
  prog_inp.setAttribute("placeholder", "B.Tech/Sec. School etc..");
  prog_inp.setAttribute("onkeyup", "update(this)");
  prog_inp.id = "inp_stdp" + add_edu.count;

  prog_section.appendChild(prog_inp);
  prog_div.appendChild(prog_section);

  var fos_div = document.createElement("div");
  fos_div.className = "row";

  var fos_label = document.createElement("label");
  fos_label.classList.add("col-md-2", "col-md-2");
  fos_label.innerHTML = "Field Of Study";
  fos_div.appendChild(fos_label);

  var fos_section = document.createElement("section");
  fos_section.classList.add("col-md-8", "col-sm-8", "textbox");

  var fos_inp = document.createElement("input");
  fos_inp.setAttribute("type", "text");
  fos_inp.setAttribute("placeholder", "Field Of Study(Can be Blank)");
  fos_inp.setAttribute("onkeyup", "update(this)");
  fos_inp.id = "inp_fos" + add_edu.count;

  fos_section.appendChild(fos_inp);
  fos_div.appendChild(fos_section);

  var info_div = document.createElement("div");
  info_div.className = "row";

  var info_label1 = document.createElement("label");
  info_label1.classList.add("col-md-2", "col-md-2");
  info_label1.innerHTML = "Year";
  info_div.appendChild(info_label1);

  var info_section1 = document.createElement("section");
  info_section1.classList.add("col-md-4", "col-sm-4", "textbox");

  var info_inp1 = document.createElement("input");
  info_inp1.setAttribute("type", "text");
  info_inp1.setAttribute("placeholder", "Year");
  info_inp1.setAttribute("onkeyup", "update(this)");
  info_inp1.id = "inp_yr" + add_edu.count;

  info_section1.appendChild(info_inp1);
  info_div.appendChild(info_section1);

  var info_label2 = document.createElement("label");
  info_label2.classList.add("col-md-2", "col-md-2");
  info_label2.innerHTML = "CGPA/%";
  info_div.appendChild(info_label2);

  var info_section2 = document.createElement("section");
  info_section2.classList.add("col-md-4", "col-sm-4", "textbox");

  var info_inp2 = document.createElement("input");
  info_inp2.setAttribute("type", "text");
  info_inp2.setAttribute("placeholder", "CGPA/%");
  info_inp2.setAttribute("onkeyup", "update(this)");
  info_inp2.id = "inp_cgpa" + add_edu.count;

  info_section2.appendChild(info_inp2);
  info_div.appendChild(info_section2);

  main_div.appendChild(prog_div);
  main_div.appendChild(fos_div);
  main_div.appendChild(uni_div);
  main_div.appendChild(info_div);
  main_div.appendChild(inst_div);
  main_div.appendChild(loc_div);

  var element = document.getElementById("edu_" + (add_edu.count - 1));
  element.parentNode.insertBefore(main_div, element.nextSibling);

  //ADDITION TO RESUME :
  var section = document.createElement("li");
  section.style.padding = "0";

  var span1 = document.createElement("span");
  span1.classList.add("col-md-4", "col-sm-8", "text-left");
  span1.style.width = "100%";
  span1.style.fontSize = "medium";
  span1.id = "stdp" + add_edu.count;

  var span2 = document.createElement("span");
  span2.classList.add("col-sm-3", "text-left");
  span2.style.width = "100%";
  span2.style.fontSize = "0.8rem";
  span2.id = "yr" + add_edu.count;

  var span3 = document.createElement("span");
  span3.classList.add("col-sm-3", "text-left");
  span3.style.width = "100%";
  span3.style.fontSize = "0.8rem";
  span3.id = "cgpa" + add_edu.count;

  var span4 = document.createElement("span");
  span4.classList.add("col-md-6", "col-sm-14");
  span4.style.width = "100%";
  span4.style.fontSize = "medium";
  span4.id = "uni" + add_edu.count;

  var span5 = document.createElement("span");
  span5.classList.add("col-md-6", "col-sm-6");
  span5.style.width = "100%";
  span5.style.fontSize = "medium";
  span5.id = "inst" + add_edu.count;

  section.appendChild(span1);
  section.appendChild(document.createElement("br"));
  section.appendChild(span2);
  section.appendChild(span3);
  section.appendChild(document.createElement("br"));
  section.appendChild(span4);
  section.appendChild(document.createElement("br"));
  section.appendChild(span5);

  var edu = document.getElementById("education");

  edu.appendChild(section);
};
var add_proj = function() {
  var main_div = document.createElement("div");
  main_div.appendChild(document.createElement("hr"));
  main_div.classList.add("container");
  main_div.id = "proj_" + ++add_proj.count;

  var inst_div = document.createElement("div");
  inst_div.className = "row";

  var inst_label = document.createElement("label");
  inst_label.classList.add("col-md-3", "col-md-3");
  inst_label.innerHTML = "Title";
  inst_div.appendChild(inst_label);

  var inst_section = document.createElement("section");
  inst_section.classList.add("col-md-9", "col-sm-9", "textbox");

  var inst_inp = document.createElement("input");
  inst_inp.setAttribute("type", "text");
  inst_inp.setAttribute("placeholder", "Title Of Project");
  inst_inp.setAttribute("onkeyup", "update(this)");
  inst_inp.id = "inp_ptitle" + add_proj.count;

  inst_section.appendChild(inst_inp);
  inst_div.appendChild(inst_section);

  var info_div = document.createElement("div");
  info_div.className = "row";

  var info_label1 = document.createElement("label");
  info_label1.classList.add("col-md-3", "col-md-3");
  info_label1.innerHTML = "Start Date";
  info_div.appendChild(info_label1);

  var info_section1 = document.createElement("section");
  info_section1.classList.add("col-md-9", "col-sm-9");
  info_section1.setAttribute("margin-bottom", "5%");

  var info_inp1 = document.createElement("input");
  info_inp1.setAttribute("type", "month");
  info_inp1.setAttribute("placeholder", "MM-YYYY format");
  info_inp1.setAttribute("onkeyup", "update(this)");
  info_inp1.setAttribute("value", "2016-03");
  info_inp1.id = "inp_sdate" + add_proj.count;

  info_section1.appendChild(info_inp1);
  info_div.appendChild(info_section1);

  var info_label2 = document.createElement("label");
  info_label2.classList.add("col-md-3", "col-md-3");
  info_label2.innerHTML = "End Date";
  info_div.appendChild(info_label2);

  var info_section2 = document.createElement("section");
  info_section2.classList.add("col-md-9", "col-sm-9");
  info_section2.style.marginBottom = "5%";

  var info_inp2 = document.createElement("input");
  info_inp2.setAttribute("type", "month");
  info_inp2.setAttribute("placeholder", "MM-YYYY format");
  info_inp2.setAttribute("onkeyup", "update(this)");
  info_inp2.setAttribute("value", "2026-03");
  info_inp2.id = "inp_fdate" + add_proj.count;

  var ask_div = document.createElement("div");
  ask_div.className = "col-sm-12";

  var ask_span = document.createElement("span");
  ask_span.className = "col-sm-9";
  ask_span.style.padding = "0";
  ask_span.style.fontSize = "small";
  ask_span.style.color = "white";
  ask_span.innerHTML = "Present";

  var ask_inp = document.createElement("input");
  ask_inp.setAttribute("onchange", "hide(this)");
  ask_inp.setAttribute("type", "checkbox");
  ask_inp.style.transform = "scale(1.3)";
  ask_inp.className = "col-sm-3";
  ask_inp.value = "Present";
  ask_inp.id = "chk_fdate" + add_proj.count;

  ask_div.appendChild(ask_span);
  ask_div.appendChild(ask_inp);

  info_section2.appendChild(info_inp2);
  info_div.appendChild(info_section2);

  info_div.appendChild(document.createElement("br"));
  info_div.appendChild(ask_div);
  info_div.appendChild(document.createElement("br"));

  var info_label3 = document.createElement("label");
  info_label3.classList.add("col-md-12", "col-md-12", "text-center");
  info_label3.innerHTML = "Project Description";
  info_label3.style.margin = "5% 0 2% 0";
  info_div.appendChild(info_label3);

  var info_section3 = document.createElement("section");
  info_section3.classList.add("col-md-12", "textarea");
  info_section3.style.marginBottom = "5%";

  var info_inp3 = document.createElement("textarea");
  info_inp3.className = "col-md-12";
  info_inp3.id = "inp_pdesc" + add_proj.count;
  info_inp3.setAttribute("type", "text");
  info_inp3.setAttribute("placeholder", "Project Description");
  info_inp3.setAttribute("onkeyup", "update(this)");

  info_section3.appendChild(info_inp3);
  info_div.appendChild(info_section3);

  main_div.appendChild(inst_div);
  main_div.appendChild(info_div);

  var element = document.getElementById("proj_" + (add_proj.count - 1));
  element.parentNode.insertBefore(main_div, element.nextSibling);

  // //ADDITION TO RESUME :

  var section = document.createElement("li");
  section.style.padding = "0";

  var span1 = document.createElement("span");
  span1.classList.add("col-md-12", "col-sm-8", "text-left");
  span1.style.width = "100%";
  span1.style.fontSize = "medium";
  span1.id = "ptitle" + add_proj.count;

  var span2 = document.createElement("span");
  span2.classList.add("col-md-12", "col-sm-12", "font-italic");
  span2.style.width = "100%";
  span2.style.fontSize = "0.75rem";
  span2.id = "pdate" + add_proj.count;

  var span3 = document.createElement("div");
  span3.classList.add("col-md-12", "col-sm-12");
  span3.style.fontSize = "0.9rem";
  span3.id = "pdesc" + add_proj.count;
  span3.style.overflowWrap = "break-word";

  section.appendChild(span1);
  section.appendChild(document.createElement("br"));
  section.appendChild(span2);
  section.appendChild(document.createElement("br"));
  section.appendChild(span3);
  section.appendChild(document.createElement("br"));
  var proj = document.getElementById("projects");

  proj.appendChild(section);
};
var add_wrkexp = function() {
  var main_div = document.createElement("div");
  main_div.appendChild(document.createElement("hr"));
  main_div.classList.add("container");
  main_div.id = "exp_" + ++add_wrkexp.count;

  var inst_div = document.createElement("div");
  inst_div.className = "row";

  var inst_label = document.createElement("label");
  inst_label.classList.add("col-md-3", "col-md-3");
  inst_label.innerHTML = "Job Title";
  inst_div.appendChild(inst_label);

  var inst_section = document.createElement("section");
  inst_section.classList.add("col-md-9", "col-sm-9", "textbox");
  inst_section.style.marginBottom = "2%";

  var inst_inp = document.createElement("input");
  inst_inp.setAttribute("type", "text");
  inst_inp.setAttribute("placeholder", "Job Title");
  inst_inp.setAttribute("onkeyup", "update(this)");
  inst_inp.id = "inp_jtitle" + add_wrkexp.count;

  inst_section.appendChild(inst_inp);
  inst_div.appendChild(inst_section);

  var org_label = document.createElement("label");
  org_label.classList.add("col-md-3", "col-md-3");
  org_label.innerHTML = "Organisation /Company";
  inst_div.appendChild(org_label);

  var org_section = document.createElement("section");
  org_section.classList.add("col-md-9", "col-sm-9", "textbox");

  var org_inp = document.createElement("input");
  org_inp.setAttribute("type", "text");
  org_inp.setAttribute("placeholder", "Organisation /Company");
  org_inp.setAttribute("onkeyup", "update(this)");
  org_inp.id = "inp_oname" + add_wrkexp.count;

  org_section.appendChild(org_inp);
  inst_div.appendChild(org_section);

  var info_div = document.createElement("div");
  info_div.className = "row";

  var date_label = document.createElement("label");
  date_label.classList.add("col-md-12", "col-md-12", "text-center");
  date_label.innerHTML = "Job Period";
  info_div.appendChild(date_label);

  var info_label1 = document.createElement("label");
  info_label1.classList.add("col-md-3", "col-md-3");
  info_label1.innerHTML = "From";
  info_div.appendChild(info_label1);

  var info_section1 = document.createElement("section");
  info_section1.classList.add("col-md-9", "col-sm-9");
  info_section1.setAttribute("margin-bottom", "5%");

  var info_inp1 = document.createElement("input");
  info_inp1.setAttribute("type", "month");
  info_inp1.setAttribute("placeholder", "MM-YYYY format");
  info_inp1.setAttribute("onkeyup", "update(this)");
  info_inp1.setAttribute("value", "2016-03");
  info_inp1.id = "inp_jdate" + add_wrkexp.count;

  info_section1.appendChild(info_inp1);
  info_div.appendChild(info_section1);

  var info_label2 = document.createElement("label");
  info_label2.classList.add("col-md-3", "col-md-3");
  info_label2.innerHTML = "To";
  info_div.appendChild(info_label2);

  var info_section2 = document.createElement("section");
  info_section2.classList.add("col-md-9", "col-sm-9");
  info_section2.style.marginBottom = "5%";

  var info_inp2 = document.createElement("input");
  info_inp2.setAttribute("type", "month");
  info_inp2.setAttribute("placeholder", "MM-YYYY format");
  info_inp2.setAttribute("onkeyup", "update(this)");
  info_inp2.setAttribute("value", "2026-03");
  info_inp2.id = "inp_ldate" + add_wrkexp.count;

  info_section2.appendChild(info_inp2);
  info_div.appendChild(info_section2);

  var ask_div = document.createElement("div");
  ask_div.className = "col-sm-12";

  var ask_span = document.createElement("span");
  ask_span.className = "col-sm-9";
  ask_span.style.padding = "0";
  ask_span.style.fontSize = "small";
  ask_span.style.color = "white";
  ask_span.innerHTML = "Present";

  var ask_inp = document.createElement("input");
  ask_inp.setAttribute("onchange", "hide(this)");
  ask_inp.setAttribute("type", "checkbox");
  ask_inp.style.transform = "scale(1.3)";
  ask_inp.className = "col-sm-3";
  ask_inp.value = "Present";
  ask_inp.id = "chk_ldate" + add_wrkexp.count;

  ask_div.appendChild(ask_span);
  ask_div.appendChild(ask_inp);

  info_section2.appendChild(info_inp2);
  info_div.appendChild(info_section2);

  info_div.appendChild(document.createElement("br"));
  info_div.appendChild(ask_div);
  info_div.appendChild(document.createElement("br"));

  var info_label3 = document.createElement("label");
  info_label3.classList.add("col-md-12", "col-md-12", "text-center");
  info_label3.innerHTML = "Work Description";
  info_label3.style.margin = "5% 0 2% 0";
  info_div.appendChild(info_label3);

  var info_section3 = document.createElement("section");
  info_section3.classList.add("col-md-12", "textarea");
  info_section3.style.marginBottom = "5%";

  var info_inp3 = document.createElement("textarea");
  info_inp3.className = "col-md-12";
  info_inp3.id = "inp_wdesc" + add_wrkexp.count;
  info_inp3.setAttribute("type", "text");
  info_inp3.setAttribute("placeholder", "Worked On...");
  info_inp3.setAttribute("onkeyup", "update(this)");

  info_section3.appendChild(info_inp3);
  info_div.appendChild(info_section3);

  main_div.appendChild(inst_div);
  main_div.appendChild(info_div);

  var element = document.getElementById("exp_" + (add_wrkexp.count - 1));
  element.parentNode.insertBefore(main_div, element.nextSibling);

  // //ADDITION TO RESUME :

  var section = document.createElement("li");
  section.style.padding = "0";

  var span1 = document.createElement("span");
  span1.classList.add("col-md-12", "col-sm-8", "text-left");
  span1.style.width = "100%";
  span1.style.fontSize = "medium";
  span1.id = "jtitle" + add_wrkexp.count;

  var span2 = document.createElement("span");
  span2.classList.add("col-md-12", "col-sm-12", "font-bold");
  span2.style.width = "100%";
  span2.style.fontSize = "0.9rem";
  span2.id = "oname" + add_wrkexp.count;

  var span3 = document.createElement("span");
  span3.classList.add("col-md-12", "col-sm-13", "font-italic");
  span3.style.width = "100%";
  span3.style.fontSize = "0.75rem";
  span3.id = "wdate" + add_wrkexp.count;

  var span4 = document.createElement("div");
  span4.classList.add("col-md-12", "col-sm-12");
  span4.style.fontSize = "0.85rem";
  span4.id = "wdesc" + add_wrkexp.count;
  span4.style.overflowWrap = "break-word";

  section.appendChild(span1);
  section.appendChild(document.createElement("br"));
  section.appendChild(span2);
  // section.appendChild(document.createElement("br"));
  section.appendChild(span3);
  section.appendChild(document.createElement("br"));
  section.appendChild(span4);
  section.appendChild(document.createElement("br"));
  var exp = document.getElementById("work_experience");

  exp.appendChild(section);
};
var add_por = function() {
  var main_div = document.createElement("div");
  main_div.appendChild(document.createElement("hr"));
  main_div.classList.add("container");
  main_div.id = "por_" + ++add_por.count;

  var inst_div = document.createElement("div");
  inst_div.className = "row";

  var inst_label = document.createElement("label");
  inst_label.classList.add("col-md-3", "col-md-3");
  inst_label.innerHTML = "Post Held";
  inst_div.appendChild(inst_label);

  var inst_section = document.createElement("section");
  inst_section.classList.add("col-md-9", "col-sm-9", "textbox");
  inst_section.style.marginBottom = "2%";

  var inst_inp = document.createElement("input");
  inst_inp.setAttribute("type", "text");
  inst_inp.setAttribute("placeholder", "Post Held...");
  inst_inp.setAttribute("onkeyup", "update(this)");
  inst_inp.id = "inp_rtitle" + add_por.count;

  inst_section.appendChild(inst_inp);
  inst_div.appendChild(inst_section);

  var org_label = document.createElement("label");
  org_label.classList.add("col-md-3", "col-md-3");
  org_label.innerHTML = "Organisation /Company";
  inst_div.appendChild(org_label);

  var org_section = document.createElement("section");
  org_section.classList.add("col-md-9", "col-sm-9", "textbox");

  var org_inp = document.createElement("input");
  org_inp.setAttribute("type", "text");
  org_inp.setAttribute("placeholder", "Organisation /Company");
  org_inp.setAttribute("onkeyup", "update(this)");
  org_inp.id = "inp_cname" + add_por.count;

  org_section.appendChild(org_inp);
  inst_div.appendChild(org_section);

  var info_div = document.createElement("div");
  info_div.className = "row";

  var date_label = document.createElement("label");
  date_label.classList.add("col-md-12", "col-md-12", "text-center");
  date_label.innerHTML = "Holding Period";
  info_div.appendChild(date_label);

  var info_label1 = document.createElement("label");
  info_label1.classList.add("col-md-3", "col-md-3");
  info_label1.innerHTML = "From";
  info_div.appendChild(info_label1);

  var info_section1 = document.createElement("section");
  info_section1.classList.add("col-md-9", "col-sm-9");
  info_section1.setAttribute("margin-bottom", "5%");

  var info_inp1 = document.createElement("input");
  info_inp1.setAttribute("type", "month");
  info_inp1.setAttribute("placeholder", "MM-YYYY format");
  info_inp1.setAttribute("onkeyup", "update(this)");
  info_inp1.setAttribute("value", "2016-03");
  info_inp1.id = "inp_tdate" + add_por.count;

  info_section1.appendChild(info_inp1);
  info_div.appendChild(info_section1);

  var info_label2 = document.createElement("label");
  info_label2.classList.add("col-md-3", "col-md-3");
  info_label2.innerHTML = "To";
  info_div.appendChild(info_label2);

  var info_section2 = document.createElement("section");
  info_section2.classList.add("col-md-9", "col-sm-9");
  info_section2.style.marginBottom = "5%";

  var info_inp2 = document.createElement("input");
  info_inp2.setAttribute("type", "month");
  info_inp2.setAttribute("placeholder", "MM-YYYY format");
  info_inp2.setAttribute("onkeyup", "update(this)");
  info_inp2.setAttribute("value", "2026-03");
  info_inp2.id = "inp_rdate" + add_por.count;

  info_section2.appendChild(info_inp2);
  info_div.appendChild(info_section2);

  var ask_div = document.createElement("div");
  ask_div.className = "col-sm-12";

  var ask_span = document.createElement("span");
  ask_span.className = "col-sm-9";
  ask_span.style.padding = "0";
  ask_span.style.fontSize = "small";
  ask_span.style.color = "white";
  ask_span.innerHTML = "Present";

  var ask_inp = document.createElement("input");
  ask_inp.setAttribute("onchange", "hide(this)");
  ask_inp.setAttribute("type", "checkbox");
  ask_inp.style.transform = "scale(1.3)";
  ask_inp.className = "col-sm-3";
  ask_inp.value = "Present";
  ask_inp.id = "chk_rdate" + add_por.count;

  ask_div.appendChild(ask_span);
  ask_div.appendChild(ask_inp);

  info_section2.appendChild(info_inp2);
  info_div.appendChild(info_section2);

  info_div.appendChild(document.createElement("br"));
  info_div.appendChild(ask_div);
  info_div.appendChild(document.createElement("br"));

  var info_label3 = document.createElement("label");
  info_label3.classList.add("col-md-12", "col-md-12", "text-center");
  info_label3.innerHTML = "Work Description";
  info_label3.style.margin = "5% 0 2% 0";
  info_div.appendChild(info_label3);

  var info_section3 = document.createElement("section");
  info_section3.classList.add("col-md-12", "textarea");
  info_section3.style.marginBottom = "5%";

  var info_inp3 = document.createElement("textarea");
  info_inp3.className = "col-md-12";
  info_inp3.id = "inp_rdesc" + add_por.count;
  info_inp3.setAttribute("type", "text");
  info_inp3.setAttribute("placeholder", "Worked On...");
  info_inp3.setAttribute("onkeyup", "update(this)");

  info_section3.appendChild(info_inp3);
  info_div.appendChild(info_section3);

  main_div.appendChild(inst_div);
  main_div.appendChild(info_div);

  var element = document.getElementById("por_" + (add_por.count - 1));
  element.parentNode.insertBefore(main_div, element.nextSibling);

  // //ADDITION TO RESUME :
  var section = document.createElement("li");
  section.style.padding = "0";

  var span1 = document.createElement("span");
  span1.classList.add("col-md-12", "col-sm-8", "text-left");
  span1.style.width = "100%";
  span1.style.fontSize = "medium";
  span1.id = "rtitle" + add_por.count;

  var span2 = document.createElement("span");
  span2.classList.add("col-md-7", "col-sm-12", "font-bold");
  span2.style.width = "100%";
  span2.style.fontSize = "0.9rem";
  span2.id = "cname" + add_por.count;

  var span3 = document.createElement("span");
  span3.classList.add("col-md-5", "col-sm-5", "font-italic");
  span3.style.width = "100%";
  span3.style.fontSize = "0.75rem";
  span3.id = "prdate" + add_por.count;

  var span4 = document.createElement("div");
  span4.classList.add("col-md-12", "col-sm-12");
  span4.style.fontSize = "0.85rem";
  span4.id = "rdesc" + add_por.count;
  span4.style.overflowWrap = "break-word";

  section.appendChild(span1);
  section.appendChild(document.createElement("br"));
  section.appendChild(span2);
  section.appendChild(span3);
  section.appendChild(document.createElement("br"));
  section.appendChild(span4);
  section.appendChild(document.createElement("br"));
  var por = document.getElementById("positions_of_responibility");

  por.appendChild(section);
};
var add_skill = function(num) {
  var ins = document.getElementById("inp_skill_set_" + num);
  var count = ins.childElementCount;

  var section = document.createElement("section");
  section.classList.add("col-sm-6", "textbox");
  section.style.marginBottom = "2%";

  var input = document.createElement("input");
  input.setAttribute("placeholder", "jsp/js/ajax..");
  input.setAttribute("type", "text");
  input.setAttribute("onkeyup", "update(this)");
  input.id = "inp_sk" + num + ++count;

  section.appendChild(input);

  var skl_set = document.getElementById("inp_skill_set_" + num);
  skl_set.appendChild(section);

  // var span = document.createElement("span")
  // span.classList.add("col-md-12","text-left")
  // span.style.textEmphasis = "700px"
  // span.style.fontSize = "small"
  // span.style.overflowWrap = "break-word"
  // span.style.padding = "0"
  // span.id = "sk_list" + num

  // ins.appendChild(span)
  // ins.appendChild(document.createElement("br"))
};
var add_skl_set = function() {
  var div = document.createElement("div");
  div.style.marginBottom = "2%";

  var span = document.createElement("span");
  span.classList.add("col-sm-12", "text-left");
  span.innerHTML = "Skills";

  div.appendChild(span);

  var section1 = document.createElement("section");
  section1.id = "inp_skill_set_" + ++add_skl_set.count;

  var section2 = document.createElement("section");
  section2.classList.add("col-sm-6", "textbox");
  section2.style.marginBottom = "2%";

  var inp = document.createElement("input");
  inp.setAttribute("type", "text");
  inp.setAttribute("placeholder", "python etc..");
  inp.setAttribute("onkeyup", "update(this)");
  inp.id = "inp_sk" + add_skl_set.count + "1";

  section2.appendChild(inp);
  section1.appendChild(section2);

  div.appendChild(section1);

  var button1 = document.createElement("button");
  button1.id = "add_skl" + add_skl_set.count;
  button1.setAttribute("onClick", "add_skill(" + add_skl_set.count + ");");
  button1.innerHTML = "Add Skill";

  var button2 = document.createElement("button");
  button2.id = "rem_skl" + add_skl_set.count;
  button2.setAttribute("onClick", "rem_skl(" + add_skl_set.count + ");");
  button2.innerHTML = "Remove Skill";

  div.appendChild(button1);
  div.appendChild(button2);

  var div2 = document.createElement("div");
  div2.className = "row";

  var span2 = document.createElement("span");
  span2.classList.add("col-sm-4", "text-left");
  span2.style.color = "white";
  span2.innerHTML = "Skill Heading";

  var section3 = document.createElement("section");
  section3.classList.add("col-sm-8", "textbox");

  var inp2 = document.createElement("input");
  inp2.setAttribute("type", "text");
  inp2.setAttribute("placeholder", "OOP/ML");
  inp2.setAttribute("onkeyup", "update(this)");
  inp2.id = "inp_sk_title" + add_skl_set.count;

  section3.appendChild(inp2);

  div2.appendChild(span2);
  div2.appendChild(section3);

  var main = document.createElement("div");
  main.className = "container";
  main.id = "skl_" + add_skl_set.count;

  main.appendChild(document.createElement("hr"));
  main.appendChild(div2);
  main.appendChild(div);
  main.appendChild(document.createElement("br"));

  var element = document.getElementById("skl_" + (add_skl_set.count - 1));
  element.parentNode.insertBefore(main, element.nextSibling);

  //ADDITION TO RESUME
  var section6 = document.createElement("section");
  section6.className = "row";
  section6.style.margin = "0";

  var span6 = document.createElement("span");
  span6.classList.add("col-sm-3", "text-left");
  span6.style.height = "100%";
  span6.style.fontSize = "small";
  span6.style.overflowWrap = "break-word";

  var bold = document.createElement("b");
  bold.id = "sk_title" + add_skl_set.count;

  span6.appendChild(bold);

  section6.appendChild(span6);

  var section7 = document.createElement("section");
  section7.classList.add(
    "col-md-9",
    "justify-content-left",
    "align-content-left"
  );
  section7.style.padding = "0";
  section7.id = "skill_set_" + add_skl_set.count;

  var span7 = document.createElement("span");
  span7.classList.add("col-md-12", "text-left", "ml-3");
  span7.style.textEmphasis = "700px";
  span7.style.fontSize = "small";
  span7.style.overflowWrap = "break-word";
  span7.style.padding = "0";
  span7.id = "sk_list" + add_skl_set.count;

  section7.appendChild(span7);
  section6.appendChild(section7);

  var ins = document.getElementById("skils");
  ins.appendChild(section6);
};
var rem_skl_set = function() {
  if (add_skl_set.count == 1) return;
  var rem = document.getElementById("skl_" + add_skl_set.count);
  rem.remove();
  add_skl_set.count--;

  rem = document.getElementById("skils");
  rem.lastChild.remove();
  return;
};
var rem_skl = function(num) {
  if (
    document.getElementById("inp_skill_set_" + String(num)).childElementCount ==
    1
  )
    return;
  var rem = document.getElementById("inp_skill_set_" + String(num));
  rem.lastChild.remove();
  var idx = num;
  var count = document.getElementById("inp_skill_set_" + idx).childElementCount;
  text = "";
  for (var i = 0; i < count; i++) {
    text += document.getElementById("inp_sk" + String(idx) + String(i + 1))
      .value;
    if (count != i + 1) text += ",";
  }
  document.getElementById("sk_list" + String(idx)).innerHTML = text;
  return;
};
var rem_edu = function() {
  if (add_edu.count == 1) return;
  var rem = document.getElementById("edu_" + add_edu.count);
  rem.remove();
  add_edu.count--;

  rem = document.getElementById("education");
  rem.lastChild.remove();
  return;
};
var toggle_edu = function() {
  var elem = document.getElementById("education").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_edu");
  button.innerHTML =
    button.innerHTML == "Hide Education" ? "Show Education" : "Hide Education";
  for (let i = 1; i <= add_edu.count; i++) {
    var elem = document.getElementById("edu_" + String(i));
    elem.style.display = elem.style.display == "none" ? "block" : "none";
  }
  var button = document.getElementById("add_edu");
  button.style.display = button.style.display == "none" ? "block" : "none";
  var button = document.getElementById("rem_edu");
  button.style.display = button.style.display == "none" ? "block" : "none";
};
var rem_proj = function() {
  if (add_proj.count == 1) return;
  var rem = document.getElementById("proj_" + add_proj.count);
  rem.remove();
  add_proj.count--;

  rem = document.getElementById("projects");
  rem.lastChild.remove();
  return;
};
var toggle_proj = function() {
  var elem = document.getElementById("projects").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_proj");
  button.innerHTML =
    button.innerHTML == "Hide Projects" ? "Show Projects" : "Hide Projects";
  for (let i = 1; i <= add_proj.count; i++) {
    var elem = document.getElementById("proj_" + String(i));
    elem.style.display = elem.style.display == "none" ? "block" : "none";
  }
  var button = document.getElementById("add_proj");
  button.style.display = button.style.display == "none" ? "block" : "none";
  var button = document.getElementById("rem_proj");
  button.style.display = button.style.display == "none" ? "block" : "none";
};
var rem_por = function() {
  if (add_por.count == 1) return;
  var rem = document.getElementById("por_" + add_por.count);
  rem.remove();
  add_por.count--;

  rem = document.getElementById("positions_of_responibility");
  rem.lastChild.remove();
  return;
};
var toggle_por = function() {
  var elem = document.getElementById("positions_of_responibility").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_por");
  button.innerHTML =
    button.innerHTML == "Hide Section" ? "Show Section" : "Hide Section";
  for (let i = 1; i <= add_por.count; i++) {
    var elem = document.getElementById("por_" + String(i));
    elem.style.display = elem.style.display == "none" ? "block" : "none";
  }
  var button = document.getElementById("add_por");
  button.style.display = button.style.display == "none" ? "block" : "none";
  var button = document.getElementById("rem_por");
  button.style.display = button.style.display == "none" ? "block" : "none";
};
var rem_wrkexp = function() {
  if (add_wrkexp.count == 1) return;
  var rem = document.getElementById("exp_" + add_wrkexp.count);
  rem.remove();
  add_wrkexp.count--;

  rem = document.getElementById("work_experience");
  rem.lastChild.remove();
  return;
};
var toggle_wrkexp = function() {
  var elem = document.getElementById("work_experience").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_wrkexp");
  button.innerHTML =
    button.innerHTML == "Hide Experience"
      ? "Show Work Experience"
      : "Hide Experience";
  for (let i = 1; i <= add_wrkexp.count; i++) {
    var elem = document.getElementById("exp_" + String(i));
    elem.style.display = elem.style.display == "none" ? "block" : "none";
  }
  var button = document.getElementById("add_wrkexp");
  button.style.display = button.style.display == "none" ? "block" : "none";
  var button = document.getElementById("rem_wrkexp");
  button.style.display = button.style.display == "none" ? "block" : "none";
};

var toggle_skills = function() {
  var elem = document.getElementById("skils").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_skills");
  button.innerHTML =
    button.innerHTML == "Hide Skills" ? "Show Skills" : "Hide Skills";
  for (let i = 1; i <= add_skl_set.count; i++) {
    var elem = document.getElementById("skl_" + String(i));
    elem.style.display = elem.style.display == "none" ? "block" : "none";
  }
  var button = document.getElementById("add_skl_set");
  button.style.display = button.style.display == "none" ? "block" : "none";
  var button = document.getElementById("rem_skl_set");
  button.style.display = button.style.display == "none" ? "block" : "none";
};
var add_mob = function() {
  var label = document.createElement("label");
  label.classList.add("col-sm-4");
  label.innerHTML = "Mobile No.";

  var section = document.createElement("section");
  section.classList.add("col-sm-8", "textbox");
  section.style.marginBottom = "2%";

  var inp = document.createElement("input");
  inp.setAttribute("placeholder", "Mobile No.");
  inp.setAttribute("onkeyup", "update(this)");
  inp.id = "inp_mob" + ++add_mob.count;
  inp.setAttribute("minlength", "10");
  inp.setAttribute("maxlength", "10");
  inp.setAttribute("type", "number");

  section.appendChild(inp);

  var mob = document.getElementById("inp_mob");
  mob.appendChild(label);
  mob.appendChild(section);
};
var rem_mob = function() {
  if (add_mob.count == 1) return;
  var rem = document.getElementById("inp_mob" + add_mob.count).parentNode;
  rem.previousSibling.remove();
  rem.remove();
  add_mob.count--;
  return;
};
var toggle_mob = function() {
  var elem = document.getElementById("addmob").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var elem = document.getElementById("inp_mob");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_mob");
  button.innerHTML =
    button.innerHTML == "Hide Section" ? "Show Section" : "Hide Section";
  var button = document.getElementById("add_mob");
  button.style.display = button.style.display == "none" ? "block" : "none";
  var button = document.getElementById("rem_mob");
  button.style.display = button.style.display == "none" ? "block" : "none";
};
var toggle_add = function() {
  var elem = document.getElementById("addmob").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  elem = document.getElementById("cont_1");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  elem = document.getElementById("a_title");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  elem = document.getElementById("present").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  elem = document.getElementById("permanent").parentNode;
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_add");
  button.innerHTML =
    button.innerHTML == "Hide Address" ? "Show Address" : "Hide Address";
};
var toggle_prof = function() {
  elem = document.getElementById("p_title");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  elem = document.getElementById("prof").parentNode;
  var elem = document.getElementById("cont_2");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_prof");
  button.innerHTML =
    button.innerHTML == "Hide Profiles" ? "Show Profiles" : "Hide Profiles";
};
var toggle_cont = function() {
  var elem = document.getElementById("address");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  elem = document.getElementById("cont_main");
  elem.style.display = elem.style.display == "none" ? "block" : "none";
  var button = document.getElementById("toggle_cont");
  button.innerHTML =
    button.innerHTML == "Hide Personal Info"
      ? "Show Personal Info"
      : "Hide Personal Info";
};
add_mob.count = 1;
add_skl_set.count = 1;
add_wrkexp.count = 1;
add_edu.count = 1;
add_proj.count = 1;
add_por.count = 1;

function getcount(query, num) {
  if (query == "add_edu") return add_edu.count;
  if (query == "add_proj") return add_proj.count;
  if (query == "add_wrkexp") return add_wrkexp.count;
  if (query == "add_por") return add_por.count;
  if (query == "add_skl_set") return add_skl_set.count;
  if (query == "add_mob") return add_mob.count;
  if (query == "skills")
    return document.getElementById("inp_skill_set_" + String(num))
      .childElementCount;
}
