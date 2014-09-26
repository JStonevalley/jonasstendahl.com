 var navigatorItemIds = ['intro', 'resume', 'projects', 'education', 'contact'];

 $(document).ready(function() {
 	var cookieValue = $.cookie("navigation");
 	if (cookieValue == null){
   		ajax_content_bar("introduction.html");
   	}
   	else if (cookieValue == 0){
   		introduction_click();
   	}
   	else if (cookieValue == 1){
   		resume_click();
   	}
   	else if (cookieValue == 2){
   		projects_click();
   	}
   	else if (cookieValue == 3){
   		education_click();
   	}
   	else if (cookieValue == 4){
   		contact_click();
   	}
   	else{
   		ajax_content_bar("introduction.html");
   	}
 });

 function remove_classes(components) {
 	for ( var i = 0; i < components.length; i++ ) {
    $("#" + components[i]).removeClass();
}
 }

 function introduction_click() {
 	ajax_content_bar("introduction.html");
 	remove_classes(navigatorItemIds);
 	$("#intro").attr("class","active");
 	$.cookie("navigation", 0);
 }

 function resume_click() {
 	ajax_content_bar("resume.html");
 	remove_classes(navigatorItemIds);
 	$("#resume").attr("class","active");
 	$.cookie("navigation", 1);
 }

 function projects_click() {
 	ajax_content_bar("projects.html");
 	remove_classes(navigatorItemIds);
 	$("#projects").attr("class","active");
 	$.cookie("navigation", 2);
 }

 function education_click() {
 	ajax_content_bar("education.html");
 	remove_classes(navigatorItemIds);
 	$("#education").attr("class","active");
 	$.cookie("navigation", 3);
 }

  function contact_click() {
 	ajax_content_bar("contact.html");
 	remove_classes(navigatorItemIds);
 	$("#contact").attr("class","active");
 	$.cookie("navigation", 4);
 }
 function ajax_content_bar(path){
 	$.ajax({url: path,success:function(result){
    	$("#text").html(result);
  	}});
 }