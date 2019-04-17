var n1 = 0;
var n2 = 0;

function suma(){
	var texto = document.querySelector('p').innerHTML;
	document.querySelector('p').innerHTML = texto + (n1 + n2);	
}
function resta(){
	var texto = document.querySelector('p').innerHTML;
	document.querySelector('p').innerHTML = texto + (n1 - n2);
}
function multiplicacion(){
	 var texto = document.querySelector('p').innerHTML;
	document.querySelector('p').innerHTML = texto + (n1 * n2);
}
function division(){
	var texto = document.querySelector('p').innerHTML;
	document.querySelector('p').innerHTML = texto + (n1 / n2);
}
function numero1(n){
	n1 = parseInt(n);
}
function numero2(n) {
	n2 = parseInt(n);
}