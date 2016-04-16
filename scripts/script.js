$(document).ready(function(){
	
	$('.overlay').hide();
	$('.sk-circle').hide();
	
	//add data
	$('#add').click(function(){
		
		$('.overlay').show();
		$('.sk-circle').show();
		
		var add = "option=add&"+$('#addForm').serialize();
		
		$.post("process.php" , add , function(data){
			
			$('.overlay').hide();
			$('.sk-circle').hide();
			
			alertify.success("Data added");	
			
		});
		
	});
	
	//search data
	$('#searchBut').click(function(){
		
		$('.overlay').show();
		$('.sk-circle').show();
		
		$('#listSearch').empty();
		var search = "option=search&"+$('#searchForm').serialize();
		
		$.post("process.php" , search , function(data){
			
			$('.overlay').hide();
			$('.sk-circle').hide();
			
			$('#listSearch').append(data);
			alertify.success("Search complete");	
		});
	});
	
	
	//list all data
	$(function(){
		if($('body').is('#ListAllDat')){
			
			$('.overlay').show();
			$('.sk-circle').show();
			
			var listall = "option=list";
			
			$.post("process.php", listall, function(data){
				
				$('.overlay').hide();
				$('.sk-circle').hide();
				
				$('#listAll').append(data);
				alertify.success("All data loaded");
				});
		}
		
	});	
		
	
	
	
	/*
	//list all data auto refresh
	$(function(){
		
		if($('body').is('#ListAllDat')){
			
			var listall = "option=list";
			
			setInterval(function(){
				
				$('#listAll').empty();
				$.post("process.php", listall, function(data){
				
				$('#listAll').append(data);
				alertify.success("All data loaded");
				});
				
			},3000);
			
				
		}
		
	});	
	*/
	
});

