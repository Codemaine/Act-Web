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
    title: 'Buy a Responsive Website',
    description: 'Email jermaineantwi22@gmail.com the images and the look of the website.',
		currency: 'USD',
		amount: 1400,
	}, function( err, res ){
			if (err)
				return console.log(err);

		console.log(res.transaction.id);

		alert('Thank you!');
	});

}

// Android App Payment

function adp() {

  var paylike = Paylike('89e97b47-96c3-4e81-83de-fecf7c4399b3');

  paylike.popup({
    title: 'Buy an Android App',
    description: 'Email jermaineantwi22@gmail.com the images and look of the app',
    currency: 'USD',
    amount: 1100,
  }, function( err, res ) {
    if (err)
       return console.log(err);

       console.log(res.transaction.id);

       alert('Thank you!');

  });

}
