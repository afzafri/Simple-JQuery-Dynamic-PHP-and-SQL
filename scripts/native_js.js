//function insert data
function insertDat(name,age)
{
	
	//create object
	var xh = new XMLHttpRequest();
	xh.open('POST' , 'process.php' , true);
	
	xh.setRequestHeader('Content-type' , 'application/x-www-form-urlencoded');
	
	
	xh.onreadystatechange = function()
	{
		if(xh.readyState == 4 && xh.status == 200)
		{
			document.getElementById('detailsSub').innerHTML = xh.responseText;
			//alert(xh.responseText);
		}
	};

	//send data
	xh.send("option=add&name="+name+"&age="+age);
}

//function search data
function searchDat(name)
{
	
	//create object
	var xh = new XMLHttpRequest();
	xh.open('POST' , 'process.php' , true);
	
	xh.setRequestHeader('Content-type' , 'application/x-www-form-urlencoded');
	
	
	xh.onreadystatechange = function()
	{
		if(xh.readyState == 4 && xh.status == 200)
		{
			document.getElementById('listSearch').innerHTML = xh.responseText;
		}
	};

	//send data
	xh.send("option=search&name="+name);
}

//function list all data
function listDat()
{
	
	//create object
	var xh = new XMLHttpRequest();
	xh.open('POST' , 'process.php' , true);
	
	xh.setRequestHeader('Content-type' , 'application/x-www-form-urlencoded');
	
	
	xh.onreadystatechange = function()
	{
		if(xh.readyState == 4 && xh.status == 200)
		{
			document.getElementById('listAll').innerHTML = xh.responseText;
		}
	};

	//send data
	xh.send("option=list");
}