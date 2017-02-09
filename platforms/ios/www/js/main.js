
function load()
{
	localStorage.isSubmit = '0';
	//localStorage.clear();
	//alert(localStorage.getItem(roomList);
	//alert(localStorage.getItem(arrRooms));

	/*Declare global variables*/
	arrRooms = ["Kitchen","Dining Room","Bedroom 1","Bathroom 1","Bedroom 2","Bathroom 2","Bedroom 3","Bathroom 3","Living Inside","Living Outside","Scullery","Laundry","Garden","Office"];
	if (localStorage.arrRooms==null) {
		localStorage.arrRooms = arrRooms;
	}
	else {
		arrRooms = localStorage.arrRooms.split(',');
	}

	//Room defaults*/
	localStorage.arrKitchenApp = ["Airconditioner","Ceiling Fan","Coffee Machine","Electric Hob","Evap Cooler","Flourescent Lights","Fridge Freezer Combination","Kettle","LED Lights","Microwave","Oven","Stand Alone Freezer","Stand Alone Fridge","Toaster"];
	localStorage.intKitchenDefault = 14;

	localStorage.arrDiningRoomApp = ["Airconditioner","Ceiling Fan","Flourescent Lights","LED Lights"];
	localStorage.intDiningRoomDefault = 4;

	localStorage.arrBedroom1App = ["Airconditioner","Ceiling Fan","Clock Radio","Flourescent Lights","Hair Dryer","LED Lights"];
	localStorage.intBedroom1Default = 6;

	localStorage.arrBedroom2App = ["Airconditioner","Ceiling Fan","Clock Radio","Flourescent Lights","Hair Dryer","LED Lights"];
	localStorage.intBedroom2Default = 6;

	localStorage.arrBedroom3App = ["Airconditioner","Ceiling Fan","Clock Radio","Flourescent Lights","Hair Dryer","LED Lights"];
	localStorage.intBedroom3Default = 6;

	localStorage.arrBathroom1App = ["Flourescent Lights","LED Lights"];
	localStorage.intBathroom1Default = 2;

	localStorage.arrBathroom2App = ["Flourescent Lights","LED Lights"];
	localStorage.intBathroom2Default = 2;

	localStorage.arrBathroom3App = ["Flourescent Lights","LED Lights"];
	localStorage.intBathroom3Default = 2;

	localStorage.arrLivingInsideApp = ["Airconditioner","Ceiling Fan","Cordless Phone","Decoders","Flourescent Lights","Game Console","LED Lights","Radio","TV","Wi-Fi Modem"];
	localStorage.intLivingInsideDefault = 10;

	localStorage.arrLivingOutsideApp = ["Airconditioner","Ceiling Fan","Flourescent Lights","LED Lights"];
	localStorage.intLivingOutsideDefault = 4;

	localStorage.arrSculleryApp = ["Airconditioner","Ceiling Fan","Dishwasher","Flourescent Lights","LED Lights","Vacuum Cleaner"];
	localStorage.intSculleryDefault = 6;

	localStorage.arrLaundryApp = ["Airconditioner","Ceiling Fan","Flourescent Lights","Iron","LED Lights","Tumble Dryer","Washing Machine"];
	localStorage.intLaundryDefault = 7;

	localStorage.arrGardenApp = ["Electric Fence","Garage or Gate Motors","Security Lights (Which operate during the night)","Swimming Pool Pump"];
	localStorage.intGardenDefault = 4;
	
	localStorage.arrOfficeApp = ["LED lights","TV","Ceiling Fan","Airconditioner","Flourescent lights","Wi-Fi modem","Radio","Decoders","Game console","Cordless phone"];
	localStorage.intOfficeDefault = 10;
	
	// localStorage.arrApplianceList = ["Security Lights (Which operate during the night)","LED Lights","Flourescent Lights","Electric Fence","Alarm","Wi-Fi Modem","Clock Radio","Garage or Gate Motors","Radio","Laptops","Stand Alone Personal Computer","Fridge Freezer Combination","Stand Alone Freezer","TV","Microwave","Washing Machine","Tumble Dryer","Dishwasher","Kettle","Hair Dryer","Vacuum Cleaner","Iron","Heatpump Geyser","Standard Geyser (Not recommended)","Swimming Pool Pump","Evap Cooler","Stand Alone Fridge","Decoders","Oven","Electric Hob","Ceiliing Fan","Game Console","Printer","Cordless Phone","Airconditioner","Coffee Machine","Toaster","Other (Text box to add to existing list)"];
	// localStorage.arrApplianceWattList = ["11","5","56","30","10","50","30","150","200","90","500","250","200","150","900","700","3000","2000","1000","1500","1000","1000","1000","3000","1000","750","180","20","2400","750","25","30","160","2","500","3000","3600"];
	localStorage.arrApplianceList = ["Airconditioner","Alarm","Ceiliing Fan","Clock Radio","Coffee Machine","Cordless Phone","Decoders","Dishwasher","Electric Fence","Electric Hob","Evap Cooler","Flourescent Lights","Fridge Freezer Combination","Game Console","Garage or Gate Motors","Hair Dryer","Heatpump Geyser","Iron","Kettle","Laptops","LED Lights","Microwave","Oven","Printer","Radio","Security Lights (Which operate during the night)","Stand Alone Freezer","Stand Alone Fridge","Stand Alone Personal Computer","Standard Geyser (Not recommended)","Swimming Pool Pump","Toaster","Tumble Dryer","TV","Vacuum Cleaner","Washing Machine","Wi-Fi Modem","Other (Text box to add to existing list)"];
	localStorage.arrApplianceWattList = ["500","10","25","30","3000","2","20","2000","30","750","750","56","250","30","150","1500","1000","1000","1000","90","5","900","2400","160","200","11","200","180","500","3000","1000","3600","3000","150","1000","700","50"];
	/*------------------------*/

	//set to true for debug mode
	localStorage.isDebug = "false";

	document.addEventListener("deviceready",deviceReadyFeedback,false);

	createRooms();

	recalc();
}

function createRooms()
{
	if (localStorage.getItem("roomList")===null) {
		roomList="";
	} else {
		roomList = localStorage.roomList;
	}

	var table = document.getElementById("tblRooms");
	table.innerHTML = "";
	var arrStack = arrRooms;
	var iRows = Math.floor(arrRooms.length/2);
	var iBtn = 0;

	//alert(arrStack);

	for (var i = 0; i<=iRows; i++) {
		var row = table.insertRow(table.rows.length);
		for (var j = 0; j<2; j++) {
			if (arrStack.length>0) {
				iBtn++;
				var cell = row.insertCell(j);
				var btn = document.createElement('div');
				btn.setAttribute('style','text-align:left;padding-left:5%');
				if (roomList.indexOf(arrStack[0].replace(/ /g,''))>-1) {
					btn.innerHTML = "<div style='display: inline-block;width: 95%'> <input style='background-color: #4CAF50;' type = 'button' class='button button-fill' value = '"+arrStack[0]+"' onClick = 'gotoAdder(this.value)'></div>";
				} else {
					btn.innerHTML = "<div style='display: inline-block;width: 95%'> <input type = 'button' class='button button-fill' value = '"+arrStack[0]+"' onClick = 'gotoAdder(this.value)'></div>";
				}

				if (iBtn>14) {
					if (roomList.indexOf(arrStack[0].replace(/ /g,''))>-1) {
						btn.innerHTML = "<div style='display: inline-block;width: 80%'> <input style='background-color: #4CAF50;' type = 'button' style='vertical-align:bottom' class='button button-fill' value = '"+arrStack[0]+"' onClick = 'gotoAdder(this.value)'></div>"+'<div style="display:inline-block"><img src="../img/delete.gif" style="padding-left:60%;padding-right:40%;vertical-align:bottom" alt="Delete" onclick="removeRoom('+"'"+arrStack[0]+"'"+')"></div>';
					} else {
						btn.innerHTML = "<div style='display: inline-block;width: 80%'> <input type = 'button' style='vertical-align:bottom' class='button button-fill' value = '"+arrStack[0]+"' onClick = 'gotoAdder(this.value)'></div>"+'<div style="display:inline-block"><img src="../img/delete.gif" style="padding-left:60%;padding-right:40%;vertical-align:bottom" alt="Delete" onclick="removeRoom('+"'"+arrStack[0]+"'"+')"></div>';
					}
				}

				cell.appendChild(btn);

				//pop the first stack item
				arrStack.splice(0,1);
			}
		}
	}
}

function deviceReadyFeedback()
{
	if (!cordova.plugins.email) {
		alert('Email functionality not available');
	};
}

function gotoAdder(txt)
{
	setCurrentApp(txt);
	window.location.href = 'appliance_adder.html';
}

function setCurrentApp(txt)
{
	localStorage.CurrentApp = txt;
}

function addRoom()
{
	var txtRoom = document.getElementById('txtRoom');
	arrRooms = localStorage.arrRooms.split(',');
	arrRooms.push(txtRoom.value);
	localStorage.arrRooms = arrRooms;
	txtRoom.value = '';

	createRooms();
}

function removeRoom(strRoom)
{
	arrRooms = localStorage.arrRooms.split(',');
	for (var i=0;i<arrRooms.length;i++) {
		if (arrRooms[i]==strRoom) {
			arrRooms.splice(i,1);
			i = arrRooms.length;
		}
	}
	localStorage.arrRooms = arrRooms;

	roomList = localStorage.roomList.split(';');
	for (var i=0;i<roomList.length;i++) {
		if (roomList[i]==strRoom) {
			roomList.splice(i,1);
			i = roomList.length;
		}
	}
	roomList = roomList.join(";");
	localStorage.roomList = roomList;

	localStorage.removeItem(strRoom);

	createRooms();

	recalc();
}

function setSubmit()
{
	localStorage.isSubmit = 1;
	//alert('submit set');
}
