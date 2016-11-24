function persist()
{
	localStorage.sizeSolGeyser = document.getElementById('txtSizeSolGeyser').value;				
	localStorage.QtySolGeyser = document.getElementById('txtQtySolGeyser').value;					
	localStorage.SizeElecGeyser = document.getElementById('txtSizeElecGeyser').value;				
	localStorage.QtyElecGeyser = document.getElementById('txtQtyElecGeyser').value;				
	localStorage.SizeGasGeyser = document.getElementById('txtSizeGasGeyser').value;				
	localStorage.QtyGasGeyser = document.getElementById('txtQtyGasGeyser').value;					
	localStorage.IsHeatPump = document.getElementById('selIsHeatPump').value;					
	localStorage.IsBlanket = document.getElementById('selIsBlanket').value;					
	localStorage.StoveType = document.getElementById('selStoveType').value;					
	localStorage.OvenType = document.getElementById('selOvenType').value;		
}

function load()
{
	if (localStorage.sizeSolGeyser!=null) {document.getElementById('txtSizeSolGeyser').value = localStorage.sizeSolGeyser} else {document.getElementById('txtSizeSolGeyser').value =''} ;				
	if (localStorage.QtySolGeyser!=null) {document.getElementById('txtQtySolGeyser').value = localStorage.QtySolGeyser} else {document.getElementById('txtQtySolGeyser').value =''};					
	if (localStorage.SizeElecGeyser!=null) {document.getElementById('txtSizeElecGeyser').value = localStorage.SizeElecGeyser} else {document.getElementById('txtSizeElecGeyser').value =''};				
	if (localStorage.QtyElecGeyser!=null) {document.getElementById('txtQtyElecGeyser').value = localStorage.QtyElecGeyser} else {document.getElementById('txtQtyElecGeyser').value =''};				
	if (localStorage.SizeGasGeyser!=null) {document.getElementById('txtSizeGasGeyser').value = localStorage.SizeGasGeyser} else {document.getElementById('txtSizeGasGeyser').value =''};				
	if (localStorage.QtyGasGeyser!=null) {document.getElementById('txtQtyGasGeyser').value = localStorage.QtyGasGeyser} else {document.getElementById('txtQtyGasGeyser').value =''};					
	if (localStorage.IsHeatPump!=null) {document.getElementById('selIsHeatPump').value = localStorage.IsHeatPump} else {document.getElementById('selIsHeatPump').value ='No'};					
	if (localStorage.IsBlanket!=null) {document.getElementById('selIsBlanket').value = localStorage.IsBlanket} else {document.getElementById('selIsBlanket').value ='No'};					
	if (localStorage.StoveType!=null) {document.getElementById('selStoveType').value = localStorage.StoveType} else {document.getElementById('selStoveType').value ='Gas'};					
	if (localStorage.OvenType!=null) {document.getElementById('selOvenType').value = localStorage.OvenType} else {document.getElementById('selOvenType').value ='Gas'};						
	
	recalc();
}