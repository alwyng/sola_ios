function load()
{
	recalc();
}

function resetData()
{
	localStorage.clear();
	localStorage.kWh = 0;
	recalc();
}