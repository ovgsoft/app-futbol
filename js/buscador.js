$("input[type='search']").keyup(function(){

	$("table").DataTable().search($(this).val()).draw();

});