//Changes made to hide startup and application details:
/* 1. commented /startups and made it return null
   2. commented /applications
   */
const express = require("express");
const http = require("http");
const url = require("url");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const pdf = require("html-pdf");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const PORT = 4000;
const userRoutes = express.Router();
const JSRSASign = require("jsrsasign");
const connectDB = require("./db");
//const bodyParser = require('body-parser');

const promise = require("promise");
const schemas = require("./db.model");
//let users = db.users;
var users = schemas.users;
var startups = schemas.startup;
var applications = schemas.applications;
var student_resumes = schemas.student_resumes;
//application = schemas.application;
const app = express();
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(bodyParser.json());
app.use(cors());
//const jsonParser = bodyParser.json();
const textParser = bodyParser.text({ type: 'text/html', limit: '50mb'});
//app.use(express.static('/opt/portal/api/'));
//app.use(express.static('/home/pranav/Desktop/Pranav/react/login-git/api/'));
app.use('/login', userRoutes);
connectDB();
//mongoose.connect('mongodb://127.0.0.1:27017/psf', {useNewUrlParser: true});
//const connection = mongoose.connection;

/*
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
*/

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

userRoutes.route("/userexists").post(function(req, res) {
  const user_name = req.body.user_name;
  users.find(function(err, usr) {
    if (err) {
      console.log(err);
    } else {
      flag = 1;
      for (index = 0; index < usr.length; index++) {
        if (usr[index].user_name == user_name) {
          //res.json(user_name + "res");
          res.status(200).json({ "UserNameExists": 1 });
          flag = 0;
          break;
          //res.json(usr);
        }
        //res.status(401).json({Success: 0, Error: "Incorrect Password"});
      }
      if (flag) {
        res.status(200).json({UserNameExists: 0});
        //res.json(usr);
      }
    }
  });
});
userRoutes.route("/startupexists").post(function(req, res) {
  const name = req.body.name;
  startups.find(function(err, startup) {
    if (err) {
      console.log(err);
    } else {
      flag = 1;
      for (index = 0; index < startup.length; index++) {
        if (startup[index].name == name) {
          //res.json(user_name + "res");
          res.status(204).json({ NameExists: 1 });
          flag = 0;
          break;
          //res.json(usr);
        }
        //res.status(401).json({Success: 0, Error: "Incorrect Password"});
      }
      if (flag) {
        //res.status(200).json({UserNameExists: 0});
        res.json(startup);
      }
    }
  });
});
var authenticate = async function(user_name, password) {
  nprom = get_users()
    .then(function(response) {
      console.log(response);
      console.log("false");
      return false;
    })
    .catch(err => {
      console.log(err);
    });
  /*
    await users.find(function(err, usr) {
		flag = false;
        if(err) {
            console.log(err);
        } else {
	    //res.json(req.body);
	    for(index = 0; index < usr.length; index++) {
			if(usr[index].user_name == user_name  && usr[index].password == password) {
			//    res.json(user_name + "res");
				//res.status(200).json({Success : 1});
				//return True;
				flag = true;
				return true;
				break;
				//res.json(usr);
			}
		    //res.status(401).json({Success: 0, Error: "Incorrect Password"});
		}
		return false;
	    if(flag) {
		//res.status(401).json({Success: 0, Error: "Incorrect Password"});
			console.log('false');
			return false;
		}
		console.log('true');
		return true;
	    //
	    /*
	    if(usr[0].user_name == user_name  && usr[0].password == password) {
		//res.json(user_name + "res");
		res.status(200).json({Success : 1});
		//res.json(usr);
	    } else {
		res.status(401).json({Success: 0, Error: "Incorrect Password"});
	    }
	    //
        }
	});
	*/
};
userRoutes.route("/").post(async function(req, res) {
  const user_name = req.body.user_name;
  const password = req.body.password;
  //try {
	var user = await users.findOne({ user_name: req.body.user_name }).exec();
	if(!user) {
		return res.status(400).send({ message: "The username does not exist" });
	}
	if(!bcrypt.compareSync(req.body.password, user.password)) {
		return res.status(400).send({ message: "The password is invalid" });
  }
  //Code for JWT
  const claims = {
    user_name: user.user_name
  }
  const key = 'fml2020';
  const header = {
    alg: "HS512",
    typ: "JWT"
  }
  var sHeader = JSON.stringify(header);
  var sPayload = JSON.stringify(claims);
  const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
  console.log(sJWT);
	res.status(200).send({ message: "The username and password combination is correct!", jwt: sJWT });
});
/*
users.schema.pre("save", function(next) {
	if(!this.isModified("password")) {
		console.log("Here");
		return next();
	}
	this.password = bcrypt.hashSync(this.password,10);
	next();
});
users.schema.methods.comparePassword = function(plaintext, callback) {
	return callback(null, bcrypt.compareSync(plaintext, this.password));
}
*/
userRoutes.route("/add").post(async function(req, res) {
	var user = await users.findOne({ user_name: req.body.user_name }).exec();
	if(user) {
    		res.status(400).json({ Error: "Username already exists" });
		return;
	}
  try {
	  console.log(req.body);
    req.body.password = bcrypt.hashSync(req.body.password);
	var usr = new users(req.body);
	var result = await usr.save();
	//res.send(result);
    res.status(200).json({ user: "user added successfully" });
  } catch (error) {
	  console.log(error);
	//response.status(500).send(error);
    res.status(400).json({ Error: "Error Adding New User" });
  }
  /*
  usr
    .save()
    .then(usr => {
      res.status(200).json({ user: "user added successfully" });
    })
    .catch(err => {
      res.status(400).json({ Error: "Error Adding New User" });
	});
	*/
});

userRoutes.route("/addstartup").post(async function(req, res) {
	var startupWithSameUsername = await startups.findOne({ user_name: req.body.name }).exec();
	if(startupWithSameUsername) {
    		res.status(400).json({ Error: "Username already exists" });
		return;
	}
  req.body.password = bcrypt.hashSync(req.body.password);
  let startup = new startups(req.body);
  startup
    .save()
    .then(startup => {
      res.status(200).json({ startup: "startup added successfully" });
    })
    .catch(err => {
      res.status(400).json({ Error: "Error Adding new Startup" });
    });
});
userRoutes.route("/startups").get(function(req, res) {
  startups.find(function(err, startup) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(startup);
    }
  });
 //res.status(200).json({});
});
userRoutes.route("/adminlogin").post(function(req, res) {
  const password = req.body.password;
  const admin_name = req.body.admin_name;
  console.log(req.body);
    if (
      "psf@coep.ac.in" == admin_name &&
      "jammu" == password
    ) {
      res.status(200).json({ Success: 1 });
      flag = 0;
    }
  if (flag) {
    res.status(401).json({ Success: 0, Error: "Incorrect Password" });
  }
});
userRoutes.route("/startupslogin").post(function(req, res) {
  const name = req.body.name;
  const password = req.body.password;
  startups.find(function(err, startup) {
    flag = 1;
    if (err) {
      console.log(err);
    } else {
      for (index = 0; index < startup.length; index++) {
        if (
          startup[index].name == name &&
	  bcrypt.compareSync(password, startup[index].password)
        ) {
          const claims = {
            startup_name: name
          }
          const key = 'fml2020';
          const header = {
            alg: "HS512",
            typ: "JWT"
          }
          var sHeader = JSON.stringify(header);
          var sPayload = JSON.stringify(claims);
          const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
          console.log(sJWT);
          res.status(200).json({ Success: 1 , jwt: sJWT});
          flag = 0;
          break;
        }
      }
      if (flag) {
        res.status(401).json({ Success: 0, Error: "Incorrect Password" });
      }
    }
  });
});
//This function needs to be changed using callbacks
userRoutes.route("/applications").post(function(req, res) {
  var user_token = req.body.user_token;
  const aJWT = user_token.split(".");
  const uClaim = JSRSASign.b64utos(aJWT[1]);
  const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
  console.log(pClaim);
  username = pClaim.user_name;
  var apps = [];
  applications.find(function(err, app) {
    if (err) {
      console.log(err);
    } else {
      for (var i = 0; i < app.length; i++) {
        if (app[i].user_name == username) {
          apps.push(app[i]);
        }
      }
    }
    res.json(apps);
  });
 //res.json(apps);
});
userRoutes.route("/getapplicants").post(function(req, res) {
  var applicants = [{ first_name: "Error", last_name: "Fetching Data" }];
  var applicant_uname = [];
  var user_token = req.body.user_token;
  const aJWT = user_token.split(".");
  const uClaim = JSRSASign.b64utos(aJWT[1]);
  const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
  console.log(pClaim);
  const startup_name = pClaim.startup_name;
  const status = req.body.status;
  //console.log(startup_name);
  applications.find(function(err, application) {
    if (err) {
      console.log(err);
    } else {
      for (index = 0; index < application.length; index++) {
        if (
          application[index].startup_name == startup_name &&
          application[index].status == status
        ) {
          applicant_uname.push(application[index].user_name);
          /*await users.find(async function(error, user) {
						if(error) {
							console.log(error);
						} else {
							for(i = 0; i < user.length; i++) {
								if(user[i].user_name == applicant_uname) {
									//res.json(user[i]);
									console.log("here");
									console.log(applicant_uname);
								    await applicants.push(user[i]);
		//							console.log(applicants);
								}
							}
						}
						return applicants;
					})*/
        }
      }
      //console.log(applicantarr);
      result = get_users()
        .then(response => {
          resp = [];
          //console.log("resp");
          usersarray = response;
          //		console.log(response);
          //	console.log(applicant_uname);
          unames = applicant_uname;
          for (var i = 0; i < unames.length; i++) {
            for (var j = 0; j < usersarray.length; j++) {
              if (unames[i] == usersarray[j].user_name) {
                resp.push(usersarray[j]);
                //		console.log("pushing");
              }
            }
          }
          //console.log(resp);
          res.json(resp);
        })
        .catch(err => {
          console.log(err);
        });
      //console.log(applicant_uname);
      //console.log(result);
      //res.json(result);
    }
  });
});

var get_users = async function() {
  await users.find(function(err, user) {
    if (err) {
      console.log(error);
      usersarray = ["error"];
    } else {
      usersarray = user;
    }
  });
  return usersarray;
};
var get_user_details = async function(unames) {
  resp = [];
  usersarray = [];
  prom = get_users()
    .then(function(response) {
      console.log("inthen");
      usersarray = response;
      console.log(usersarray);
      console.log(unames);
      for (var i = 0; i < unames.length; i++) {
        for (var j = 0; j < usersarray.length; j++) {
          if (unames[i] == usersarray[j].user_name) {
            resp.push(usersarray[j]);
            console.log("pushing");
          }
        }
      }
      console.log("afterfor");
      console.log(resp);
      return resp;
    })
    .catch(err => {
      console.log(err);
    });
  //return [{"first_name": "infunction"}];
  //console.log("ua");
  //console.log(prom);
  //console.log(usersarray);
  /*for(var i = 0; i < unames.length; i++) {
		for(var j = 0; j < usersarray.length; j++) {
			if(unames[i] == usersarray[j].user_name) {
				resp.push(usersarray[j]);
				console.log("pushing");
			}
		}
	}*/
  //console.log("before get user dtails");
  //console.log(resp);
  //return resp;
};

userRoutes.route("/allUsers").get(function(req, res) {
  users.find(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(user);
    }
  });
});

//userRoutes.route('/:u')
userRoutes.route("/addapplication").post(async function(req, res) {
  var data;
  var selected;
  selected = false;
  var user_token = req.body.user_token;
  const aJWT = user_token.split(".");
  const uClaim = JSRSASign.b64utos(aJWT[1]);
  const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
  console.log(pClaim);
  console.log(req.body);
  if (!(!pClaim.startup_name || pClaim.startup_name == req.body.startup_name)) {
    res.status(401).json({Error: "SAuthorization Error"});
    return;
  }
  if (!(!pClaim.user_name || pClaim.user_name == req.body.user_name)) {
    res.status(401).json({Error: "UAuthorization Error"});
    return;
  }
  let correspondingStartup = await startups.findOne({name: req.body.startup_name});
  if((req.body.status == 1) && (correspondingStartup.no_shortlisted >= (4*correspondingStartup.requirement))) {
    res.status(400).json({ Error: "Max no of students Shortlisted" });
    return;
  }
  if((req.body.status == 2) && correspondingStartup.no_selected >= correspondingStartup.requirement) {
    res.status(400).json({ Error: "Max no of students Selected" });
    return;
  }
  let user_applications = await applications.find({
    user_name: req.body.user_name
  });
  data = null;
  for (index = 0; index < user_applications.length; index++) {
    if (user_applications[index].startup_name == req.body.startup_name) {
      data = user_applications[index];
    }
    if (
      user_applications[index].status == 2 &&
      user_applications[index].startup_name != req.body.startup_name
    ) {
      console.log(user_applications[index]);
      selected = true;
    }
  }
  console.log(data);
  if (data != null) {
    /*
		if(data.status == 2) {
			res.status(400).json({Error: "Student already selected"});
			return;
		}
		*/
    const dataa = await applications.findByIdAndRemove({
      _id: data._id
    });
  }
  if (data == null) {
    if(req.body.status != 0) {
      res.status(400).json({ Error: "User Backed Out. Reload to see the actual list." });
      return;
    }
    let user = await users.findOne({ user_name: req.body.user_name });
    if (user.resume_built == false) {
      res.status(400).json({ Error: "Resume not generated" });
      return;
    }
  }
  if (selected) {
    res.status(400).json({ Error: "Already Selected" });
    return;
  }
  let application = new applications(req.body);
  application
    .save()
    .then(application => {
      console.log(req.body.status);
      if(req.body.status == 0 && data && data.status == 1) {
        correspondingStartup.no_shortlisted = correspondingStartup.no_shortlisted - 1;
      }
      else if(req.body.status == 1) {
        correspondingStartup.no_shortlisted = correspondingStartup.no_shortlisted + 1;
      } else if(req.body.status == 0 && data && data.status == 2) {
        correspondingStartup.no_selected = correspondingStartup.no_selected - 1;
      }else if(req.body.status == 2) {
        correspondingStartup.no_shortlisted = correspondingStartup.no_shortlisted - 1;
        correspondingStartup.no_selected = correspondingStartup.no_selected + 1;
      }
      correspondingStartup.save()
      res.status(200).json({ application: "application added successfully" });
    })
    .catch(err => {
      res.status(400).json({ Error: "Error Adding new Application" });
      console.log(err);
    });
});
/*
userRoutes.route('/applications').get(function(req, res) {
    applications.find(function(err, application) {
	if(err) {
	    console.log(err);
	} else {
	    res.status(200).json(application);
	}
    });
});
*/

userRoutes.route("/removeapplication").delete(async (req, res) => {
  try {
    var user_token = req.body.user_token;
    const aJWT = user_token.split(".");
    const uClaim = JSRSASign.b64utos(aJWT[1]);
    const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
    console.log(pClaim);
    console.log(req.body);
    if (!(!pClaim.startup_name || pClaim.startup_name == req.body.startup_name)) {
      res.status(401).json({Error: "Startup Authorization Error"});
      return;
    }
    if (!(!pClaim.user_name || pClaim.user_name == req.body.user_name)) {
      res.status(401).json({Error: "User Authorization Error"});
      return;
    }
    let data = await applications.findOne({
      user_name: req.body.user_name,
      startup_name: req.body.startup_name,
      status: req.body.status
    });
    let correspondingStartup = await startups.findOne({name: req.body.startup_name});
    if(data.status == 1) {
      correspondingStartup.no_shortlisted = correspondingStartup.no_shortlisted - 1;
    }
    correspondingStartup.save();

    console.log(data);
    const dataa = await applications.findByIdAndRemove({
      _id: data._id
    });
    res.send(dataa);
  } catch (e) {}
});
userRoutes.route("/addresume").post(textParser, function(req, res) {
  //res.send("Success");
  //return;
  var html = req.body;
  var current_user;
  var options = { format: "A4" };
  //console.log(req.body)ssh -i "SDS_PSF_key.pem" ubuntu@ec2-13-235-16-42.ap-south-1.compute.amazonaws.com;

  pos = html.search("<html>");
  data = html.substring(0, pos).split('"');
  user_name = data[1];
  password = data[3];
  html = html.substring(pos);
  console.log(html);

  pos = html.search('id="name"');
  temp = html.substring(pos + 86);
  posend = temp.search("<");
  name = temp.substring(0, posend);
  console.log(name);
  console.log(data);
  console.log(user_name);
  console.log(password);
  //ff = authenticate(user_name, password)
  prom = get_users()
    .then(usr => {
      flag = false;
      for (index = 0; index < usr.length; index++) {
        if (
          usr[index].user_name == user_name &&
          bcrypt.compareSync(password, usr[index].password)
          //usr[index].password == password
        ) {
          //    res.json(user_name + "res");
          //res.status(200).json({Success : 1});
          //return True;
          current_user = usr[index];
          flag = true;
          break;
          //res.json(usr);
        }
        //res.status(401).json({Success: 0, Error: "Incorrect Password"});
      }
      if (flag == false) {
        res.send("Failure");
        return;
      } else {
	      /*
        pdf
          .create(html, options)
          .toFile("/opt/portal/api/Resumes/" + user_name + ".pdf", function(err, res) {
            //.toFile("/home/pranav/Desktop/Pranav/react/login-git/api/Resumes/" + user_name + ".pdf", function(err,res) {
            if (err) return console.log(err);
            console.log(res);
          });
	  */
	const resume = {
          user_name: user_name,
          resume: html
        };
        const something = new student_resumes(resume);
        something.save();
        current_user.resume_built = true;
        current_user.save();
        res.send("Success");
      }
    })
    .catch(err => {
      console.log(err);
    });
  /*
	pos = html.search('id="inp_username"');
	temp = html.substring(pos+18);
	posend = temp.search('<');
	user_name = temp.substring(0,posend);
	console.log(user_name);
	pos = html.search('id="inp_password"');
	temp = html.substring(pos+18);
	posend = temp.search('<');
	password = temp.substring(0,posend);
	console.log(password);
	*/
  //Check if username and password match
});
userRoutes.route("/getresume").post(async function(req, res) {
  var user_name = req.body.user_name;
  //var student = await student_resumes.findOne({"user_name": user_name})
  var student = await student_resumes.findOne({"user_name": user_name}).limit(1).sort({$natural:-1})
  .then(response => {
    if(response) {
          console.log(response.user_name);
          console.log(response.resume);
          res.status(200).send(response.resume);
      return;
    }
    else {
      res.status(204).json({"Error":"Resume not found!"});
    }
  }
  )
	/*
  userfile = username + ".pdf";
  //fs.readdir("/home/pranav/Desktop/Pranav/react/login-git/api/Resumes/", function(err, files) {
  fs.readdir("/opt/portal/api/Resumes/", function(err, files) {
    if (err) throw err;
    for (var index in files) {
      console.log(files[index]);
      if (userfile == files[index]) {
        console.log("found");
        //var file = fs.createReadStream("/home/pranav/Desktop/Pranav/react/login-git/api/Resumes/Yash.pdf");
        //file.pipe(res);
        //res.download('/home/pranav/Desktop/Pranav/react/login-git/api/Resumes/' + files[index]);
        res.sendFile(
		  "/opt/portal/api/Resumes/" +
			//"/home/pranav/Desktop/Pranav/react/login-git/api/Resumes/" +
            files[index]
        );
	return;
        //res.sendFile('/home/pranav/Desktop/Pranav/react/login-git/api/Resumes/ReadMe.pdf');
      }
    }
    res.status(204).json({"Error":"Resume not found!"});
  });
  */
  //res.send("done");
});

("use strict");

const moment = require("moment");
const json2csv = require("json2csv").parse;
const path = require("path");

userRoutes.get("/excel", function(req, res) {
  users.find(function(err, users) {
	  if(err) {
		  return res.status(500).json({err});
	  } else {
	  	  res.status(200).json(users);
	  }
	  /*
    if (err) {
      return res.status(500).json({ err });
    } else {
      let csv;
      try {
        csv = json2csv(users, { fields });
      } catch (err) {
        return res.status(500).json({ err });
      }
      // const dateTime = moment().format("YYYYMMDDhhmmss");
      const filePath = path.join(
        __dirname,
        "..",
        "public",
        "csv-" + "students" + ".csv"
      );
      console.log(filePath);
      // console.log(filePath);
      fs.writeFile(filePath, csv, function(err) {
        if (err) {
          return res.json(err).status(500);
        } else {
          setTimeout(function() {
            fs.unlinkSync(filePath); // delete this file after 30 seconds
          }, 30000);

          return res.json("/csv-" + "students" + ".csv");
        }
      });
	}
	*/
  });
});
// userRoutes.get("/excelDownload", (req, res) => {
//   var file = fs.createWriteStream("excel.csv");
//   http.get("http://localhost:4000/login/excel", res => {
//     res.pipe(file);
//   });
// });
userRoutes.route("/user/:id").get((req, res) => {
  const id = req.params.id;
  users
    .findById(id)
    .then(task => {
      res.json(task);
    })
    .catch();
});
userRoutes.route("/startup/:id").get((req, res) => {
  const id = req.params.id;
  startups
    .findById(id)
    .then(task => {
      res.json(task);
    })
    .catch();
});

userRoutes.route("/application/:id").get((req, res) => {
  const id = req.params.id;
  applications
    .findById(id)
    .then(task => {
      res.json(task);
    })
    .catch();
});

//Update the student
userRoutes.route("/userUpdate/:id").put((req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password);
  users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
      }
    }
  );
});

//Update Startups
userRoutes.route("/startupUpdate/:id").put((req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password);
  startups.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
      }
    }
  );
});

//Update the Application
userRoutes.route("/application/:id").put((req, res, next) => {
  console.log(req.body);
  applications.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
      }
    }
  );
});
userRoutes.route("/allapplications").get(function(req, res) {
  applications.find(function(err, application) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(application);
    }
  });
});
//userRoutes.route('/:u')
userRoutes.route("/users").get(function(req, res) {
  users.find(function(err, startup) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(startup);
    }
  });
});
