function colorBg() {
	var selectedId = document.getElementById('selectid');
	var bgColor = selectedId.options[selectedId.selectedIndex].value;
	console.log(selectedId.options[selectedId.selectedIndex]);
	document.body.style.backgroundColor = bgColor;
}
