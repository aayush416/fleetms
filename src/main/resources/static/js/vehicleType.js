$('document').ready(function() {

	$('.table .btn-primary').on('click',function(event){
	console.log("vehicleStatus Called")
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(vehicleStatus, status){
			$('#idEdit').val(vehicleStatus.id);
			$('#descriptionEdit').val(vehicleStatus.description);
			$('#detailsEdit').val(vehicleStatus.details);
		});
		$('#EditModal').modal();
	});
	$('.table #detailsButton').on('click',function(event) {

    		event.preventDefault();
    		var href= $(this).attr('href');
    		console.log(href)
    		$.get(href, function(VehicleStatus, status){
    			$('#idDetails').val(VehicleStatus.id);
    			$('#descriptionDetails').val(VehicleStatus.description);
    			$('#detailsDetails').val(VehicleStatus.details);
    		//	$('#lastModifiedByDetails').val(vehicleStatus.lastModifiedBy);
    			//$('#lastModifiedDateDetails').val(vehicleStatus.lastModifiedDate.substr(0,19).replace("T", " "));
    		});
    		$('#detailsmodal').modal();
    	});
    	$('.table #deleteButton').on('click',function(event) {
    	console.log("deletecalled")
        		event.preventDefault();
        		var href = $(this).attr('href');
        		$('#deleteModal #delRef').attr('href', href);
        		$('#deleteModal').modal();
        	});
	});