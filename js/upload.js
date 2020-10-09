
function load(value){
	var c = value.cases;
	var r = value.recovered;
	var d = value.deaths;
	var all = c + r + d;
	var pc = (c/all) * 100;
	var pr = (r/all) * 100;
	var pd = (d/all) * 100;
	if ( c== null){
		c = "unknown";
	}
	if (r == null){
		r = "unknown";
	}
	if (d == null){
		d = "unknown";
	}
	$("#result").append('<li class="list-group-item item"><div class="card border-primary" style="max-width: 100%"><div class="card-header">	<h1>' + value.country + '</h1></div><div class="card-body text-dark">		  <h2>Cases : ' + c + '</h2>		<h2>Recovered : ' + r + '</h2><h2>Deaths : ' + d + '</h2>		<div class="gr"><div class="pro"><h2>Cases</h2><div class="progress"><div class="progress-bar bg-warning" role="progressbar" style="width: '+pc+'%" aria-valuenow="'+pc+'" aria-valuemin="0" aria-valuemax="100"></div></div></div><div class="pro"><h2>Recovered</h2><div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: '+pr+'%" aria-valuenow="'+pr+'" aria-valuemin="0" aria-valuemax="100"></div></div></div><div class="pro"><h2>Deaths</h2><div class="progress"><div class="progress-bar bg-danger" role="progressbar" style="width: '+pd+'%" aria-valuenow="'+pd+'" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div></li>');												  
}

var url ="https://coronavirus-19-api.herokuapp.com/countries";
$(document).ready(function() {
	$.getJSON(url, function(data) {
		$.each(data, function(key, value) {
			load(value);
		});
	});

	$("#search").keyup(function() {
		$("#result").html("");
		var searchField =$("#search").val();
		var expression = new RegExp(searchField, "i");
		$.getJSON(url, function(data) {
			$.each(data, function(key, value) {
				if (value.country.search(expression) != -1)
				{
					load(value);
				}
			});
		});
	});
	
});


