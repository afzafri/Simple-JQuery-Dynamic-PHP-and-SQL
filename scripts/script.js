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
	
	//view details data
	$(document).on('click', '#detailsBut', function() {
		
		var id = $(this).val();
		
		
		$('.overlay').show();
		$('.sk-circle').show();
		
		var viewd = "option=viewdetails&id="+id;
		$.post("process.php", viewd, function(data){
				
				$('.overlay').hide();
				$('.sk-circle').hide();
				
				$('#listAll').hide();
				$('#viewDetails').append(data);
				
				alertify.success("Data loaded");
		});
		
    });
	
		//update details data
	$(document).on('click', '#updateBut', function() {
		
		var id = $(this).val();
		
		
		$('.overlay').show();
		$('.sk-circle').show();
		
		var updated = "option=updatedetails&id="+id;
		$.post("process.php", updated, function(data){
				
				$('.overlay').hide();
				$('.sk-circle').hide();
				
				$('#listAll').hide();
				$('#updateDetails').append(data);
				
				alertify.success("Data loaded");
		});
		
    });
	
	//submit updated data
	$(document).on('click', '#update', function() {
		
		$('.overlay').show();
		$('.sk-circle').show();
		
		var upd = "option=updated&"+$('#updateForm').serialize();
		
		$.post("process.php" , upd , function(data){
			
			$('.overlay').hide();
			$('.sk-circle').hide();
			
			alertify.success("Data updated");	
			
		});
		
	});
	
	//click back button
	$(document).on('click', '#backBut', function() {
	
		$('#viewDetails').empty();
		$('#updateDetails').empty();
		//$('#listAll').show();
		
		location.reload();
		
    });
	
	
	$(document).on('click', '#delBut', function() {
		
		var id = $(this).val();
		
		alertify.confirm('Are you sure?',function(){
		
			$('.overlay').show();
			$('.sk-circle').show();
			
			var deleted = "option=delete&id="+id;
			$.post("process.php", deleted, function(data){
					
					$('.overlay').hide();
					$('.sk-circle').hide();
					
					alertify.success("Data deleted");
					});
					
			location.reload();
			
		});
	
    });
	
	
	
});
