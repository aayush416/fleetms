
$('document').ready(function() {

	$('.table .btn-primary').on('click',function(event){
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(supplier, status){
			$('#txtAddressEdit').val(supplier.address);
			$('#txtCityEdit').val(supplier.city);
			$('#ddlCountryEdit').val(supplier.countryid);
			$('#txtDetailsEdit').val(supplier.details);
			$('#txtEmailEdit').val(supplier.email);
			$('#txtIdEdit').val(supplier.id);
			$('#txtMobileEdit').val(supplier.mobile);
			$('#txtNameEdit').val(supplier.name);
			$('#txtPhoneEdit').val(supplier.phone);
			$('#ddlStateEdit').val(supplier.stateid);
			$('#txtWebsiteEdit').val(supplier.website);
		});
		$('#editModal').modal();
	});

	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(supplier, status){
			$('#txtAddressEdi').val(supplier.address);
            			$('#txtCityEdi').val(supplier.city);
            			$('#ddlCountryEdi').val(supplier.countryid);
            			$('#txtDetailsEdi').val(supplier.details);
            			$('#txtEmailEdi').val(supplier.email);
            			$('#txtIdEdi').val(supplier.id);
            			$('#txtMobileEdi').val(supplier.mobile);
            			$('#txtNameEdi').val(supplier.name);
            			$('#txtPhoneEdi').val(supplier.phone);
            			$('#ddlStateEdi').val(supplier.stateid);
            			$('#txtWebsiteEdi').val(supplier.website);
		});
		$('#detailsModal').modal();
	});

	$('.table #deleteButton').on('click',function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('#deleteModal #delRef').attr('href', href);
		$('#deleteModal').modal();
	});
});