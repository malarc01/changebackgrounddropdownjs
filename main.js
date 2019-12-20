function colorBg() {
	var selectedId = document.getElementById('selectid');
	var bgColor = selectedId.options[selectedId.selectedIndex].value;
	document.body.style.backgroundColor = bgColor;
}
