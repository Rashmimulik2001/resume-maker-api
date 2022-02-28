<?php
$host = "localhost";
$user = "root";
$pass = "Rashmivm#1";
$dbname = "internship_portal";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
  error_log("connection failed :<(");
  $response['status'] = 500;
  // error_log(json_encode($response));
  echo json_encode($response);
  die("Connection failed: " . $conn->connect_error);
}
$status = false;
$response = array();
$headers = getallheaders();

if ($headers["Content-Type"] == "application/json") {
  $_POST = json_decode(file_get_contents("php://input"), true);
}

if (isset($_POST['insert'])) {
  $json_str = $_POST['data'];
  $education = json_encode($json_str['json']['education'], true);
  $projects = json_encode($json_str['json']['projects'], true);
  $por = json_encode($json_str['json']['por'], true);
  $wrkexp = json_encode($json_str['json']['work_experience'], true);
  $skills = json_encode($json_str['json']['skills'], true);
  $address = json_encode($json_str['json']['address'], true);
  $id = $json_str['data']['mis'];
  error_log($id);
  $name = $json_str['data']['name'];
  $email = $json_str['data']['email'];
  $contact = $json_str['data']['contact'];
  $web = $json_str['data']['web'];
  $desc = json_encode($json_str['json']['desc'], true);
  $checks = json_encode($json_str['json']['checks'], true);

  error_log(json_encode($desc));

  $query = "INSERT INTO `resume_details` (`ID`, `Name`, `Email`, `Contact`, `Website`,`Education`, `Projects`, `POR`, `Experience`, `Address`, `Skills`,`Textareas`, `Checkboxes`) 
                  VALUES ('$id','$name', '$email','$contact','$web', '$education', '$projects','$por', '$wrkexp', '$address', '$skills','$desc','$checks');";

  if ($conn->query($query) === TRUE) {
    error_log("New record created successfully");
    $status = true;
  } else {
    error_log("Error: " . $conn->error);
  }
  if ($status) {
    $response['status'] = 200;
    error_log(json_encode($response));
    echo json_encode($response);
    die;
  } else {
    $response['status'] = 500;
    error_log(json_encode($response));
    echo json_encode($response);
    die;
  }
}
if (isset($_POST['fetch'])) {
  $uid = $_POST['uid'];
  $query = "SELECT * FROM `resume_details` WHERE  `ID` = $uid";
  $status = true;
  $result = $conn->query($query);
  $row = $result->fetch_assoc();
  if ($row) {
    error_log('data retrieved successfully');
    error_log(json_encode($row));
    $response['status'] = 200;
    $response['data'] = $row;
    error_log(json_encode($response['status']));
    echo json_encode($response);
    die;
  } else {
    $response['status'] = 500;
    error_log(json_encode($response['status']));
    echo json_encode($response);
    die;
  }
}
if (isset($_POST['update'])) {
  // error_log("HRLLO");
  $json_str = $_POST['data'];
  $mis = $_POST['uid'];

  $education = json_encode($json_str['json']['education'], true);
  $projects = json_encode($json_str['json']['projects'], true);
  $por = json_encode($json_str['json']['por'], true);
  $wrkexp = json_encode($json_str['json']['work_experience'], true);
  $skills = json_encode($json_str['json']['skills'], true);
  // $id = $json_str['data']['mis'];
  error_log($mis);
  $name = $json_str['data']['name'];
  $email = $json_str['data']['email'];
  $contact = $json_str['data']['contact'];
  $web = $json_str['data']['web'];
  $address = json_encode($json_str['json']['address'], true);
  $desc = json_encode($json_str['json']['desc'], true);
  $checks = json_encode($json_str['json']['checks'], true);

  error_log(json_encode($desc));


  $query = "UPDATE `resume_details` SET `Name`='$name',`Email`='$email',`Contact`='$contact',`Website` = '$web',`Education`='$education',`Projects`='$projects',`POR`='$por',`Experience`='$wrkexp',`Address`='$address',`Skills`='$skills',`Textareas` = '$desc', `Checkboxes` = '$checks' WHERE `ID` = '$mis' ";

  error_log($query);

  if ($conn->query($query) === TRUE) {
    error_log("New record created successfully");
    $status = true;
  } else {
    error_log("Error: " . $conn->error);
  }
  if ($status) {
    $response['status'] = 200;
    echo json_encode($response);
    die;
  } else {
    $response['status'] = 500;
    echo json_encode($response);
    die;
  }
}
