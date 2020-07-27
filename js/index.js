document.getElementById("user_section").style.visibility = "hidden";

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

var bol = false;

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  document.getElementById('welcome').innerHTML = "Welcome, " + profile.getName();
  document.getElementById('fie_email').value = profile.getEmail();
  document.getElementById('fie_name').value = profile.getName();
  document.getElementsByClassName('avatar').src = profile.getImageUrl();
  console.log(profile);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    document.getElementById('welcome').innerHTML = 'Shop';
    console.log('User signed out.');
  });
}
