function validateEmail() {
  var email = document.getElementById("inp_email");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}

function validateMIS() {
  var mis_no = document.getElementById("inp_mis");
  var mis_id = /^\d{9}$/;
  if (mis_no.value.match(mis_id)) {
    return true;
  } else {
    alert("Invalid MIS Number!");
    return false;
  }
}

function validateContactNo() {
  var contact_no = document.getElementById("inp_contact");
  var validated_no = /^\d{10}$/;
  if (contact_no.value.match(validated_no)) {
    return true;
  } else {
    alert("Invalid Contact Number!");
    return false;
  }
}
