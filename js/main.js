function showElement() {
	
	if(document.getElementById("show").style.display=="block")
	{
		document.getElementById("show").style.display="none";	
	}
	if(document.getElementById("hide").style.display=="none")
	{
		document.getElementById("hide").style.display="block";
	}
	return	console.log("essai")
	
};

const popup = function popUp(){
	alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}
window.onload = popup;
if (!window.onload.closed){ 
settimeout = (function(){
	window.onload.closed.popup	
},10000);
}
