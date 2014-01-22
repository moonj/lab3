'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("hey");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(formClick);
}

function projectClick(e) {
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       $(description).fadeOut();
    }
}

function formClick(e) {
	e.preventDefault();
	console.log("hey");
	var projectToChange = $("#project").val();
	var projectDescription = $(projectToChange).find(".project-description");
	$(projectDescription).text($("#description").val());
	$(projectToChange).find("#myImg").animate({
		width: 500px;
	}, 1000);
}