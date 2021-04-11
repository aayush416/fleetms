$('document').ready(function() {

	$('.table .btn-primary').on('click',function(event){
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(client, status){
			$('#txtAddressEdit').val(client.address);
			$('#txtCityEdit').val(client.city);
			$('#ddlCountryEdit').val(client.countryid);
			$('#txtDetailsEdit').val(client.details);
			$('#txtEmailEdit').val(client.email);
			$('#txtIdEdit').val(client.id);
			$('#txtMobileEdit').val(client.mobile);
			$('#txtNameEdit').val(client.name);
			$('#txtPhoneEdit').val(client.phone);
			$('#ddlStateEdit').val(client.stateid);
			$('#txtWebsiteEdit').val(client.website);
		});
		$('#editModal').modal();
	});

	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(client, status){
			$('#txtAddressEdi').val(client.address);
            			$('#txtCityEdi').val(client.city);
            			$('#ddlCountryEdi').val(client.countryid);
            			$('#txtDetailsEdi').val(client.details);
            			$('#txtEmailEdi').val(client.email);
            			$('#txtIdEdi').val(client.id);
            			$('#txtMobileEdi').val(client.mobile);
            			$('#txtNameEdi').val(client.name);
            			$('#txtPhoneEdi').val(client.phone);
            			$('#ddlStateEdi').val(client.stateid);
            			$('#txtWebsiteEdi').val(client.website);
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