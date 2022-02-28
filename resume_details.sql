-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2022 at 07:40 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `internship_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `resume_details`
--

CREATE TABLE `resume_details` (
  `ID` bigint(20) NOT NULL,
  `Name` varchar(128) NOT NULL,
  `Email` varchar(128) NOT NULL,
  `Contact` bigint(20) NOT NULL,
  `Website` varchar(128) NOT NULL,
  `Education` mediumtext NOT NULL,
  `Projects` mediumtext NOT NULL,
  `POR` mediumtext NOT NULL,
  `Experience` mediumtext NOT NULL,
  `Address` mediumtext NOT NULL,
  `Skills` mediumtext NOT NULL,
  `Textareas` mediumtext NOT NULL,
  `Checkboxes` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resume_details`
--

INSERT INTO `resume_details` (`ID`, `Name`, `Email`, `Contact`, `Website`, `Education`, `Projects`, `POR`, `Experience`, `Address`, `Skills`, `Textareas`, `Checkboxes`) VALUES
(111803127, 'Vasu Sharma', 'vasusharma2017@outlook.com', 9906330301, '', '[{\"stdp1\":\"B. Tech\",\"fos1\":\"Computer Science\",\"yr1\":\"2nd\",\"cgpa1\":\"9.83\",\"uni1\":\"Savitribai Phule University \",\"inst1\":\"College Of Engineering\",\"city1\":\"Pune\",\"state1\":\"Maharashtra\"},{\"stdp2\":\"Secondary School\",\"fos2\":\"\",\"uni2\":\"JK Board Of School Education\",\"yr2\":\"2018\",\"cgpa2\":\"95.2%\",\"inst2\":\"Govt. SRML Higher Secondary School\",\"city2\":\"Jammu\",\"state2\":\"J&K\"}]', '[{\"ptitle1\":\"Text Editor \",\"sdate1\":\"2019-09\",\"fdate1\":\"2019-11\"},{\"ptitle2\":\"Resume Maker\",\"sdate2\":\"2019-12\",\"fdate2\":\"2020-01\"},{\"ptitle3\":\"Python Projects\",\"sdate3\":\"2018-01\",\"fdate3\":\"2026-03\"}]', '[{\"rtitle1\":\"\",\"cname1\":\"\",\"tdate1\":\"2016-03\",\"rdate1\":\"2016-03\"}]', '[{\"jtitle1\":\"Soware Developer\",\"oname1\":\"Soware Development Section ,CoEP\",\"jdate1\":\"2019-09\",\"ldate1\":\"2016-03\"},{\"jtitle2\":\"DSAI Club Member\",\"oname2\":\"Data Science and Artificial Intelligence Club,CoEP\",\"jdate2\":\"2019-03\",\"ldate2\":\"2026-03\"}]', '{\"mob\":{\"mob1\":\"48958498\"},\"main\":{\"a_city1\":\"f394jsfklj\",\"a_state1\":\"sklfjlk\",\"pin1\":\"98349038\",\"p_a_city1\":\"dflskj\",\"p_a_state1\":\"klfjsk\",\"p_pin1\":\"9430\",\"linkedin\":\",sdjaKSLJF\",\"github\":\"LKDSFJKLSDFJ\"}}', '[{\"sk_title1\":\"Web Development\",\"sk11\":\"HTML, JAVASCRIPT, CSS/BOOTSTRAP, AWS, React, PHP \"},{\"sk_title2\":\"Tools & Libraries \",\"sk21\":\"OpenCV, CNN, Keras(TensorFlow), Selenium, BeautifulSoup, Tkinter, Flask, git \"},{\"sk_title3\":\"Other Skills /Languages\",\"sk31\":\"Python, C, Metasploit\"}]', '{\"pdesc1\":\"A C based text-editor built with ncurses library.Main features were - Word Suggestions, Undo/Redo, Reading Large Files in Chunks, Goto Line Number, Find/Replace etc.\",\"pdesc2\":\"Resume Maker built using HTML,CSS , JS, PHP. The Project was deployed in Pune Startup Fest 2020 . \",\"pdesc3\":\"Various python projects like Hotel Management System , Web Scrapers for  Review Extraction from Trip-Advisor/ Yelp , Django App for text extraction from Image etc.\",\"wdesc1\":\"Worked on automating various things of Student Section of college, conducted session on Rest APIs and AWS. Worked  on project from IMA- Pune in MERN stack.\",\"wdesc2\":\"Worked on various projects in Computer Vision like Face Recognition , Digit Recognition, Spherical CNNs, Text Extraction. Currently working on research in NLP and a project on Chatbot. \",\"rdesc1\":\"\",\"aline1\":\"jfsjflk\",\"p_aline1\":\"lksjfklj\"}', '{\"chk_ldate1\":true,\"chk_ldate2\":true,\"chk_rdate1\":false,\"chk_fdate1\":false,\"chk_fdate2\":false,\"chk_fdate3\":true,\"ask_add\":false}'),
(111803128, '', 'vasu@vasu.com', 7788664422, '', '[{\"stdp1\":\"\",\"fos1\":\"\",\"yr1\":\"\",\"cgpa1\":\"\",\"uni1\":\"\",\"inst1\":\"\",\"city1\":\"\",\"state1\":\"\"}]', '[{\"ptitle1\":\"\",\"sdate1\":\"2016-03\",\"fdate1\":\"2016-03\"}]', '[{\"rtitle1\":\"\",\"cname1\":\"\",\"tdate1\":\"2016-03\",\"rdate1\":\"2016-03\"}]', '[{\"jtitle1\":\"\",\"oname1\":\"\",\"jdate1\":\"2016-03\",\"ldate1\":\"2016-03\"}]', '{\"mob\":{\"mob1\":\"\"},\"main\":{\"a_city1\":\"\",\"a_state1\":\"\",\"pin1\":\"\",\"p_a_city1\":\"\",\"p_a_state1\":\"\",\"p_pin1\":\"\",\"linkedin\":\"\",\"github\":\"\"}}', '[{\"sk_title1\":\"\",\"sk11\":\"\"}]', '{\"pdesc1\":\"\",\"wdesc1\":\"\",\"rdesc1\":\"\",\"aline1\":\"\",\"p_aline1\":\"\"}', '{\"chk_ldate1\":false,\"chk_rdate1\":false,\"chk_fdate1\":false,\"ask_add\":false}'),
(111803126, '', 'vasu@vasu.com', 6667776676, '', '[{\"stdp1\":\"\",\"fos1\":\"\",\"yr1\":\"\",\"cgpa1\":\"\",\"uni1\":\"\",\"inst1\":\"\",\"city1\":\"\",\"state1\":\"\"}]', '[{\"ptitle1\":\"\",\"sdate1\":\"2016-03\",\"fdate1\":\"2016-03\"}]', '[{\"rtitle1\":\"\",\"cname1\":\"\",\"tdate1\":\"2016-03\",\"rdate1\":\"2016-03\"}]', '[{\"jtitle1\":\"\",\"oname1\":\"\",\"jdate1\":\"2016-03\",\"ldate1\":\"2016-03\"}]', '{\"mob\":{\"mob1\":\"\"},\"main\":{\"a_city1\":\"\",\"a_state1\":\"\",\"pin1\":\"\",\"p_a_city1\":\"\",\"p_a_state1\":\"\",\"p_pin1\":\"\",\"linkedin\":\"\",\"github\":\"\"}}', '[{\"sk_title1\":\"\",\"sk11\":\"\"}]', '{\"pdesc1\":\"\",\"wdesc1\":\"\",\"rdesc1\":\"\",\"aline1\":\"\",\"p_aline1\":\"\"}', '{\"chk_ldate1\":false,\"chk_rdate1\":false,\"chk_fdate1\":false,\"ask_add\":false}');
COMMIT;
-- (111803127, 'Vasu Sharma', 'vasusharma2017@outlook.com', 9906330301, '', '[{\"stdp1\":\"B. Tech\",\"fos1\":\"Computer Science\",\"yr1\":\"2nd\",\"cgpa1\":\"9.83\",\"uni1\":\"Savitribai Phule University \",\"inst1\":\"College Of Engineering\",\"city1\":\"Pune\",\"state1\":\"Maharashtra\"},{\"stdp2\":\"Secondary School\",\"fos2\":\"\",\"uni2\":\"JK Board Of School Education\",\"yr2\":\"2018\",\"cgpa2\":\"95.2%\",\"inst2\":\"Govt. SRML Higher Secondary School\",\"city2\":\"Jammu\",\"state2\":\"J&K\"}]', '[{\"ptitle1\":\"Text Editor \",\"sdate1\":\"2019-09\",\"fdate1\":\"2019-11\"},{\"ptitle2\":\"Resume Maker\",\"sdate2\":\"2019-12\",\"fdate2\":\"2020-01\"},{\"ptitle3\":\"Python Projects\",\"sdate3\":\"2018-01\",\"fdate3\":\"2026-03\"}]', '[{\"rtitle1\":\"\",\"cname1\":\"\",\"tdate1\":\"2016-03\",\"rdate1\":\"2016-03\"}]', '[{\"jtitle1\":\"Soware Developer\",\"oname1\":\"Soware Development Section ,CoEP\",\"jdate1\":\"2019-09\",\"ldate1\":\"2016-03\"},{\"jtitle2\":\"DSAI Club Member\",\"oname2\":\"Data Science and Artificial Intelligence Club,CoEP\",\"jdate2\":\"2019-03\",\"ldate2\":\"2026-03\"}]', '{\"mob\":{\"mob1\":\"48958498\"},\"main\":{\"a_city1\":\"f394jsfklj\",\"a_state1\":\"sklfjlk\",\"pin1\":\"98349038\",\"p_a_city1\":\"dflskj\",\"p_a_state1\":\"klfjsk\",\"p_pin1\":\"9430\",\"linkedin\":\",sdjaKSLJF\",\"github\":\"LKDSFJKLSDFJ\"}}', '[{\"sk_title1\":\"Web Development\",\"sk11\":\"HTML, JAVASCRIPT, CSS/BOOTSTRAP, AWS, React, PHP \"},{\"sk_title2\":\"Tools & Libraries \",\"sk21\":\"OpenCV, CNN, Keras(TensorFlow), Selenium, BeautifulSoup, Tkinter, Flask, git \"},{\"sk_title3\":\"Other Skills /Languages\",\"sk31\":\"Python, C, Metasploit\"}]', '{\"pdesc1\":\"A C based text-editor built with ncurses library.Main features were - Word Suggestions, Undo/Redo, Reading Large Files in Chunks, Goto Line Number, Find/Replace etc.\",\"pdesc2\":\"Resume Maker built using HTML,CSS , JS, PHP. The Project was deployed in Pune Startup Fest 2020 . \",\"pdesc3\":\"Various python projects like Hotel Management System , Web Scrapers for  Review Extraction from Trip-Advisor/ Yelp , Django App for text extraction from Image etc.\",\"wdesc1\":\"Worked on automating various things of Student Section of college, conducted session on Rest APIs and AWS. Worked  on project from IMA- Pune in MERN stack.\",\"wdesc2\":\"Worked on various projects in Computer Vision like Face Recognition , Digit Recognition, Spherical CNNs, Text Extraction. Currently working on research in NLP and a project on Chatbot. \",\"rdesc1\":\"\",\"aline1\":\"jfsjflk\",\"p_aline1\":\"lksjfklj\"}', '{\"chk_ldate1\":true,\"chk_ldate2\":true,\"chk_rdate1\":false,\"chk_fdate1\":false,\"chk_fdate2\":false,\"chk_fdate3\":true,\"ask_add\":false}'),

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
