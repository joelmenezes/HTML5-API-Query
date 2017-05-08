function showResults(){
	//document.getElementById("apiList1").innerHTML = "<input type='submit' value='Back' onclick='window.close();' /><br /><p id='title'></p> <br/> <image id = 'img' /> <br/> <p id = 'text'></p>";
	var id = localStorage.getItem("current");
	var title = localStorage.getItem("title"+id);
	var date = localStorage.getItem("date"+id);	
	var url1 = localStorage.getItem("url"+id);
	var txt = localStorage.getItem("text"+id);
	var radiov = localStorage.getItem("radio"+id);
	document.getElementById("title").innerHTML = title + " " + date;	
	//document.getElementById("value").value = radiov;
	
	var icon = document.getElementById("img");
	icon.src = url1;
	icon.setAttribute("alt", "user");
	icon.setAttribute("height", 100);
	icon.setAttribute("width", 100);
	
	document.getElementById("text").innerHTML = txt;
	
	$(document).ready(function(){
  var radios = document.getElementsByName("value");
  var val = localStorage.getItem('value'+id);
  for(var i=0;i<radios.length;i++){
    if(radios[i].value == val){
      radios[i].checked = true;
    }
  }
  $('input[name="value"]').on('change', function(){
    localStorage.setItem('value'+id, $(this).val());
  
  });
});
}

function goBack(){
	window.history.back();
}
