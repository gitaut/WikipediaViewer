$(document).ready(function(){
	$("#search").click(function(){
		//gets search input
		var searchTerm = $("#searchTerm").val();
		// API url with searchTerm
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

		$.ajax({
			type:"GET",
			url:url,
			async:false,
			dataType:"json",
			success: function(data){
				//get heading console.log(data[0][0]);
				//get description console.log(data[2][1]);
				//get link console.log(data[3][1]);
				$("#output").html('');
				for(var i = 0; i < data [1].length; i++){
					$('#output').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
				}
				$('#searchTerm').val('');
			},
			error: function(errorMessage){
				alert("Error");
			}
		});
	});
	$('#searchTerm').keypress(function(e){
		if(e.which == 13){
			$('#search').click();
		}		
	});
});