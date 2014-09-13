 $(document).ready(function() {
   	ajax_content_bar("introduction.html");
 });

 function introduction_click() {
 	ajax_content_bar("introduction.html");
 }

 function resume_click() {
 	ajax_content_bar("resume.html")
 }
 function ajax_content_bar(path){
 	$.ajax({url: path,success:function(result){
    	$("#text").html(result);
  	}});
 }