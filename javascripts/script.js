$(function() {
	$('.navi .navi__list').on('click', function() {
		var index = $('.navi .navi__list').index(this);
		$('.navi .navi__list').removeClass('active');
		$(this).addClass('active');
		$('.content').removeClass('show').eq(index).addClass('show');
	});
});
