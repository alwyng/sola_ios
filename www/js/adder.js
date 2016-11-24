
function load()
{

	//localStorage.clear();
	getkWh();   //populate kWh box
	getState();    //populate previous appliance values
	setEvents();   //add change events to boxes
	//setRoomList();  //persist roomlist i.e. if room is not added then add
	setDebug();   //future use
}

function setDebug()
{
	if (localStorage.getItem("isDebug")=="true") {

		var frmDebug = document.getElementById('debug');
		frmDebug.innerHTML = localStorage.Kitchen;
		//alert("test");
		//var txtDebug = document.createElement("input");
        //txtDebug.type = "text";
		//frmDebug.appendChild(txtDebug);
		//alert("XXX");
	}
}

function setRoomList()
{
	if (localStorage.getItem("roomList")!=null) {
		var roomList = localStorage.getItem("roomList");
		var arrRooms = roomList.split(";");
		if (arrRooms.indexOf(localStorage.CurrentApp.replace(/ /g,'')) < 0) {
			arrRooms.push(localStorage.CurrentApp.replace(/ /g,''));
			//localStorage.setItem(localStorage.CurrentApp.replace(/ /g,''),"");
		}
		roomList = arrRooms.join(";");
		localStorage.setItem("roomList",roomList);
	} else {
		localStorage.setItem("roomList",localStorage.CurrentApp.replace(/ /g,''));
		//localStorage.setItem(localStorage.CurrentApp.replace(/ /g,''),"");
	}
}

function setEvents()
{
	if (document.getElementById("defaulthrs")!=null) {
		var box = document.getElementById("defaulthrs");
		box.addEventListener('change',persistTable);

		var box = document.getElementById("defaultnbr");
		box.addEventListener('change',persistTable);
	}
}

function getState()
{
	if (localStorage.getItem(localStorage.CurrentApp.replace(/ /g,''))!=null) {
		var strPersist = localStorage.getItem(localStorage.CurrentApp.replace(/ /g,''));
		var arrApps = strPersist.split(";");

		//assign table
		var table = document.getElementById("tblApp");
		//document.getElementById("defaulthrs").add;

		for (i = 0; i < arrApps.length-1; i++) {
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			cell1.innerHTML = "<div style='width:200px;'>"+arrApps[i].split(",")[0]+"</div>";
			//add the capture boxes
			var hrs = document.createElement('input');
			hrs.setAttribute('type', 'text');
			hrs.setAttribute('placeholder', 'Hours per Day');
			hrs.setAttribute('style','height: 100%; width: 100%; box-sizing: border-box');
			hrs.addEventListener('change',persistTable);
			hrs.value = arrApps[i].split(",")[1];
			var cell2 = row.insertCell(1);
			cell2.appendChild(hrs);
			var nbr = document.createElement('input');
			nbr.setAttribute('type', 'text');
			nbr.setAttribute('placeholder', 'Quantity');
			nbr.setAttribute('style','height: 100%; width: 100%; box-sizing: border-box');
			nbr.addEventListener('change',persistTable);
			nbr.value = arrApps[i].split(",")[2];
			var cell3 = row.insertCell(2);
			cell3.appendChild(nbr);

			if (i>0) {
				var imgDel = document.createElement('img');
				imgDel.src = "../img/delete.gif";
				imgDel.addEventListener('click',function(){removeApp(this)});
				var cell4 = row.insertCell(3);
				cell4.appendChild(imgDel);
			}
		}
	}
}

function removeApp(app)
{
	var row = app.parentNode.parentNode;
	row.parentNode.removeChild(row);
	persistTable();

	//recalculate kWh
	recalc();
}

function persistTable()
{
	//alert('t');
	var table = document.getElementById("tblApp");
	var strPersist = "";
	//alert(strPersist);
	for (var i = 0, row; row = table.rows[i]; i++) {

		for (var j = 0, col; col = row.cells[j]; j++) {
			var str = col.innerHTML;
			//alert(str);
			var idx = str.indexOf('type="text"');
			//alert(idx);
			if (idx>-1) {
				//App hrs and nbr
				if (j==2) {

					strPersist += col.children[0].value+";";
				}
				else {
					strPersist += col.children[0].value+",";
				}
				//alert(strPersist);
			}
			else if (str.indexOf('img')<=-1) {
				//App name
				if (str.indexOf('Custom')>-1) {
					var id=str.substring(42,46);
					strPersist += document.getElementById(id).value+",";
				} else {
					strPersist += col.innerText+",";
				}
			}
		}
	}
	//alert(strPersist);
	//write to storage
	localStorage.setItem(localStorage.CurrentApp.replace(/ /g,''),strPersist);
	//alert(localStorage.getItem(localStorage.CurrentApp.replace(/ /g,'')));

	//make sure to recalculate kWh
	recalc();
	
	//persist roomlist i.e. if room is not added then add
	setRoomList();  //this is not the correct place as it increases overhead. need to change this logic at some stage

	setDebug();
}

function getkWh()
{
	document.frmKwh.txtKwh.value = localStorage.kWh+" kWh";
}

function AddApp()
{
	//get picked item
	var lstItem = document.getElementById("lstAppPicker");
	var txtAddApp = lstItem.options[lstItem.selectedIndex].text;

	//update table
	var table = document.getElementById("tblApp");
	var row = table.insertRow(table.rows.length);
	//add the selected appliance
	var cell1 = row.insertCell(0);
	if (txtAddApp!='Other (Text box to add to existing list)') {
		cell1.innerHTML = "<div style='width:200px;'>"+txtAddApp+"</div>";
	} else {
		var uid = ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
		cell1.innerHTML = '<input placeholder="Custom Appliance" id="'+uid+'">';
	}
	//add the capture boxes
    var hrs = document.createElement('input');
    hrs.setAttribute('type', 'text');
    hrs.setAttribute('placeholder', 'Hours per Day');
	hrs.setAttribute('style','height: 100%; width: 100%; box-sizing: border-box');
	hrs.addEventListener('change',persistTable);
	var cell2 = row.insertCell(1);
	cell2.appendChild(hrs);
	var nbr = document.createElement('input');
    nbr.setAttribute('type', 'text');
    nbr.setAttribute('placeholder', 'Quantity');
    nbr.setAttribute('style','height: 100%; width: 100%; box-sizing: border-box');
	nbr.addEventListener("change",persistTable);
	var cell3 = row.insertCell(2);
	cell3.appendChild(nbr);
	var imgDel = document.createElement('img');
	//delete row button
	imgDel.src = "../img/delete.gif";
	imgDel.addEventListener('click',function(){removeApp(this)});
	var cell4 = row.insertCell(3);
	cell4.appendChild(imgDel);
}
