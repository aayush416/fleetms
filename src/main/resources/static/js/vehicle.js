/**
 *
 */

$('document').ready(function() {
	$('.table #editButton').on('click',function(event){
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(vehicle, status){
			var acDate = vehicle.acquisitionDate.substr(0,10);
			$('#txtAcquisitionDateEdit').val(acDate);
			$('#txtDescriptionEdit').val(vehicle.description);
			$('#ddlEmployeeEdit').val(vehicle.employeeid);
			$('#txtFuelCapacityEdit').val(vehicle.fuelCapacity);
			$('#txtIdEdit').val(vehicle.id);
			$('#ddlLocationEdit').val(vehicle.locationid);
			$('#txtNameEdit').val(vehicle.name);
			$('#txtNetWeightEdit').val(vehicle.netWeight);
			$('#txtPowerEdit').val(vehicle.power);
			var regDate = vehicle.registrationDate.substr(0,10);
			$('#txtRegistrationDateEdit').val(regDate);
			$('#txtRemarksEdit').val(vehicle.remarks);
			$('#ddlVehicleMakeEdit').val(vehicle.vehiclemakeid);
			$('#ddlVehicleModelEdit').val(vehicle.vehiclemodelid);
			$('#txtVehicleNumberEdit').val(vehicle.vehicleNumber);
			$('#ddlVehicleStatusEdit').val(vehicle.vehiclestatusid);
			$('#ddlVehicleTypeEdit').val(vehicle.vehicletypeid);
		});
		$('#editModal').modal();
	});

	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(vehicle, status){
		var acDate = vehicle.acquisitionDate.substr(0,10);
			$('#txtAcquisitionDateEdi').val(acDate);
            			$('#txtDescriptionEdi').val(vehicle.description);
            			$('#ddlEmployeeEdi').val(vehicle.employeeid);
            			$('#txtFuelCapacityEdi').val(vehicle.fuelCapacity);
            			$('#txtIdEdi').val(vehicle.id);
            			$('#ddlLocationEdi').val(vehicle.locationid);
            			$('#txtNameEdi').val(vehicle.name);
            			$('#txtNetWeightEdi').val(vehicle.netWeight);
            			$('#txtPowerEdi').val(vehicle.power);
            			var regDate = vehicle.registrationDate.substr(0,10);
            			$('#txtRegistrationDateEdi').val(regDate);
            			$('#txtRemarksEdi').val(vehicle.remarks);
            			$('#ddlVehicleMakeEdi').val(vehicle.vehiclemakeid);
            			$('#ddlVehicleModelEdi').val(vehicle.vehiclemodelid);
            			$('#txtVehicleNumberEdi').val(vehicle.vehicleNumber);
            			$('#ddlVehicleStatusEdi').val(vehicle.vehiclestatusid);
            			$('#ddlVehicleTypeEdi').val(vehicle.vehicletypeid);
		});
		$('#detailsModal').modal();
	});

	$('.table #deleteButton').on('click',function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('#deleteModal #delRef').attr('href', href);
		$('#deleteModal').modal();
	});

	$('.table #photoButton').on('click',function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('#photoModal #vehiclePhoto').attr('src', href);
		$('#photoModal').modal();
	});
});