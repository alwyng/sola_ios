/*function captureEmail()
{
	//check validity
	var x = document.forms["myform"]["txtEmail"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	
	//store email address
	persist();
}*/

function persist()
{
	localStorage.userName = document.getElementById("txtName").value; 
	localStorage.userSurname = document.getElementById('txtSurname').value;

	if (document.getElementById("txtName").value!="" && document.getElementById('txtSurname').value!="") {
		document.getElementById("btnContinue").style.background = "#d2232a";
		document.getElementById("lnkContinue").href = "data/main.html";
	} else {
		document.getElementById("btnContinue").style.background = "#BABABA";
		document.getElementById("lnkContinue").href = "";
	}
}

function populate()
{
	if (localStorage.userName!=null) {document.getElementById('txtName').value=localStorage.userName} else {document.getElementById('txtName').value=''};
	if (localStorage.userSurname!=null) {document.getElementById('txtSurname').value=localStorage.userSurname} else {document.getElementById('txtSurname').value=''};
	if (document.getElementById("txtName").value!="" && document.getElementById('txtSurname').value!="") {
		document.getElementById("btnContinue").style.background = "#d2232a";
		document.getElementById("lnkContinue").href = "data/main.html";
	}
	//if (localStorage.userEmail!=null) {document.getElementById('txtEmail').value=localStorage.userEmail} else {document.getElementById('txtEmail').value=''};
}

function load()
{
	//localStorage.clear();
	if (!localStorage["isSubmit"]) {
		localStorage.isSubmit = 0;   //set to 0 if not initialised
	}
	
	populate();
	//recalc();
	//section();
}

function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

function section() {
	if (localStorage.getItem('isSubmit')==1) {
		div = document.getElementById('submit');
		div.style.display = 'block';
		
		div = document.getElementById('login');
		div.style.display = 'none';
	} else 
	if (localStorage.getItem('isSubmit')==0/* or localStorage.getItem('isSubmit')==null*/) {
		div = document.getElementById('submit');
		div.style.display = 'none';
		
		div = document.getElementById('login');
		div.style.display = 'block';
	}
}