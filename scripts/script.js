$(document).ready(function(){
	
	//add data
	$('#add').click(function(){
		
		var add = "option=add&"+$('#addForm').serialize();
		
		$.post("process.php" , add , function(data){
			alertify.success("Data added");	
		});
		
	});
	
	//search data
	$('#searchBut').click(function(){
		
		$('#listSearch').empty();
		var search = "option=search&"+$('#searchForm').serialize();
		
		$.post("process.php" , search , function(data){
			
			$('#listSearch').append(data);
			alertify.success("Search complete");	
		});
	});
	
	//list all data
	$(function(){
		
		if($('body').is('#ListAllDat')){
			
			var listall = "option=list";
			
			$.post("process.php", listall, function(data){
				
				$('#listAll').append(data);
				alertify.success("All data loaded");
				});
		}
		
	});	
	
	
});

		
