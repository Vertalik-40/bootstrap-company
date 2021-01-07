$(document).ready(function(){
	$('#thumbs img').on('click', function(){
	$('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
	$('#description').html($(this).attr('alt'));
});
});