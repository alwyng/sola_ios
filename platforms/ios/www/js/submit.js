function load()
{
	recalc();
	
	/*validation - can't submit if no data*/
	if (localStorage.kWh==0) {
		var btnSubmit = getElementsByName('btnSubmit');
		btnSubmit.disabled = true;
		alert('No appliance information captured yet');
	}
}

function submit()
{
	alert("Submit");
}
/*
function email()
{
	alert('try to send mail');
	try {
		cordova.plugins.email.open({
			to:      'alwyn.grobler@gmail.com',
			cc:      [],
			bcc:     [],
			subject: 'Solareff App Result',
			body:    'Test'
		});
	}
	catch(err) {
		alert(err.message);
	}
	alert('mail send complete');
}*/