
$('document').ready(function() {
	$('.table .btn-primary').on('click',function(event){
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(invoice, status){
			$('#idEdit').val(invoice.id);
			$('#ddlClientEdit').val(invoice.clientid);
			$('#ddlInvoiceStatusEdit').val(invoice.invoicestatusid);
			var invoiceDate = invoice.invoiceDate.substr(0,10);
			$('#invoiceDateEdit').val(invoiceDate);
			$('#remarksEdit').val(invoice.remarks);
		});
		$('#editModal').modal();
	});

	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();
		var href= $(this).attr('href');
		$.get(href, function(invoice, status){
			$('#idDetails').val(invoice.id);
			$('#ddlClientDetails').val(invoice.clientid);
            $('#ddlInvoiceStatusDetails').val(invoice.invoicestatusid);
			var invoiceDate = invoice.invoiceDate.substr(0,10);
			$('#invoiceDateDetails').val(invoiceDate);
			$('#remarksDetails').val(invoice.remarks);
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