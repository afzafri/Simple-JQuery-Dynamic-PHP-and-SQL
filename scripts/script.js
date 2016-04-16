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
		
	
	//listdelete data
	$(function(){
		if($('body').is('#ListAllDel')){
			
			$('.overlay').show();
			$('.sk-circle').show();
			
			var listall = "option=listdelete";
			
			$.post("process.php", listall, function(data){
				
				$('.overlay').hide();
				$('.sk-circle').hide();
				
				$('#listDel').append(data);
				alertify.success("All data loaded");
				});
		}
		
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

