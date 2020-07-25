$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// Responsive Website Payment
function webd() {

var paylike = Paylike('89e97b47-96c3-4e81-83de-fecf7c4399b3');

	paylike.popup({
    title: 'Buy Responsive Website',
    description: 'Email jermaineantwi22@gmail.com and add the images and the look of the website.',
		currency: 'USD',
		amount: 8000,
	}, function( err, res ){
			if (err)
				return console.log(err);

		console.log(res.transaction.id);

		alert('Thank you!');
	});

}
