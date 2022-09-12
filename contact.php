<?php
include_once "contactus.html";
// database connection code
if(isset($_POST['txtName']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_contact');

// get the post records

$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtEmail'];
$txtSubject = $_POST['txtSubject'];
$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`ID`, `Field_Name`, `Field_Email`, `Field_Subject`, `Field_Message`) VALUES ('0','$txtName', '$txtEmail', '$txtSubject', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "<script>
			alert('You Have successfully submit your form');
		  </script>";
}
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>