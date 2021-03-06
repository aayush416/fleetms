/**
 *
 */

$('document').ready(function() {

	$('.table .btn-primary').on('click',function(event){
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(contact, status){
			$('#txtEmailEdit').val(contact.email);
			$('#txtFirstnameEdit').val(contact.firstname);
			$('#txtIdEdit').val(contact.id);
			$('#txtLastnameEdit').val(contact.lastname);
			$('#txtMobileEdit').val(contact.mobile);
			$('#txtPhoneEdit').val(contact.phone);
			$('#txtRemarksEdit').val(contact.remarks);
		});
		$('#editModal').modal();
	});

	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(contact, status){
		$('#txtEmailEdi').val(contact.email);
        			$('#txtFirstnameEdi').val(contact.firstname);
        			$('#txtIdEdi').val(contact.id);
        			$('#txtLastnameEdi').val(contact.lastname);
        			$('#txtMobileEdi').val(contact.mobile);
        			$('#txtPhoneEdi').val(contact.phone);
        			$('#txtRemarksEdi').val(contact.remarks);
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