var nameList = "";
var emailList = "";
function load(){
	$.ajax({
		dataType: "jsonp",
		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
	});
}
function jsonCallback(data) {
	for(var i=0; i<data.length; i++){
		nameList = data[i].name;
		emailList = data[i].email;
		$('#body').prepend("<tr><td>" +nameList+ "</td><td>"+emailList+"</a></td></tr>");
	}
}
