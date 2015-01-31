/*$('.inputCheck').on('click', function(event){
	// console.log(this.checked);
	var li = $('.inputCheck').closest("li");
	var $this = $(this);
	if ($this.checked === true)  {
		$this.toggleClass("yellow");
	} else {
		$this.toggleClass("yellow");
	}

})*/

$('.inputCheck').each(function(index,el){
	var $el = $(el);
	var $li = $el.closest("li");

	$el.bind('click', function(e){
		if ($el.checked === true)  {
			$li.toggleClass("yellow");
		} else {
			$li.toggleClass("yellow");
		}
	});

});


$('.composeBtn').on('click', function() {
	console.log('working');
	$('.revealer').toggleClass("hidden");
})