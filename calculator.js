// JavaScript Document


function d(val) {
	document.getElementById("d").value = val;	
}
function v(val) {
	document.getElementById("d").value += val;	
}
function e() {
	try {
		d(eval(document.getElementById("d").value));	
	}
	catch(err) {
		d("Error");	
	}
}

function p() {
	e();
	var m = document.getElementById("d").value;
	m = Math.round(m *100);
	d(m);
}
function s() {
	e();
	var a = document.getElementById("d").value * document.getElementById("d").value;
	d(a);
}
function c() {
	e();
	var b = document.getElementById("d").value * document.getElementById("d").value * document.getElementById("d").value;
	d(b);
}