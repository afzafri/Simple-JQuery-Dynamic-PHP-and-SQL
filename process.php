<?php 

$servername = "localhost";
$username = "root";
$password = "afifzafri";
$dbname = "data";

//pdo 
try
{
	$conn = new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
	echo "Connection Error : " . $e->getMessage();
}


//add
if( $_POST['option'] == "add" )
{
	$n = $_POST['name'];
	$a = $_POST['age'];
	$i = $_POST['ic'];
	$d = $_POST['dob'];
	$addr = $_POST['addr'];

	try
	{
		
		$stmt = $conn->prepare("INSERT INTO JSDATA (NAME,AGE,IC,DOB,ADDR) VALUES(?,?,?,?,?) ");
		$stmt->execute(array($n,$a,$i,$d,$addr));
		
		//echo "Success add data!";
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}

}

//search
if( $_POST['option'] == "search" )
{
	$n = $_POST['name'];
	
	try
	{	
		$stmt = $conn->prepare("SELECT * FROM JSDATA WHERE NAME LIKE ? ");
		$stmt->execute(array("%{$n}%"));
		
		echo "
		
		<table>
		<tr>
		<th>ID</th>
		<th>NAME</th>
		<th>AGE</th>
		</tr>
		
		
		";
		while($result = $stmt->fetch(PDO::FETCH_ASSOC))
		{
			$id = $result['ID'];
			$name = $result['NAME'];
			$age = $result['AGE'];
			
			echo "
			<tr>
			<td>$id</td>
			<td>$name</td>
			<td>$age</td>
			</tr>
			";
		}
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}

}

//list all
if( $_POST['option'] == "list" )
{
	
	echo "
	<h1>List Data</h1>
	
	<table>
	<tr>
	<th>ID</th>
	<th>NAME</th>
	<th>AGE</th>
	<th>VIEW DETAILS</th>
	<th>UPDATE DETAILS</th>
	<th>DELETE DATA</th>
	</tr>
	
	";
	try
	{
		$stmt = $conn->prepare("SELECT * FROM JSDATA");
		$stmt->execute();
		
		while($result = $stmt->fetch(PDO::FETCH_ASSOC))
		{
			$id = $result['ID'];
			$name = $result['NAME'];
			$age = $result['AGE'];
			
			echo "
			<tr>
			<td>$id</td>
			<td>$name</td>
			<td>$age</td>
			<td><button name='detailsBut' id='detailsBut' value='$id'>View Details</button></td>
			<td><button name='updateBut' id='updateBut' value='$id'>Update Details</button></td>
			<td><button name='delBut' id='delBut' value='$id'><img src='./images/del.png' width='15px' title='Delete'/></button></td>
			</tr>
			";
		}
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}
	
	echo "</table>";
	
}

//view details data
if( $_POST['option'] == "viewdetails" )
{
	$id = $_POST['id'];
	echo "
	<h1>Profile</h1>
	
	<table>
	<tr>
	<th>ID</th>
	<th>NAME</th>
	<th>AGE</th>
	<th>IC</th>
	<th>DOB</th>
	<th>ADDRESS</th>
	</tr>
	
	";
	try
	{
		$stmt = $conn->prepare("SELECT * FROM JSDATA WHERE ID=?");
		$stmt->execute(array($id));
		
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		
		$id = $result['ID'];
		$name = $result['NAME'];
		$age = $result['AGE'];
		$ic = $result['IC'];
		$dob = $result['DOB'];
		$addr = $result['ADDR'];
		
		echo "
		<tr>
		<td>$id</td>
		<td>$name</td>
		<td>$age</td>
		<td>$ic</td>
		<td>$dob</td>
		<td>$addr</td>
		</tr>
		";
		
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}
	
	echo "</table>
	
	<br><br>
	<button name='backBut' id='backBut'>Back</button>
	
	";

}

//view update details data
if( $_POST['option'] == "updatedetails" )
{
	$id = $_POST['id'];
	echo "
	<h1>Profile</h1>
	
	<form method='post' id='updateForm'>
	<table>
	
	
	";
	try
	{
		$stmt = $conn->prepare("SELECT * FROM JSDATA WHERE ID=?");
		$stmt->execute(array($id));
		
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		
		$id = $result['ID'];
		$name = $result['NAME'];
		$age = $result['AGE'];
		$ic = $result['IC'];
		$dob = $result['DOB'];
		$addr = $result['ADDR'];
		
		echo "
		<tr>
		<td>ID : </td><td><input type='text' name='id' value='$id' readonly='readonly'></td>
		</tr>
		<tr>
		<td>Name : </td><td><input type='text' name='name' value='$name'></td>
		</tr>
		<tr>
		<td>Age : </td><td><input type='text' name='age' value='$age'></td>
		</tr>
		<tr>
		<td>IC: </td><td><input type='text' name='ic' value='$ic'></td>
		</tr>
		<tr>
		<td>DOB : </td><td><input type='text' name='dob' value='$dob'></td>
		</tr>
		<tr>
		<td>Address : </td><td><input type='text' name='addr' value='$addr'></td>
		</tr>
		
		";
		
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}
	
	echo "</table>
	<br><br>
	<input type='button' id='update' value='Update'>
	</form>
	<br><br>
	<button name='backBut' id='backBut'>Back</button>
	
	";

}


//submit updated data
if( $_POST['option'] == "updated" )
{
	$id = $_POST['id'];
	$n = $_POST['name'];
	$a = $_POST['age'];
	$i = $_POST['ic'];
	$d = $_POST['dob'];
	$addr = $_POST['addr'];
	
	try
	{
		
		$stmt = $conn->prepare("UPDATE JSDATA SET NAME=?,AGE=?,IC=?,DOB=?,ADDR=? WHERE ID=? ");
		$stmt->execute(array($n,$a,$i,$d,$addr,$id));
		
		//echo "Success add data!";
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}

}



//delete data
if( $_POST['option'] == "delete" )
{
	
	$id = $_POST['id'];
	
	try
	{
		$stmt = $conn->prepare("DELETE FROM JSDATA WHERE ID=?");
		$stmt->execute(array($id));
		
		
	}
	catch(PDOException $e)
	{
		echo "Connection Error : " . $e->getMessage();
	}

}


$conn = null;

?>